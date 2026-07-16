import { useEffect, useState } from 'react';
import type { PortfolioConfig } from '@/config/portfolio.types';
import { asset } from '@/lib/asset';
import {
  BiHome,
  BiUser,
  BiCog,
  BiBriefcase,
  BiBook,
  BiFolderOpen,
  BiEdit,
  BiBadgeCheck,
  BiDownload,
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiGlobe,
} from 'react-icons/bi';

const NAV_ITEMS = [
  { id: 'headline', label: 'Home', Icon: BiHome },
  { id: 'profile-summary', label: 'Summary', Icon: BiUser },
  { id: 'skills', label: 'Skills', Icon: BiCog },
  { id: 'employment', label: 'Experience', Icon: BiBriefcase },
  { id: 'education', label: 'Education', Icon: BiBook },
  { id: 'project', label: 'Projects', Icon: BiFolderOpen },
  { id: 'content-creator', label: 'Content', Icon: BiEdit },
  { id: 'certification', label: 'Credentials', Icon: BiBadgeCheck },
];

interface Props {
  config: PortfolioConfig;
}

export default function Sidebar({ config }: Props) {
  const [activeSection, setActiveSection] = useState('headline');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = asset(config.personal.resumeFile);
    link.download = config.personal.resumeFileName;
    link.click();
  };

  const socials = [
    { href: `mailto:${config.contact.email}`, label: 'Email', Icon: BiEnvelope },
    { href: config.contact.linkedin, label: 'LinkedIn', Icon: BiLogoLinkedin },
    { href: config.contact.github, label: 'GitHub', Icon: BiLogoGithub },
    { href: config.contact.website, label: 'Website', Icon: BiGlobe },
  ].filter((item) => item.href);

  return (
    <aside className="sidebar-wrapper hidden md:flex fixed left-0 top-0 z-50 h-screen w-72 flex-col overflow-y-auto border-r border-white/10 bg-[#111827] text-white shadow-[12px_0_40px_rgba(15,23,42,0.18)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(8,145,178,0.32),transparent_28rem),linear-gradient(180deg,rgba(31,111,235,0.18),transparent_36%)]" />

      <div className="relative px-6 pt-7 pb-6">
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl">
          <div className="flex items-center gap-4">
            <img
              src={asset(config.personal.profileImage)}
              alt={config.personal.name}
              width={72}
              height={72}
              className="h-[72px] w-[72px] flex-shrink-0 rounded-lg border border-white/20 object-cover shadow-lg"
            />
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Portfolio</p>
              <h2 className="mt-1 truncate text-lg font-extrabold tracking-normal text-white">{config.personal.name}</h2>
              <p className="mt-1 text-sm font-semibold text-slate-300">{config.personal.title}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 text-center">
            <div className="rounded-md border border-white/10 bg-black/15 px-3 py-2">
              <div className="text-lg font-extrabold text-white">{config.projects.length}+</div>
              <div className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-400">Projects</div>
            </div>
            <div className="rounded-md border border-white/10 bg-black/15 px-3 py-2">
              <div className="text-lg font-extrabold text-white">{config.skills.length}</div>
              <div className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-400">Skill areas</div>
            </div>
          </div>
        </div>
      </div>

      <nav className="relative flex-1 px-4 py-2">
        <ul className="space-y-1.5 list-none">
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`group flex w-full items-center gap-3 rounded-lg px-3.5 py-3 text-left text-sm font-semibold transition duration-200 ${
                  activeSection === id
                    ? 'bg-white text-slate-950 shadow-lg'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md transition ${
                    activeSection === id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-cyan-100 group-hover:bg-white/15'
                  }`}
                >
                  <Icon className="text-lg" />
                </span>
                <span className="font-semibold">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative px-6 pb-6 pt-4">
        <div className="mb-4 flex items-center justify-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>

        <button
          onClick={downloadCV}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-extrabold text-slate-950 shadow-[0_12px_28px_rgba(8,145,178,0.28)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          <BiDownload className="text-lg" />
          Download CV
        </button>
      </div>
    </aside>
  );
}
