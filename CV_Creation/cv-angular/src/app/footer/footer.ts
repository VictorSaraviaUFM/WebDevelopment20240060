import { Component } from '@angular/core';
import { ThemeService } from '../services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class FooterComponent {
  mostrarContacto = true;

  constructor(public themeService: ThemeService) {}

  toggleContact() {
    this.mostrarContacto = !this.mostrarContacto;
  }

  print() {
    window.print();
  }
}
