import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  filtro = '';
  hardSkills: string[] = [];
  softSkills: string[] = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.hardSkills = this.data.getHardSkills();
    this.softSkills = this.data.getSoftSkills();
  }

  get filteredHard() {
    if (!this.filtro) return this.hardSkills;
    const f = this.filtro.toLowerCase();
    return this.hardSkills.filter(s => s.toLowerCase().includes(f));
  }
}
