import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {
  fotoUrl: string = './assets/foto_personal.webp';
  logoUrl: string = './assets/logo_ufm.png';
  saludo = '';

  ngOnInit(): void {
    const hora = new Date().getHours();
    if (hora >= 6 && hora < 12) this.saludo = '🌅 Buenos días';
    else if (hora >= 12 && hora < 18) this.saludo = '☀️ Buenas tardes';
    else this.saludo = '🌙 Buenas noches';
  }
}
