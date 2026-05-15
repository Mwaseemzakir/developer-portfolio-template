import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioConfig } from '../../portfolio.config';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  projects = {
    title: 'Projects',
    entries: portfolioConfig.projects,
  };
}
