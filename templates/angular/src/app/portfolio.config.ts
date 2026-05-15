/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION — edit this file to make it yours
 * ============================================================
 *
 *  This is the single source of truth for all portfolio data.
 *  Replace every value below with your own information, swap
 *  assets/profile_picture.png for your photo and assets/resume.pdf for
 *  your CV, then run `npm start`.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  website: string;
  linkedin: string;
  github: string;
  twitter: string;
}

export interface Personal {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  profileImage: string;
  resumeFile: string;
  resumeFileName: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceEntry {
  company: string;
  companyUrl: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  jobType: 'Remote' | 'On-site';
  location: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  grade: string;
  courses: string[];
}

export interface ProjectEntry {
  name: string;
  company: string;
  year: string;
  description: string;
  skills: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
  description: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface ContentPlatform {
  name: string;
  icon: string;
  url: string;
  description: string;
  gradient: string;
}

export interface ContentCreation {
  description: string;
  platforms: ContentPlatform[];
  topics: string[];
}

export interface PortfolioConfig {
  personal: Personal;
  contact: ContactInfo;
  summary: string;
  skills: SkillCategory[];
  experience: {
    jobs: ExperienceEntry[];
    training: ExperienceEntry[];
  };
  education: EducationEntry[];
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
  contentCreation: ContentCreation;
}

// ─── Configuration ────────────────────────────────────────────────────────────

export const portfolioConfig: PortfolioConfig = {

  personal: {
    name: 'Muhammad Waseem',
    title: 'Technical Lead',
    subtitle: 'Full Stack Developer | .NET | Angular',
    tagline: 'Technical Lead, Senior Software Engineer, Technical Trainer and Content Creator',
    profileImage: 'assets/profile_picture.png',
    resumeFile: 'assets/resume.pdf',
    resumeFileName: 'resume.pdf',
  },

  contact: {
    email: 'mwaseemzakir@gmail.com',
    phone: '+123 456 789',
    address: 'Lahore, Pakistan',
    website: 'https://mwaseemzakir.com/',
    linkedin: 'https://linkedin.com/in/mwaseemzakir',
    github: 'https://github.com/mwaseemzakir',
    twitter: 'https://x.com/mwaseemzakir',
  },

  summary:
    'I build scalable, resilient software architectures and APIs that drive efficiency for fintech, public sector, and international clients. With a passion for mentorship and technical leadership, I empower teams and develop solutions that automate complex processes and deliver tangible results.',

  skills: [
    {
      name: '.NET Technologies',
      skills: ['.NET Core (Web API, MVC)', '.NET Framework (Web API, MVC)', '.NET 3.1', '.NET 6', '.NET 7', '.NET 8', 'Entity Framework Core', 'Entity Framework', 'Dapper'],
    },
    {
      name: 'Database',
      skills: ['SQL Server', 'PostgreSQL'],
    },
    {
      name: 'Client Side',
      skills: ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'Ant Design'],
    },
    {
      name: 'Version Controls & DevOps',
      skills: ['Git', 'Azure DevOps', 'CI/CD', 'Docker'],
    },
  ],

  experience: {
    jobs: [
      {
        company: 'Squadio | سكواديو',
        companyUrl: 'https://www.squadio.com',
        position: 'Technical Lead',
        startDate: 'Jan 2025',
        endDate: 'Present',
        description:
          'Leading a development team while actively contributing to the codebase. Guiding architectural decisions, mentoring junior developers, and ensuring high engineering standards. Building a smart system to reduce food waste combining technology, purpose, and modern practices like clean architecture, CI/CD, and cloud-native development.',
        skills: ['Technical Leadership', 'Clean Architecture', 'CI/CD', 'Cloud-Native', '.NET Core', 'Mentoring', 'System Design'],
        jobType: 'Remote',
        location: 'Saudi Arabia',
      },
      {
        company: 'Sanad Cash Inc.',
        companyUrl: 'https://www.sanadcash.com',
        position: 'Sr Software Engineer',
        startDate: 'Oct 2023',
        endDate: 'Dec 2024',
        description:
          'Architected and implemented Fintech APIs for Zoho Books and ANB, improving data integration and operational efficiency for KSA banking systems. Streamlined cross-cutting concerns, enhancing system reliability and performance for mission-critical operations.',
        skills: ['.NET Core', 'PostgreSQL', 'Azure DevOps', 'API Design', 'Fintech', 'Banking'],
        jobType: 'Remote',
        location: 'Amman, Jordan',
      },
      {
        company: 'CINNOVA TECHNOLOGIES',
        companyUrl: 'https://www.cinnova.com',
        position: 'Sr Software Engineer',
        startDate: 'Nov 2022',
        endDate: 'Oct 2023',
        description:
          'Collaborated with USA clients, adding new features and resolving critical bugs across various technology stacks. Improved system functionality and reduced time-to-market for client applications, leading to a 20% increase in user satisfaction and system stability.',
        skills: ['.NET Core', 'React', 'SQL Server', 'Azure DevOps', 'Material UI', 'Client Collaboration'],
        jobType: 'On-site',
        location: 'Lahore, Pakistan',
      },
      {
        company: 'ABACUS CONSULTING',
        companyUrl: 'https://abacus-global.com/',
        position: 'Senior Consultant',
        startDate: 'Nov 2019',
        endDate: 'Nov 2022',
        description:
          'Led the automation of budgeting, schemes, and planning processes for the Balochistan province. Reduced manual overhead by 40%, improving data accuracy and decision-making speed for provincial planning commission projects.',
        skills: ['Project Management', 'Government Projects', 'Process Automation', 'Client Relations', 'Angular', '.NET Core', 'SQL Server'],
        jobType: 'On-site',
        location: 'Lahore, Pakistan',
      },
    ],
    training: [
      {
        company: 'Excellence Delivered (ExD) Pvt Ltd',
        companyUrl: 'https://www.exd.com.pk',
        position: 'Technical Trainer (.NET + Angular)',
        startDate: 'Aug 2024',
        endDate: 'Nov 2024',
        description:
          'Mentored 15 driven students under the NAVVTAC government initiative in .NET (MVC, API), Angular, and SQL. Created an engaging, hands-on learning environment that sparked their passion for full-stack development, transforming them into confident, job-ready developers.',
        skills: ['Training', '.NET MVC', '.NET API', 'Angular', 'SQL', 'Mentoring'],
        jobType: 'On-site',
        location: 'Lahore, Punjab, Pakistan',
      },
      {
        company: 'Excellence Delivered (ExD) Pvt Ltd',
        companyUrl: 'https://www.exd.com.pk',
        position: 'Technical Trainer (.NET)',
        startDate: 'Aug 2022',
        endDate: 'Nov 2022',
        description:
          'Mentored 30 graduates under the Techlift government initiative, empowering them to become Full Stack developers with .NET expertise. Achieved a 90% job placement success rate, driving industry-ready talent into the workforce.',
        skills: ['Training', 'C#', 'ASP.NET', '.NET', 'Full Stack Development'],
        jobType: 'On-site',
        location: 'Lahore, Punjab, Pakistan',
      },
    ],
  },

  education: [
    {
      degree: 'Bachelors of Software Engineering',
      institution: 'University of the Punjab',
      startDate: 'Oct 2015',
      endDate: 'Jul 2019',
      grade: 'A',
      courses: [
        'Analysis Of Algorithms',
        'Data Sciences and Machine Learning',
        'Database Systems',
        'Enterprise Application Development',
        'Object Oriented Programming',
        'Programming Fundamentals',
        'Software Architecture',
        'Software Engineering',
        'Software Project Management',
        'Web Engineering',
      ],
    },
  ],

  projects: [
    {
      name: 'Multiverse (NuGet Package)',
      company: 'Open Source',
      year: '2026',
      description:
        'Published a NuGet package providing comprehensive language codes, country codes, and currency codes from around the globe — an essential tool for internationalization and localization in .NET projects. 2,400+ downloads.',
      skills: ['.NET 6', '.NET Standard 2.0', '.NET Framework 4.6.2', 'Localization', 'NuGet'],
    },
    {
      name: 'AlQuran.SDK (NuGet Package)',
      company: 'Open Source',
      year: '2025',
      description:
        'Published a comprehensive, high-performance .NET library providing complete read-only access to the Holy Quran. Includes all 114 Surahs with full metadata, 6236 Ayahs in both Uthmani and Simple Arabic scripts, and Juz/Para support. 390+ downloads.',
      skills: ['.NET 8', '.NET Standard 2.0', '.NET Framework 4.6.2', 'NuGet'],
    },
    {
      name: 'PakExam',
      company: 'Side Project | Founder',
      year: '2025',
      description:
        'Developed PakExam (pakexam.com), a full-stack SaaS exam preparation platform for Pakistani competitive exams (CSS/PMS/PPSC) featuring past papers, MCQ bank, vocabulary builder, and AI-powered quiz generation.',
      skills: ['.NET', 'PostgreSQL', 'Next.js', 'AI', 'pgvector'],
    },
    {
      name: 'Food Waste Reduction Platform (Letadom)',
      company: 'Squadio',
      year: '2025',
      description:
        'Architected a resilient, national-scale food waste automation platform for public sector impact in KSA.',
      skills: ['.NET 8', 'IIS', 'GitHub Actions', 'Unit Testing', 'DbUp', 'Web API', 'EF Core'],
    },
    {
      name: 'Zoho Books Integration',
      company: 'Sanad Cash Inc.',
      year: '2024',
      description:
        'Integrated Zoho Books with custom-built Web APIs, enabling seamless financial data management for KSA\'s public sector.',
      skills: ['.NET Core', 'Web API', 'Zoho Books', 'Performance Optimization'],
    },
    {
      name: 'Career Highlighter',
      company: 'Personal Project',
      year: '2024',
      description:
        'Developed a personalized resume website to showcase professional achievements, portfolio and skills in Angular.',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      name: 'Arab National Bank API',
      company: 'Sanad Cash Inc.',
      year: '2023',
      description:
        'Developed a high performance Web API for ANB, ensuring smooth integration with core banking systems.',
      skills: ['.NET Core', 'Web API', 'Banking Integration', 'Security'],
    },
    {
      name: 'Paymentology API Integration',
      company: 'Sanad Cash Inc.',
      year: '2023',
      description:
        'Developed and integrated the Paymentology API to streamline credit card creation and pay secure operations.',
      skills: ['.NET Core', 'Web API', 'Paymentology API', 'Security'],
    },
    {
      name: 'Dreamer - Dream Management Application',
      company: 'Personal Project',
      year: '2022',
      description:
        'Built an MVC-based system allowing users to record and analyze dreams with personalized insights.',
      skills: ['ASP.NET MVC', 'C#', 'SQL Server', 'Bootstrap'],
    },
    {
      name: 'Personal Blog',
      company: 'Personal Project',
      year: '2022',
      description:
        'Designed and developed a personal blogging platform using Astro, showcasing expertise in modern technologies.',
      skills: ['Astro', 'JavaScript', 'HTML', 'CSS', 'Content Management'],
    },
    {
      name: 'Public Sector Development Program',
      company: 'Abacus Consulting',
      year: '2021',
      description:
        'Developed a comprehensive Web API and Angular application to automate the budgeting and planning process for the Balochistan province.',
      skills: ['.NET Core', 'Web API', 'Angular', 'SQL Server'],
    },
  ],

  certifications: [
    {
      name: 'UPG Sustainability Leader',
      issuer: 'United People Global',
      date: 'Jul 2022',
      description: 'Certification in sustainability leadership.',
    },
    {
      name: 'Global Peace Ambassador',
      issuer: 'Global Peace Chain',
      date: 'Jun 2022',
      expirationDate: 'Dec 2024',
      description: 'Recognized as a Global Peace Ambassador.',
    },
    {
      name: 'Unleash Mental Health Hack Europe',
      issuer: 'UNLEASH',
      date: 'May 2022',
      description: 'Participated in Mental Health Hack Europe event.',
    },
    {
      name: 'Bill George on Self-Awareness, Authenticity, and Leadership',
      issuer: 'LinkedIn',
      date: 'Mar 2022',
      description: 'Completed course on leadership and self-awareness.',
    },
    {
      name: 'Leading in Crisis',
      issuer: 'LinkedIn',
      date: 'Mar 2022',
      description: 'Completed course on leadership during crisis situations.',
    },
    {
      name: "The Leader's Guide to Mindfulness",
      issuer: 'LinkedIn',
      date: 'Mar 2022',
      description: 'Completed course on mindfulness in leadership.',
    },
    {
      name: 'SQL Intermediate',
      issuer: 'HackerRank',
      date: 'Feb 2022',
      description: 'Demonstrated intermediate SQL skills.',
      expirationDate: 'This credential does not expire',
      credentialId: 'See credential',
      credentialUrl: 'https://www.hackerrank.com/certificates',
    },
    {
      name: 'SQL Basic',
      issuer: 'HackerRank',
      date: 'Dec 2021',
      credentialId: '6FA1EF4B510C',
      description: 'Demonstrated basic SQL skills.',
    },
  ],

  contentCreation: {
    description:
      'Passionate about sharing knowledge through writing and creating technical content that helps developers grow.',
    platforms: [
      {
        name: 'Personal Blog',
        icon: 'bi-pencil-square',
        url: 'https://mwaseemzakir.com/',
        description: 'Technical articles on .NET, Angular, and software architecture',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      {
        name: 'Medium',
        icon: 'bi-medium',
        url: 'https://medium.com/@mwaseemzakir',
        description: 'In-depth tutorials and thought leadership pieces',
        gradient: 'linear-gradient(135deg, #00ab6c 0%, #00d084 100%)',
      },
      {
        name: 'YouTube',
        icon: 'bi-youtube',
        url: 'https://youtube.com/@mwaseemzakir',
        description: 'Video tutorials and coding demonstrations',
        gradient: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
      },
    ],
    topics: ['.NET Development', 'Clean Architecture', 'Best Practices', 'Career Tips', 'System Design'],
  },
};
