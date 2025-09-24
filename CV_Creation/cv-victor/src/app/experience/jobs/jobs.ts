import { Component, OnInit } from '@angular/core';
import { DataService, Job } from '../../services/data';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html'
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.jobs = this.data.getJobs();
  }
}
