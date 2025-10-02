import { Injectable } from '@angular/core';

export interface Job {
  title: string;
  period: string;
  description: string;
}

export interface Study {
  institution: string;
  period: string;
  degree: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  softSkills: string[] = ['Comunicación,', 'Liderazgo,', 'Trabajo en equipo y ', 'Resolución de problemas'];
  hardSkills: string[] = ['C++,', 'Python,', 'HTML,', 'Arduino,', 'Angular y ', 'CSS'];

  jobs: Job[] = [
    {
      title: 'Proyecto Arduino - Desarrollador',
      period: '2025 - Actualidad',
      description: 'Desarrollo de proyectos con Arduino, sensores, automatización y programación en C++ y Python. Participación en diseño de circuitos y documentación técnica.'
    },
    {
      title: 'Diseño Web - Freelancer',
      period: '2024 - 2025',
      description: 'Desarrollo de sitios web usando HTML, CSS, Bootstrap y WordPress. Gestión de clientes y entrega de proyectos a tiempo.'
    }
  ];

  studies: Study[] = [
    { institution: 'Universidad Francisco Marroquín', period: '2024 - Presente', degree: 'Ingeniería en Ciencias de la Computación' },
    { institution: 'Colegio Decroly Americano', period: '2012 - 2023', degree: 'Bachillerato en Ciencias y Letras' }
  ];

  constructor() {}

  getSoftSkills() { return this.softSkills; }
  getHardSkills() { return this.hardSkills; }
  getJobs() { return this.jobs; }
  getStudies() { return this.studies; }
}