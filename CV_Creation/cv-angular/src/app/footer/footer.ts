import { Component } from '@angular/core';
import { ThemeService } from '../services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  constructor(public themeService: ThemeService) {}

  print() {
    window.print();
  }
}