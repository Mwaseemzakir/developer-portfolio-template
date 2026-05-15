import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioConfig } from '../../portfolio.config';

@Component({
  selector: 'app-content-creator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-creator.component.html'
})
export class ContentCreatorComponent {
  contentData = {
    title: 'Content Creation & Blogging',
    description: portfolioConfig.contentCreation.description,
    platforms: portfolioConfig.contentCreation.platforms,
    topics: portfolioConfig.contentCreation.topics,
  };
}
