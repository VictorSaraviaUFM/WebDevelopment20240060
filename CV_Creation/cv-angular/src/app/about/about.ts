import { Component } from '@angular/core';
import { DataService, Study } from '../services/data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  studies: Study[] = [];

  constructor(private data: DataService) {
    this.studies = this.data.getStudies();
  }
}
