/* Renders the portfolio from window.portfolioConfig — no framework, no build. */
(function () {
  const cfg = window.portfolioConfig;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const badges = (arr) =>
    `<div class="badges">${arr.map((s) => `<span class="badge">${esc(s)}</span>`).join('')}</div>`;

  const SECTIONS = [
    { id: 'headline', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'content', label: 'Content' },
    { id: 'certifications', label: 'Certifications' },
  ];

  /* ---- Sidebar ---- */
  $('profile-image').src = cfg.personal.profileImage;
  $('profile-image').alt = cfg.personal.name;
  $('sidebar-name').textContent = cfg.personal.name;
  $('sidebar-title').textContent = cfg.personal.title;

  const navLinks = SECTIONS.map(
    (s) => `<a href="#${s.id}" data-section="${s.id}">${s.label}</a>`
  ).join('');
  $('sidebar-nav').innerHTML = navLinks;
  $('mobile-nav').innerHTML = navLinks;

  const c = cfg.contact;
  const contactItems = [
    c.email && `<a href="mailto:${c.email}">✉ ${esc(c.email)}</a>`,
    c.address && `<span class="contact-links">📍 ${esc(c.address)}</span>`,
    c.website && `<a href="${c.website}" target="_blank" rel="noopener">🌐 Website</a>`,
    c.linkedin && `<a href="${c.linkedin}" target="_blank" rel="noopener">in LinkedIn</a>`,
    c.github && `<a href="${c.github}" target="_blank" rel="noopener">⌥ GitHub</a>`,
    c.twitter && `<a href="${c.twitter}" target="_blank" rel="noopener">𝕏 Twitter</a>`,
  ].filter(Boolean);
  $('contact-links').innerHTML = contactItems.join('');

  $('download-cv').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = cfg.personal.resumeFile;
    a.download = cfg.personal.resumeFileName;
    a.click();
  });

  /* ---- Main sections ---- */
  const main = $('main');
  const section = (id, inner) => {
    const s = el('section', 'section');
    s.id = id;
    s.innerHTML = inner;
    main.appendChild(s);
  };

  // Headline
  section(
    'headline',
    `<div class="headline">
      <h1>${esc(cfg.personal.name)}</h1>
      <div class="subtitle">${esc(cfg.personal.subtitle)}</div>
      <div class="tagline">${esc(cfg.personal.tagline)}</div>
    </div>`
  );

  // Summary
  section('summary', `<h2>Profile Summary</h2><p>${esc(cfg.summary)}</p>`);

  // Skills
  section(
    'skills',
    `<h2>Skills</h2>${cfg.skills
      .map((g) => `<div class="skill-group"><h3>${esc(g.name)}</h3>${badges(g.skills)}</div>`)
      .join('')}`
  );

  // Experience
  const job = (j) => `
    <div class="item">
      <div class="item-head">
        <div>
          <div class="item-title">${esc(j.position)}</div>
          <div class="item-company">${j.companyUrl ? `<a href="${j.companyUrl}" target="_blank" rel="noopener">${esc(j.company)}</a>` : esc(j.company)}</div>
        </div>
        <div class="item-meta">${esc(j.startDate)} – ${esc(j.endDate)}<br>${esc(j.jobType)} · ${esc(j.location)}</div>
      </div>
      <div class="item-desc">${esc(j.description)}</div>
      ${badges(j.skills)}
    </div>`;
  section('experience', `<h2>Employment</h2>${cfg.experience.jobs.map(job).join('')}`);

  // Education
  section(
    'education',
    `<h2>Education</h2>${cfg.education
      .map(
        (e) => `<div class="item">
          <div class="item-head">
            <div>
              <div class="item-title">${esc(e.degree)}</div>
              <div class="item-company">${esc(e.institution)}</div>
            </div>
            <div class="item-meta">${esc(e.startDate)} – ${esc(e.endDate)}${e.grade ? `<br>Grade: ${esc(e.grade)}` : ''}</div>
          </div>
          ${e.courses ? badges(e.courses) : ''}
        </div>`
      )
      .join('')}`
  );

  // Projects
  section(
    'projects',
    `<h2>Projects</h2><div class="grid">${cfg.projects
      .map(
        (p) => `<div class="card-tile">
          <h3>${esc(p.name)}</h3>
          <span class="item-meta">${esc(p.company)} · ${esc(p.year)}</span>
          <div class="item-desc">${esc(p.description)}</div>
          ${badges(p.skills)}
        </div>`
      )
      .join('')}</div>`
  );

  // Content creation
  const cc = cfg.contentCreation;
  section(
    'content',
    `<h2>Content Creation</h2><p>${esc(cc.description)}</p>
     <div class="grid" style="margin-top:1rem">${cc.platforms
       .map(
         (p) => `<a class="card-tile" href="${p.url}" target="_blank" rel="noopener" style="text-decoration:none">
            <h3>${esc(p.name)}</h3>
            <div class="item-desc">${esc(p.description)}</div>
          </a>`
       )
       .join('')}</div>
     ${badges(cc.topics)}`
  );

  // Certifications
  section(
    'certifications',
    `<h2>Certifications</h2><div class="grid">${cfg.certifications
      .map(
        (cert) => `<div class="card-tile">
          <h3>${esc(cert.name)}</h3>
          <span class="item-meta">${esc(cert.issuer)} · ${esc(cert.date)}</span>
          <div class="item-desc">${esc(cert.description)}</div>
        </div>`
      )
      .join('')}</div>`
  );

  /* ---- Scroll spy ---- */
  const links = document.querySelectorAll('[data-section]');
  const setActive = () => {
    const y = window.scrollY + 100;
    let current = SECTIONS[0].id;
    for (const s of SECTIONS) {
      const node = document.getElementById(s.id);
      if (node && node.offsetTop <= y) current = s.id;
    }
    links.forEach((l) => l.classList.toggle('active', l.dataset.section === current));
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
