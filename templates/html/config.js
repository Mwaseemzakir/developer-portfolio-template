/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION - edit this file to make it yours
 * ============================================================
 *
 *  This is the single source of truth for all portfolio data.
 *  Replace every value below with your own information, swap
 *  the profileImage URL for your photo and resume.pdf for your CV,
 *  then open index.html (no build step required).
 */
window.portfolioConfig = {
  personal: {
    name: 'Muhammad Waseem',
    title: 'Technical Lead',
    subtitle: 'Full Stack Developer | .NET | Angular',
    tagline: 'Technical Lead, Senior Software Engineer, Technical Trainer and Content Creator',
    // Placeholder avatar - swap for your own (e.g. './profile_picture.png').
    profileImage: 'https://ui-avatars.com/api/?name=Muhammad+Waseem&size=200&background=2563eb&color=ffffff&bold=true',
    resumeFile: './resume.pdf',
    resumeFileName: 'resume.pdf',
  },

  contact: {
    email: 'mwaseemzakir@gmail.com',
    address: 'Lahore, Pakistan',
    website: 'https://mwaseemzakir.com/',
    linkedin: 'https://linkedin.com/in/mwaseemzakir',
    github: 'https://github.com/mwaseemzakir',
    twitter: 'https://x.com/mwaseemzakir',
  },

  summary:
    'I build scalable, resilient software architectures and APIs that drive efficiency for fintech, public sector, and international clients. With a passion for mentorship and technical leadership, I empower teams and develop solutions that automate complex processes and deliver tangible results.',

  skills: [
    { name: '.NET Technologies', skills: ['.NET Core (Web API, MVC)', '.NET Framework (Web API, MVC)', '.NET 6', '.NET 7', '.NET 8', 'Entity Framework Core', 'Dapper'] },
    { name: 'Database', skills: ['SQL Server', 'PostgreSQL'] },
    { name: 'Client Side', skills: ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'Ant Design'] },
    { name: 'Version Controls & DevOps', skills: ['Git', 'Azure DevOps', 'CI/CD', 'Docker'] },
  ],

  experience: {
    jobs: [
      { company: 'Squadio', companyUrl: 'https://www.squadio.com', position: 'Technical Lead', startDate: 'Jan 2025', endDate: 'Present', description: 'Leading a development team while actively contributing to the codebase. Guiding architectural decisions, mentoring junior developers, and ensuring high engineering standards using clean architecture, CI/CD, and cloud-native development.', skills: ['Technical Leadership', 'Clean Architecture', 'CI/CD', 'Cloud-Native', '.NET Core', 'System Design'], jobType: 'Remote', location: 'Saudi Arabia' },
      { company: 'Sanad Cash Inc.', companyUrl: 'https://www.sanadcash.com', position: 'Sr Software Engineer', startDate: 'Oct 2023', endDate: 'Dec 2024', description: 'Architected and implemented Fintech APIs for Zoho Books and ANB, improving data integration and operational efficiency for KSA banking systems.', skills: ['.NET Core', 'PostgreSQL', 'Azure DevOps', 'API Design', 'Fintech'], jobType: 'Remote', location: 'Amman, Jordan' },
      { company: 'Cinnova Technologies', companyUrl: 'https://www.cinnova.com', position: 'Sr Software Engineer', startDate: 'Nov 2022', endDate: 'Oct 2023', description: 'Collaborated with USA clients, adding new features and resolving critical bugs across various technology stacks, leading to a 20% increase in user satisfaction.', skills: ['.NET Core', 'React', 'SQL Server', 'Azure DevOps'], jobType: 'On-site', location: 'Lahore, Pakistan' },
      { company: 'Abacus Consulting', companyUrl: 'https://abacus-global.com/', position: 'Senior Consultant', startDate: 'Nov 2019', endDate: 'Nov 2022', description: 'Led the automation of budgeting, schemes, and planning processes for the Balochistan province, reducing manual overhead by 40%.', skills: ['Project Management', 'Process Automation', 'Angular', '.NET Core', 'SQL Server'], jobType: 'On-site', location: 'Lahore, Pakistan' },
    ],
    training: [
      { company: 'Excellence Delivered (ExD) Pvt Ltd', companyUrl: 'https://www.exd.com.pk', position: 'Technical Trainer (.NET + Angular)', startDate: 'Aug 2024', endDate: 'Nov 2024', description: 'Mentored students under a government initiative in .NET, Angular, and SQL through hands-on full-stack development.', skills: ['Training', '.NET MVC', '.NET API', 'Angular', 'SQL', 'Mentoring'], jobType: 'On-site', location: 'Lahore, Pakistan' },
      { company: 'Excellence Delivered (ExD) Pvt Ltd', companyUrl: 'https://www.exd.com.pk', position: 'Technical Trainer (.NET)', startDate: 'Aug 2022', endDate: 'Nov 2022', description: 'Trained graduates in practical .NET development, helping them become confident industry-ready developers.', skills: ['Training', 'C#', 'ASP.NET', '.NET', 'Full Stack Development'], jobType: 'On-site', location: 'Lahore, Pakistan' },
    ],
  },

  education: [
    { degree: 'Bachelors of Software Engineering', institution: 'University of the Punjab', startDate: 'Oct 2015', endDate: 'Jul 2019', grade: 'A', courses: ['Analysis Of Algorithms', 'Data Sciences and Machine Learning', 'Database Systems', 'Object Oriented Programming', 'Software Architecture', 'Web Engineering'] },
  ],

  projects: [
    { name: 'Multiverse (NuGet Package)', company: 'Open Source', year: '2026', description: 'Published a NuGet package providing comprehensive language, country, and currency codes for internationalization in .NET projects. 2,400+ downloads.', skills: ['.NET 6', '.NET Standard 2.0', 'Localization', 'NuGet'] },
    { name: 'AlQuran.SDK (NuGet Package)', company: 'Open Source', year: '2025', description: 'A high-performance .NET library providing complete read-only access to the Holy Quran, with all 114 Surahs and 6236 Ayahs. 390+ downloads.', skills: ['.NET 8', '.NET Standard 2.0', 'NuGet'] },
    { name: 'PakExam', company: 'Side Project | Founder', year: '2025', description: 'A full-stack SaaS exam preparation platform for Pakistani competitive exams featuring past papers, an MCQ bank, and AI-powered quiz generation.', skills: ['.NET', 'PostgreSQL', 'Next.js', 'AI', 'pgvector'] },
    { name: 'Food Waste Reduction Platform', company: 'Squadio', year: '2025', description: 'Architected a resilient, national-scale food waste automation platform for public sector impact in KSA.', skills: ['.NET 8', 'GitHub Actions', 'Web API', 'EF Core'] },
    { name: 'Arab National Bank API', company: 'Sanad Cash Inc.', year: '2023', description: 'Developed a high performance Web API for ANB, ensuring smooth integration with core banking systems.', skills: ['.NET Core', 'Web API', 'Banking Integration', 'Security'] },
    { name: 'Public Sector Development Program', company: 'Abacus Consulting', year: '2021', description: 'Developed a Web API and Angular application to automate the budgeting process for the Balochistan province.', skills: ['.NET Core', 'Web API', 'Angular', 'SQL Server'] },
  ],

  certifications: [
    { name: 'UPG Sustainability Leader', issuer: 'United People Global', date: 'Jul 2022', description: 'Certification in sustainability leadership.' },
    { name: 'Global Peace Ambassador', issuer: 'Global Peace Chain', date: 'Jun 2022', description: 'Recognized as a Global Peace Ambassador.' },
    { name: 'SQL Intermediate', issuer: 'HackerRank', date: 'Feb 2022', description: 'Demonstrated intermediate SQL skills.' },
    { name: 'SQL Basic', issuer: 'HackerRank', date: 'Dec 2021', description: 'Demonstrated basic SQL skills.' },
  ],

  contentCreation: {
    description: 'Passionate about sharing knowledge through writing and creating technical content that helps developers grow.',
    platforms: [
      { name: 'Personal Blog', icon: 'blog', url: 'https://mwaseemzakir.com/', description: 'Technical articles on .NET, Angular, and software architecture', gradient: 'linear-gradient(135deg, #1f6feb 0%, #0891b2 100%)' },
      { name: 'Medium', icon: 'medium', url: 'https://medium.com/@mwaseemzakir', description: 'In-depth tutorials and thought leadership pieces', gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)' },
      { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com/@mwaseemzakir', description: 'Video tutorials and coding demonstrations', gradient: 'linear-gradient(135deg, #dc2626 0%, #be123c 100%)' },
    ],
    topics: ['.NET Development', 'Clean Architecture', 'Best Practices', 'Career Tips', 'System Design'],
  },
};
