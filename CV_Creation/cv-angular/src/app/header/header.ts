import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService, Quote } from '../services/quote';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  fotoUrl: string = './assets/foto_personal.webp';
  logoUrl: string = 'https://www.ufm.edu/wp-content/uploads/2020/10/arreglo-ufm.png';
  saludo = "";
  dailyQuote: Quote = { content: '', author: '' };
  showQuote: boolean = false;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    const hora = new Date().getHours();
    if (hora >= 6 && hora < 12) this.saludo = 'Buenos días';
    else if (hora >= 12 && hora < 18) this.saludo = 'Buenas tardes';
    else this.saludo = 'Buenas noches';

    this.loadDailyQuote();
  }

  loadDailyQuote() {
    this.quoteService.getRandomQuote().subscribe({
      next: (quote) => {
        this.dailyQuote = quote;
        this.showQuote = true;
      },
      error: (err) => {
        console.error('Error loading advice:', err);
        this.dailyQuote = {
          content: 'When in doubt, just take the next small step',
          author: 'Advice Slip API'
        };
        this.showQuote = true;
      }
    });
  }
}