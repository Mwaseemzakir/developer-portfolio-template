import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioConfig, ExperienceEntry } from '../../portfolio.config';

@Component({
  selector: 'app-employment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employment.component.html'
})
export class EmploymentComponent implements OnInit {
  employmentData: Employment | undefined;

  jobs: ExperienceEntry[] = portfolioConfig.experience.jobs;
  trainingExperiences: ExperienceEntry[] = portfolioConfig.experience.training;

  ngOnInit(): void {
    this.employmentData = {
      entries: this.jobs,
      trainingEntries: this.trainingExperiences,
      totalExperience: this.calculateTotalExperience(this.jobs),
    };
  }

  calculateTotalExperience(entries: ExperienceEntry[]): number {
    let totalExperience = 0;
    const currentDate = new Date();

    for (const entry of entries) {
      const startDate = new Date(this.parseDate(entry.startDate));
      const endDate = entry.endDate === 'Present' ? currentDate : new Date(this.parseDate(entry.endDate));
      
      const yearDiff = endDate.getFullYear() - startDate.getFullYear();
      const monthDiff = endDate.getMonth() - startDate.getMonth();
      
      totalExperience += yearDiff + (monthDiff / 12);
    }

    return Math.ceil(totalExperience * 10) / 10; 
  }

  parseDate(dateString: string): string {
    const [month, year] = dateString.split(' ');
    const monthIndex = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(month);
    return `${year}-${(monthIndex + 1).toString().padStart(2, '0')}-01`;
  }

  calculateDuration(startDate: string, endDate: string): string {
    const start = new Date(this.parseDate(startDate));
    const end = endDate === 'Present' ? new Date() : new Date(this.parseDate(endDate));
    
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    
    // Adjust for day of month differences
    if (end.getDate() < start.getDate()) {
      months--;
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    const parts: string[] = [];
    if (years > 0) {
      parts.push(`${years} year${years > 1 ? 's' : ''}`);
    }
    if (months > 0) {
      parts.push(`${months} month${months > 1 ? 's' : ''}`);
    }
    
    return parts.length > 0 ? parts.join(' ') : 'Less than 1 month';
  }

}

interface Employment {
  totalExperience: number;
  entries: ExperienceEntry[];
  trainingEntries?: ExperienceEntry[];
}
