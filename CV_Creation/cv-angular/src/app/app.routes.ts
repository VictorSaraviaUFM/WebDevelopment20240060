import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ExperienceComponent } from './experience/experience';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '**', redirectTo: '' } 
];



