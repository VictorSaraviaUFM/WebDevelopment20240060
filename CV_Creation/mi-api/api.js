// ========================================
// API REST PARA GESTIONAR EDUCACIÓN Y CERTIFICADOS
// ========================================

// 1. IMPORTAR LAS LIBRERÍAS QUE NECESITAMOS
const express = require('express'); // Express: framework para crear APIs
const cors = require('cors');       // CORS: permite que otros sitios web usen nuestra API

// 2. CONFIGURAR NUESTRA APLICACIÓN
const app = express();              // Crear la aplicación Express
const PORT = 3001;                  // Puerto donde va a correr nuestro servidor

// 3. CONFIGURAR MIDDLEWARES (funciones que se ejecutan antes de las rutas)
app.use(cors());                    // Permitir peticiones desde cualquier origen
app.use(express.json());            // Convertir JSON del body de las peticiones a objetos JavaScript

// 4. CREAR NUESTRA "BASE DE DATOS" EN MEMORIA
// ⚠️ IMPORTANTE: Esta base de datos se borra cuando apagamos el servidor
let education = [
  { 
    id: 1, 
    institution: "Universidad Francisco Marroquín", 
    degree: "Ingeniería en Ciencias de la Computación",
    period: "2024 - Presente",
    status: "En curso",
    location: "Guatemala"
  },
  { 
    id: 2, 
    institution: "Colegio Decroly Americano", 
    degree: "Bachillerato en Ciencias y Letras",
    period: "2012 - 2023", 
    status: "Completado",
    location: "Guatemala"
  }
];

let certificates = [
  {
    id: 1,
    name: "Angular Fundamentals",
    institution: "Udemy",
    issueDate: "2024-05-15",
    expiryDate: null,
    credentialURL: "https://www.udemy.com/certificate/UC-123456",
    skills: ["Angular", "TypeScript"]
  },
  {
    id: 2,
    name: "Python for Data Science",
    institution: "Coursera",
    issueDate: "2023-11-20",
    expiryDate: null,
    credentialURL: "https://coursera.org/verify/ABC123",
    skills: ["Python", "Pandas", "NumPy"]
  }
];

// ========================================
// DEFINIR LAS RUTAS DE NUESTRA API - EDUCACIÓN
// ========================================

// 5. RUTA GET /education - OBTENER TODA LA EDUCACIÓN
app.get('/education', (req, res) => {
  // req = request (petición que llega)
  // res = response (respuesta que enviamos)
  res.json({
    success: true,
    data: education,
    count: education.length
  });
});

// 6. RUTA GET /education/:id - OBTENER UNA EDUCACIÓN ESPECÍFICA POR ID
app.get('/education/:id', (req, res) => {
  const id = Number(req.params.id);           // Convertir el ID de string a número
  const edu = education.find(e => e.id === id); // Buscar la educación con ese ID
  
  // Si no encuentra la educación, devolver error 404
  if (!edu) {
    return res.status(404).json({ 
      success: false,
      error: 'Educación no encontrada' 
    });
  }
  
  res.json({
    success: true,
    data: edu
  });
});

// 7. RUTA POST /education - CREAR UNA NUEVA EDUCACIÓN
app.post('/education', (req, res) => {
  const { institution, degree, period, status, location } = req.body; // Extraer datos del body
  
  // Validar que los campos obligatorios estén presentes
  if (!institution || !degree || !period) {
    return res.status(422).json({ 
      success: false,
      error: 'Los campos "institution", "degree" y "period" son obligatorios' 
    });
  }
  
  // Generar un nuevo ID (el más alto + 1)
  const nuevoId = Math.max(0, ...education.map(e => e.id)) + 1;
  
  // Crear la nueva educación
  const nuevaEducacion = { 
    id: nuevoId, 
    institution: institution, 
    degree: degree,
    period: period,
    status: status || "Completado",
    location: location || "Guatemala"
  };
  
  education.push(nuevaEducacion); // Agregar a nuestra "base de datos"
  res.status(201).json({
    success: true,
    data: nuevaEducacion,
    message: "Educación creada exitosamente"
  });
});

// 8. RUTA PATCH /education/:id - ACTUALIZAR PARCIALMENTE UNA EDUCACIÓN
app.patch('/education/:id', (req, res) => {
  const id = Number(req.params.id);           // ID de la educación a actualizar
  const edu = education.find(e => e.id === id); // Buscar la educación
  
  // Si no encuentra la educación, devolver error 404
  if (!edu) {
    return res.status(404).json({ 
      success: false,
      error: 'Educación no encontrada' 
    });
  }

  const { institution, degree, period, status, location } = req.body; // Datos nuevos
  
  // Actualizar solo los campos que vienen en la petición
  if (institution !== undefined) edu.institution = institution;
  if (degree !== undefined) edu.degree = degree;
  if (period !== undefined) edu.period = period;
  if (status !== undefined) edu.status = status;
  if (location !== undefined) edu.location = location;

  res.json({
    success: true,
    data: edu,
    message: "Educación actualizada exitosamente"
  });
});

// 9. RUTA DELETE /education/:id - ELIMINAR UNA EDUCACIÓN
app.delete('/education/:id', (req, res) => {
  const id = Number(req.params.id);                    // ID de la educación a eliminar
  const indice = education.findIndex(e => e.id === id); // Buscar el índice
  
  // Si no encuentra la educación, devolver error 404
  if (indice === -1) {
    return res.status(404).json({ 
      success: false,
      error: 'Educación no encontrada' 
    });
  }
  
  // Eliminar la educación del array y guardarla en una variable
  const educacionEliminada = education.splice(indice, 1)[0];
  res.json({
    success: true,
    data: educacionEliminada,
    message: "Educación eliminada exitosamente"
  });
});

// ========================================
// DEFINIR LAS RUTAS DE NUESTRA API - CERTIFICADOS
// ========================================

// 10. RUTA GET /certificates - OBTENER TODOS LOS CERTIFICADOS
app.get('/certificates', (req, res) => {
  res.json({
    success: true,
    data: certificates,
    count: certificates.length
  });
});

// 11. RUTA GET /certificates/:id - OBTENER UN CERTIFICADO ESPECÍFICO POR ID
app.get('/certificates/:id', (req, res) => {
  const id = Number(req.params.id);
  const certificate = certificates.find(c => c.id === id);
  
  if (!certificate) {
    return res.status(404).json({ 
      success: false,
      error: 'Certificado no encontrado' 
    });
  }
  
  res.json({
    success: true,
    data: certificate
  });
});

// 12. RUTA POST /certificates - CREAR UN NUEVO CERTIFICADO
app.post('/certificates', (req, res) => {
  const { name, institution, issueDate, expiryDate, credentialURL, skills } = req.body;
  
  // Validar campos obligatorios
  if (!name || !institution || !issueDate) {
    return res.status(422).json({ 
      success: false,
      error: 'Los campos "name", "institution" y "issueDate" son obligatorios' 
    });
  }
  
  // Generar nuevo ID
  const nuevoId = Math.max(0, ...certificates.map(c => c.id)) + 1;
  
  // Crear nuevo certificado
  const nuevoCertificado = { 
    id: nuevoId, 
    name: name, 
    institution: institution,
    issueDate: issueDate,
    expiryDate: expiryDate || null,
    credentialURL: credentialURL || "",
    skills: skills || []
  };
  
  certificates.push(nuevoCertificado);
  res.status(201).json({
    success: true,
    data: nuevoCertificado,
    message: "Certificado creado exitosamente"
  });
});

// 13. RUTA PATCH /certificates/:id - ACTUALIZAR PARCIALMENTE UN CERTIFICADO
app.patch('/certificates/:id', (req, res) => {
  const id = Number(req.params.id);
  const certificate = certificates.find(c => c.id === id);
  
  if (!certificate) {
    return res.status(404).json({ 
      success: false,
      error: 'Certificado no encontrado' 
    });
  }

  const { name, institution, issueDate, expiryDate, credentialURL, skills } = req.body;
  
  // Actualizar solo los campos proporcionados
  if (name !== undefined) certificate.name = name;
  if (institution !== undefined) certificate.institution = institution;
  if (issueDate !== undefined) certificate.issueDate = issueDate;
  if (expiryDate !== undefined) certificate.expiryDate = expiryDate;
  if (credentialURL !== undefined) certificate.credentialURL = credentialURL;
  if (skills !== undefined) certificate.skills = skills;

  res.json({
    success: true,
    data: certificate,
    message: "Certificado actualizado exitosamente"
  });
});

// 14. RUTA DELETE /certificates/:id - ELIMINAR UN CERTIFICADO
app.delete('/certificates/:id', (req, res) => {
  const id = Number(req.params.id);
  const indice = certificates.findIndex(c => c.id === id);
  
  if (indice === -1) {
    return res.status(404).json({ 
      success: false,
      error: 'Certificado no encontrado' 
    });
  }
  
  const certificadoEliminado = certificates.splice(indice, 1)[0];
  res.json({
    success: true,
    data: certificadoEliminado,
    message: "Certificado eliminado exitosamente"
  });
});

// 15. RUTA GET / - INFORMACIÓN DE LA API
app.get('/', (req, res) => {
  res.json({
    message: "🎓 API de Educación y Certificados - Victor Saravia",
    version: "1.0.0",
    endpoints: {
      education: {
        "GET /education": "Obtener toda la educación",
        "GET /education/:id": "Obtener educación por ID", 
        "POST /education": "Crear nueva educación",
        "PATCH /education/:id": "Actualizar educación",
        "DELETE /education/:id": "Eliminar educación"
      },
      certificates: {
        "GET /certificates": "Obtener todos los certificados",
        "GET /certificates/:id": "Obtener certificado por ID",
        "POST /certificates": "Crear nuevo certificado", 
        "PATCH /certificates/:id": "Actualizar certificado",
        "DELETE /certificates/:id": "Eliminar certificado"
      }
      
    }
  });
});

// 16. MANEJAR RUTAS NO ENCONTRADAS (404)
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Ruta no encontrada' 
  });
});

// 17. INICIAR EL SERVIDOR
app.listen(PORT, () => {
  console.log(`🚀 API de Educación y Certificados escuchando en http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   EDUCACIÓN:`);
  console.log(`     GET    /education        - Ver toda la educación`);
  console.log(`     GET    /education/:id    - Ver educación específica`);
  console.log(`     POST   /education        - Crear nueva educación`);
  console.log(`     PATCH  /education/:id    - Actualizar educación`);
  console.log(`     DELETE /education/:id    - Eliminar educación`);
  console.log(`   CERTIFICADOS:`);
  console.log(`     GET    /certificates     - Ver todos los certificados`);
  console.log(`     GET    /certificates/:id - Ver certificado específico`);
  console.log(`     POST   /certificates     - Crear nuevo certificado`);
  console.log(`     PATCH  /certificates/:id - Actualizar certificado`);
  console.log(`     DELETE /certificates/:id - Eliminar certificado`);
});