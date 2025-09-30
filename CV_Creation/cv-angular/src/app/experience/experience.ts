import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { JobsComponent } from './jobs/jobs';
import { StudiesComponent } from './studies/studies';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterOutlet, JobsComponent, StudiesComponent],
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  mostrarExperiencia = true;

  toggleExperiencia() {
    this.mostrarExperiencia = !this.mostrarExperiencia;
  }
}
