import { Component } from '@angular/core';
import { DataService } from '../services/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  studies = [];

  constructor(private data: DataService) {
    this.studies = this.data.getStudies();
  }
}
