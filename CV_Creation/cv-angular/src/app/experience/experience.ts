import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationApiService, Education, Certificate } from '../services/education-api';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent implements OnInit {
  education: Education[] = [];
  certificates: Certificate[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private educationApi: EducationApiService) {}

  ngOnInit() {
    this.loadDataFromAPI();
  }

  loadDataFromAPI() {
    // Cargar educación desde la API
    this.educationApi.getEducation().subscribe({
      next: (response) => {
        if (response.success) {
          this.education = response.data;
          this.loadCertificates();
        }
      },
      error: (err) => {
        this.error = 'Error cargando educación desde la API';
        this.loading = false;
        console.error('API Error:', err);
      }
    });
  }

  loadCertificates() {
    // Cargar certificados desde la API
    this.educationApi.getCertificates().subscribe({
      next: (response) => {
        if (response.success) {
          this.certificates = response.data;
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error cargando certificados desde la API';
        this.loading = false;
      }
    });
  }

  // Ejemplo: Agregar nueva educación (para demostrar POST)
  addNewEducation() {
    const newEdu = {
      institution: 'Curso Online Demo',
      degree: 'Desarrollo Web Avanzado',
      period: '2024',
      status: 'Completado',
      location: 'Online'
    };

    this.educationApi.createEducation(newEdu).subscribe({
      next: (response) => {
        if (response.success) {
          this.education.push(response.data);
          alert('✅ Educación agregada via API!');
        }
      },
      error: (err) => {
        console.error('Error creando educación:', err);
        alert('❌ Error al agregar educación');
      }
    });
  }

  // Ejemplo: Actualizar educación (para demostrar PATCH)
  updateEducationStatus(id: number) {
    const updates = {
      status: 'Actualizado via API'
    };

    this.educationApi.updateEducation(id, updates).subscribe({
      next: (response) => {
        if (response.success) {
          const index = this.education.findIndex(edu => edu.id === id);
          if (index !== -1) {
            this.education[index] = response.data;
          }
          alert('✅ Educación actualizada via API!');
        }
      },
      error: (err) => {
        console.error('Error actualizando educación:', err);
      }
    });
  }
}