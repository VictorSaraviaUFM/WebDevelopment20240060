import { Component, OnInit } from '@angular/core';
import { DataService, Study } from '../../services/data';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html'
})
export class StudiesComponent implements OnInit {
  studies: Study[] = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.studies = this.data.getStudies();
  }
}

