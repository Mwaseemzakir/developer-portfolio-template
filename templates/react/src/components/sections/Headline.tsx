import portfolioConfig from '@/config/portfolio.config';
import {
  BiEnvelope,
  BiMapPin,
  BiGlobe,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoTwitter,
  BiCheckShield,
  BiCodeAlt,
  BiNetworkChart,
  BiRocket,
} from 'react-icons/bi';

const contactItems = [
  {
    label: 'Email',
    getValue: () => portfolioConfig.contact.email,
    getHref: () => `mailto:${portfolioConfig.contact.email}`,
    Icon: BiEnvelope,
  },
  {
    label: 'Location',
    getValue: () => portfolioConfig.contact.address,
    getHref: () => `https://www.google.com/maps?q=${encodeURIComponent(portfolioConfig.contact.address)}`,
    Icon: BiMapPin,
  },
  {
    label: 'Website',
    getValue: () => 'Portfolio and blog',
    getHref: () => portfolioConfig.contact.website,
    Icon: BiGlobe,
  },
  {
    label: 'LinkedIn',
    getValue: () => 'Professional profile',
    getHref: () => portfolioConfig.contact.linkedin,
    Icon: BiLogoLinkedin,
  },
  {
    label: 'GitHub',
    getValue: () => 'Code and packages',
    getHref: () => portfolioConfig.contact.github,
    Icon: BiLogoGithub,
  },
  {
    label: 'X / Twitter',
    getValue: () => 'Technical updates',
    getHref: () => portfolioConfig.contact.twitter,
    Icon: BiLogoTwitter,
  },
];

export default function Headline() {
  const { personal, projects, skills, experience } = portfolioConfig;
  const skillCount = skills.reduce((sum, group) => sum + group.skills.length, 0);
  const currentRole = experience.jobs[0];

  return (
    <div className="section-card fade-in">
      <div className="surface-card overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative p-6 sm:p-9 lg:p-11">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-cyan-800">
              <BiCheckShield className="text-base" />
              Enterprise Software Leader
            </div>

            <h1 className="max-w-3xl text-[2.5rem] font-black leading-[1.05] tracking-normal text-slate-950 sm:text-[3.4rem]">
              {personal.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-extrabold text-blue-700">{personal.title}</p>
            <p className="mt-2 max-w-2xl text-base font-semibold text-slate-600">{personal.subtitle}</p>
            <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-slate-600">{personal.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${portfolioConfig.contact.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <BiEnvelope className="text-lg" />
                Contact Me
              </a>
              <a
                href={portfolioConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
              >
                <BiLogoGithub className="text-lg" />
                View GitHub
              </a>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-950 p-6 text-white lg:border-l lg:border-t-0 sm:p-9">
            <div className="grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400 text-slate-950">
                    <BiRocket className="text-xl" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Current focus</p>
                    <p className="mt-1 font-extrabold text-white">{currentRole.position}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{currentRole.company}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <BiCodeAlt className="mb-3 text-2xl text-cyan-300" />
                  <p className="text-2xl font-black">{skillCount}+</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Tech skills</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <BiNetworkChart className="mb-3 text-2xl text-emerald-300" />
                  <p className="text-2xl font-black">{projects.length}+</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Delivered works</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map(({ label, getValue, getHref, Icon }) => (
            <a
              key={label}
              href={getHref()}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noopener noreferrer'}
              className="group flex min-w-0 items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 no-underline transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-md"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-white text-lg text-blue-700 shadow-sm ring-1 ring-slate-200 transition group-hover:text-cyan-700">
                <Icon />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </span>
                <span className="block truncate text-sm font-bold text-slate-800">{getValue()}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
