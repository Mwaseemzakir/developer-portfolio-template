import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { portfolioConfig } from './portfolio.config';
import { EducationComponent } from "./features/education/education.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { EmploymentComponent } from "./features/employment/employment.component";
import { ProfileSummaryComponent } from "./features/profile-summary/profile-summary.component";
import { HeadlineComponent } from "./features/headline/headline.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from "./features/project/project.component";
import { CertificationComponent } from "./features/certification/certification.component";
import { ContentCreatorComponent } from "./features/content-creator/content-creator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    EducationComponent,
    SkillsComponent,
    EmploymentComponent,
    ProfileSummaryComponent,
    HeadlineComponent,
    ProjectComponent,
    ContentCreatorComponent,
    CertificationComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Resume';
  currentSection: string = 'headline';
  currentYear: number = new Date().getFullYear();
  sidebarName = portfolioConfig.personal.name;
  sidebarTitle = portfolioConfig.personal.title;
  private readonly SCROLL_OFFSET = 100;

  @HostListener('window:scroll')
  onScroll() {
    this.updateCurrentSection();
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.currentSection = section;
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = portfolioConfig.personal.resumeFile;
    link.download = portfolioConfig.personal.resumeFileName;
    link.click();
  }

  private updateCurrentSection() {
    const sections = ['headline', 'profile-summary', 'skills', 'employment', 'education', 'project', 'content-creator', 'certification'];
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Find the section that is currently in view based on scroll position
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const elementTop = element.offsetTop;
        if (scrollPosition >= elementTop - this.SCROLL_OFFSET) {
          this.currentSection = sections[i];
          break;
        }
      }
    }
  }
}
