import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  status: string;
  location: string;
}

export interface Certificate {
  id: number;
  name: string;
  institution: string;
  issueDate: string;
  expiryDate: string | null;
  credentialURL: string;
  skills: string[];
}

@Injectable({
  providedIn: 'root'
})
export class EducationApiService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  // EDUCACIÓN
  getEducation(): Observable<{success: boolean, data: Education[]}> {
    return this.http.get<{success: boolean, data: Education[]}>(`${this.apiUrl}/education`);
  }

  getEducationById(id: number): Observable<{success: boolean, data: Education}> {
    return this.http.get<{success: boolean, data: Education}>(`${this.apiUrl}/education/${id}`);
  }

  createEducation(education: Omit<Education, 'id'>): Observable<{success: boolean, data: Education}> {
    return this.http.post<{success: boolean, data: Education}>(`${this.apiUrl}/education`, education);
  }

  updateEducation(id: number, updates: Partial<Education>): Observable<{success: boolean, data: Education}> {
    return this.http.patch<{success: boolean, data: Education}>(`${this.apiUrl}/education/${id}`, updates);
  }

  deleteEducation(id: number): Observable<{success: boolean, data: Education}> {
    return this.http.delete<{success: boolean, data: Education}>(`${this.apiUrl}/education/${id}`);
  }

  // CERTIFICADOS
  getCertificates(): Observable<{success: boolean, data: Certificate[]}> {
    return this.http.get<{success: boolean, data: Certificate[]}>(`${this.apiUrl}/certificates`);
  }

  getCertificateById(id: number): Observable<{success: boolean, data: Certificate}> {
    return this.http.get<{success: boolean, data: Certificate}>(`${this.apiUrl}/certificates/${id}`);
  }
}