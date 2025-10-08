import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Quote {
  content: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<Quote> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(advice => ({
        content: advice.slip.advice,
        author: 'Advice Slip API'
      }))
    );
  }
}