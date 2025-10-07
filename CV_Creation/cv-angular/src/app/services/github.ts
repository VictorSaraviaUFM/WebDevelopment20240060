import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  fork: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  // Cambia 'TU_USERNAME' por tu usuario real de GitHub
  getUserRepos(username: string = 'VictorSaraviaUFM'): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(`${this.apiUrl}/${username}/repos`);
  }

  // Para obtener repos específicos (máximo 6)
  getSpecificRepos(username: string = 'VictorSaraviaUFM', repos: string[]): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(`${this.apiUrl}/${username}/repos?per_page=100`);
  }
}
