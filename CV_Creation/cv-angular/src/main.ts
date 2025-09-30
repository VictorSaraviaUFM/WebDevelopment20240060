import 'zone.js'; // filepath: /Users/victorsaravia/Desktop/GitHub/Desarrollo Web/WebDevelopment20240060/CV_Creation/cv-angular/src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
