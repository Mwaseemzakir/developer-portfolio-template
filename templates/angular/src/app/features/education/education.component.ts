import { Component } from '@angular/core';
import { portfolioConfig } from '../../portfolio.config';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  educationDetails = portfolioConfig.education;
}
