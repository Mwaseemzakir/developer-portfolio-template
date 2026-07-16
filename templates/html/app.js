/* Renders the portfolio from window.portfolioConfig - no framework, no build. */
(function () {
  const cfg = window.portfolioConfig;
  const $ = (id) => document.getElementById(id);
  const esc = (value) =>
    String(value ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const sections = [
    { id: 'headline', label: 'Home', icon: 'HM' },
    { id: 'summary', label: 'Summary', icon: 'PR' },
    { id: 'skills', label: 'Skills', icon: 'SK' },
    { id: 'experience', label: 'Experience', icon: 'EX' },
    { id: 'education', label: 'Education', icon: 'ED' },
    { id: 'projects', label: 'Projects', icon: 'PJ' },
    { id: 'content', label: 'Content', icon: 'CT' },
    { id: 'certifications', label: 'Credentials', icon: 'CR' },
  ];

  const skillCount = (cfg.skills || []).reduce((sum, group) => sum + (group.skills || []).length, 0);
  const jobs = cfg.experience?.jobs || [];
  const training = cfg.experience?.training || [];
  const currentRole = jobs[0];

  const badgeList = (items, className) =>
    `<div class="badges">${(items || []).map((item) => `<span class="${className || 'badge'}">${esc(item)}</span>`).join('')}</div>`;

  const navLinks = sections
    .map((section) => `<a href="#${section.id}" data-section="${section.id}"><span>${section.icon}</span>${section.label}</a>`)
    .join('');

  $('profile-image').src = cfg.personal.profileImage;
  $('profile-image').alt = cfg.personal.name;
  $('sidebar-name').textContent = cfg.personal.name;
  $('sidebar-title').textContent = cfg.personal.title;
  $('sidebar-nav').innerHTML = navLinks;
  $('mobile-nav').innerHTML = navLinks;

  const contact = cfg.contact || {};
  const contactItems = [
    contact.email && { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: '@' },
    contact.address && {
      label: 'Location',
      value: contact.address,
      href: `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}`,
      icon: 'LO',
    },
    contact.website && { label: 'Website', value: 'Portfolio and blog', href: contact.website, icon: 'WB' },
    contact.linkedin && { label: 'LinkedIn', value: 'Professional profile', href: contact.linkedin, icon: 'IN' },
    contact.github && { label: 'GitHub', value: 'Code and packages', href: contact.github, icon: 'GH' },
    contact.twitter && { label: 'X / Twitter', value: 'Technical updates', href: contact.twitter, icon: 'X' },
  ].filter(Boolean);

  $('contact-links').innerHTML = contactItems
    .slice(0, 4)
    .map((item) => `<a href="${item.href}" ${item.href.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener"'}>${item.icon}</a>`)
    .join('');

  $('download-cv').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = cfg.personal.resumeFile;
    a.download = cfg.personal.resumeFileName;
    a.click();
  });

  const main = $('main');
  const addSection = (id, html) => {
    const section = document.createElement('section');
    section.id = id;
    section.className = 'section';
    section.innerHTML = html;
    main.appendChild(section);
  };

  addSection(
    'headline',
    `<div class="hero">
      <div class="hero-main">
        <div class="eyebrow">Enterprise Software Leader</div>
        <h1>${esc(cfg.personal.name)}</h1>
        <p class="role">${esc(cfg.personal.title)}</p>
        <p class="subtitle">${esc(cfg.personal.subtitle)}</p>
        <p class="tagline">${esc(cfg.personal.tagline)}</p>
        <div class="hero-actions">
          <a class="primary-action" href="mailto:${esc(contact.email)}">@ Contact Me</a>
          ${contact.github ? `<a class="secondary-action" href="${esc(contact.github)}" target="_blank" rel="noopener">GH View GitHub</a>` : ''}
        </div>
      </div>
      <aside class="hero-aside">
        <div class="focus-card">
          <span class="icon-box">TL</span>
          <div>
            <small>Current focus</small>
            <strong>${esc(currentRole?.position || cfg.personal.title)}</strong>
            <p>${esc(currentRole?.company || '')}</p>
          </div>
        </div>
        <div class="metric-grid">
          <div><strong>${skillCount}+</strong><span>Tech skills</span></div>
          <div><strong>${(cfg.projects || []).length}+</strong><span>Delivered works</span></div>
        </div>
      </aside>
    </div>
    <div class="contact-grid">
      ${contactItems
        .map(
          (item) => `<a href="${item.href}" ${item.href.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener"'}>
            <span class="contact-icon">${item.icon}</span>
            <span><small>${esc(item.label)}</small><strong>${esc(item.value)}</strong></span>
          </a>`
        )
        .join('')}
    </div>`
  );

  addSection(
    'summary',
    `<div class="section-kicker">Profile</div>
    <h2>Summary</h2>
    <div class="summary-panel">
      <p>${esc(cfg.summary)}</p>
      <div class="summary-grid">
        <div><strong>Clean APIs</strong><span>Architecture</span></div>
        <div><strong>CI/CD Ready</strong><span>Delivery</span></div>
        <div><strong>Team Mentor</strong><span>Leadership</span></div>
        <div><strong>Business Value</strong><span>Impact</span></div>
      </div>
    </div>`
  );

  addSection(
    'skills',
    `<div class="section-kicker">Capabilities</div>
    <h2>Technical Skills</h2>
    <div class="skills-grid">
      ${(cfg.skills || [])
        .map(
          (group) => `<article class="panel">
            <div class="panel-head">
              <span class="icon-box">${esc(group.name.slice(0, 2).toUpperCase())}</span>
              <div><h3>${esc(group.name)}</h3><small>${(group.skills || []).length} tools</small></div>
            </div>
            ${badgeList(group.skills, 'badge')}
          </article>`
        )
        .join('')}
    </div>`
  );

  const renderJob = (job, kind) => `<article class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="panel">
      <div class="item-top">
        <div>
          <h3>${esc(job.position)}</h3>
          <a href="${esc(job.companyUrl)}" target="_blank" rel="noopener">${esc(job.company)}</a>
        </div>
        <div class="item-date">${esc(job.startDate)} - ${esc(job.endDate)}</div>
      </div>
      <div class="meta-row">
        <span>${esc(kind || job.jobType)}</span>
        <span>${esc(job.location)}</span>
      </div>
      <p>${esc(job.description)}</p>
      ${badgeList(job.skills, 'tech-badge')}
    </div>
  </article>`;

  addSection(
    'experience',
    `<div class="section-kicker">Experience</div>
    <h2>Employment History</h2>
    <div class="experience-badge">${jobs.length}+ core roles</div>
    <div class="timeline">${jobs.map((job) => renderJob(job)).join('')}</div>
    ${
      training.length
        ? `<h3 class="subheading">Part-Time Training Experience</h3><div class="timeline training">${training
            .map((job) => renderJob(job, 'Part-Time'))
            .join('')}</div>`
        : ''
    }`
  );

  addSection(
    'education',
    `<div class="section-kicker">Foundation</div>
    <h2>Education</h2>
    ${(cfg.education || [])
      .map(
        (edu) => `<article class="panel education-panel">
          <div class="panel-head">
            <span class="icon-box">ED</span>
            <div>
              <h3>${esc(edu.degree)}</h3>
              <a>${esc(edu.institution)}</a>
            </div>
          </div>
          <div class="meta-row"><span>${esc(edu.startDate)} - ${esc(edu.endDate)}</span><span>Grade: ${esc(edu.grade)}</span></div>
          ${badgeList(edu.courses, 'badge')}
        </article>`
      )
      .join('')}`
  );

  addSection(
    'projects',
    `<div class="section-kicker">Delivery</div>
    <h2>Selected Projects</h2>
    <div class="project-grid">
      ${(cfg.projects || [])
        .map(
          (project) => `<article class="panel project-card">
            <div class="item-top">
              <div><h3>${esc(project.name)}</h3><a>${esc(project.company)}</a></div>
              <div class="item-date">${esc(project.year)}</div>
            </div>
            <p>${esc(project.description)}</p>
            ${badgeList(project.skills, 'tech-badge')}
          </article>`
        )
        .join('')}
    </div>`
  );

  const platformGradient = (platform, index) =>
    platform.gradient || ['linear-gradient(135deg,#1f6feb,#0891b2)', 'linear-gradient(135deg,#059669,#0d9488)', 'linear-gradient(135deg,#7c3aed,#db2777)'][index % 3];

  addSection(
    'content',
    `<div class="section-kicker">Knowledge Sharing</div>
    <h2>Content Creation</h2>
    <p class="lead">${esc(cfg.contentCreation.description)}</p>
    <div class="platform-grid">
      ${(cfg.contentCreation.platforms || [])
        .map(
          (platform, index) => `<a class="platform-card" href="${esc(platform.url)}" target="_blank" rel="noopener">
            <div style="background:${platformGradient(platform, index)}">${esc(platform.name)}<span>OPEN</span></div>
            <p>${esc(platform.description)}</p>
          </a>`
        )
        .join('')}
    </div>
    <div class="panel topic-panel">
      <small>Topics I write about</small>
      ${badgeList(cfg.contentCreation.topics, 'tech-badge')}
    </div>`
  );

  addSection(
    'certifications',
    `<div class="section-kicker">Proof</div>
    <h2>Certifications</h2>
    <div class="cert-grid">
      ${(cfg.certifications || [])
        .map(
          (cert) => `<article class="panel cert-card">
            <div class="panel-head">
              <span class="icon-box">OK</span>
              <h3>${esc(cert.name)}</h3>
            </div>
            <div class="meta-row"><span>${esc(cert.issuer)}</span><span>${esc(cert.date)}</span></div>
            <p>${esc(cert.description)}</p>
          </article>`
        )
        .join('')}
    </div>`
  );

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `&copy; ${new Date().getFullYear()} ${esc(cfg.personal.name)}. All rights reserved.`;
  main.appendChild(footer);

  const links = document.querySelectorAll('[data-section]');
  const setActive = () => {
    const y = window.scrollY + 110;
    let current = sections[0].id;
    for (const section of sections) {
      const node = document.getElementById(section.id);
      if (node && node.offsetTop <= y) current = section.id;
    }
    links.forEach((link) => link.classList.toggle('active', link.dataset.section === current));
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
