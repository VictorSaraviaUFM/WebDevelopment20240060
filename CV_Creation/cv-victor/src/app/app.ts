import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app';

import { HeaderComponent } from './header/header';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ExperienceComponent } from './experience/experience';
import { JobsComponent } from './experience/jobs/jobs';
import { StudiesComponent } from './experience/studies/studies';
import { FooterComponent } from './footer/footer';

import { CapitalizePipe } from './pipes/capitalize-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    JobsComponent,
    StudiesComponent,
    FooterComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
