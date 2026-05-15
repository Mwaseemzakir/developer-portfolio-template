import { Component } from '@angular/core';
import { portfolioConfig } from '../../portfolio.config';

@Component({
  selector: 'app-headline',
  standalone: true,
  templateUrl: './headline.component.html'
})
export class HeadlineComponent {
  headline = {
    name: portfolioConfig.personal.name,
    title: portfolioConfig.personal.title,
    subtitle: portfolioConfig.personal.subtitle,
    tagline: portfolioConfig.personal.tagline,
    contactInfo: portfolioConfig.contact,
  };
}
