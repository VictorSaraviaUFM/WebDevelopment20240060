import { Component } from '@angular/core';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
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
