import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioConfig } from '../../portfolio.config';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills = {
    title: 'Skills',
    categories: portfolioConfig.skills,
  };
}
