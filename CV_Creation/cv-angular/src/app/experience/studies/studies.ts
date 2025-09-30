import { Component, OnInit } from '@angular/core';
import { DataService, Study } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studies.html',
})
export class StudiesComponent implements OnInit {
  studies: Study[] = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.studies = this.data.getStudies();
  }
}

