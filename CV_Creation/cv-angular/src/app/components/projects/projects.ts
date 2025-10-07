import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService, GitHubRepo } from '../../services/github';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  projects: GitHubRepo[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.githubService.getUserRepos().subscribe({
      next: (repos: GitHubRepo[]) => {
        this.projects = repos
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
        console.error('Error loading GitHub projects:', err);
      }
    });
  }
}