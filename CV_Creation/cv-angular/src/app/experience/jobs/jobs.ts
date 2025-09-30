import { Component, OnInit } from '@angular/core';
import { DataService, Job } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.html',
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.jobs = this.data.getJobs();
  }
}
