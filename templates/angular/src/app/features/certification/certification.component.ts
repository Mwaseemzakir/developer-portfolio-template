import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioConfig } from '../../portfolio.config';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification.component.html'
})
export class CertificationComponent {
  certifications = portfolioConfig.certifications;
}
