import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  mostrarExperiencia = true;

  toggleExperiencia() {
    this.mostrarExperiencia = !this.mostrarExperiencia;
  }
}
