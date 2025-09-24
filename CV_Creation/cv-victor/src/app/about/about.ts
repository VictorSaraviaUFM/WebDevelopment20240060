import { Component } from '@angular/core';
import { DataService, Study } from '../services/data';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  studies: Study[] = [];

  constructor(private data: DataService) {
    this.studies = this.data.getStudies();
  }
}
