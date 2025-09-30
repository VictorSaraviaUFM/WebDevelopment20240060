import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from './header/header';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ExperienceComponent } from './experience/experience';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   
})

export class AppComponent {
  title = 'Mi CV Angular';
  constructor() {
    // @ts-ignore
    console.log('Zone:', typeof Zone !== 'undefined' ? Zone.current : 'No Zone.js');
  }
}
