import { Component } from '@angular/core';
import { portfolioConfig } from '../../portfolio.config';

@Component({
  selector: 'app-profile-summary',
  standalone: true,
  templateUrl: './profile-summary.component.html'
})
export class ProfileSummaryComponent {
  profileSummary = {
    title: 'Profile Summary',
    introduction: portfolioConfig.summary,
  };
}

