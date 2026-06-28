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
} from 'react-icons/bi';

const NAV_ITEMS = [
  { id: 'headline', label: 'Home', Icon: BiHome },
  { id: 'profile-summary', label: 'Summary', Icon: BiUser },
  { id: 'skills', label: 'Skills', Icon: BiCog },
  { id: 'employment', label: 'Employment', Icon: BiBriefcase },
  { id: 'education', label: 'Education', Icon: BiBook },
  { id: 'project', label: 'Projects', Icon: BiFolderOpen },
  { id: 'content-creator', label: 'Content', Icon: BiEdit },
  { id: 'certification', label: 'Certifications', Icon: BiBadgeCheck },
];

interface Props {
  config: PortfolioConfig;
}

export default function Sidebar({ config }: Props) {
  const [activeSection, setActiveSection] = useState('headline');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = asset(config.personal.resumeFile);
    link.download = config.personal.resumeFileName;
    link.click();
  };

  return (
    <aside className="sidebar-wrapper hidden md:flex flex-col w-60 h-screen fixed left-0 top-0 overflow-y-auto z-50 shadow-xl"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}>

      {/* Profile header */}
      <div className="px-5 pt-8 pb-6 text-center border-b border-white/10">
        <div className="mb-4 flex justify-center">
          <img
            src={asset(config.personal.profileImage)}
            alt={config.personal.name}
            width={100}
            height={100}
            className="rounded-full border-[3px] object-cover transition-all duration-200 w-[100px] h-[100px]"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#3b82f6')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
          />
        </div>
        <h2 className="font-serif text-[1.125rem] font-bold text-white mb-1 tracking-[-0.01em]">
          {config.personal.name}
        </h2>
        <p className="text-slate-400 text-[0.8125rem] font-medium tracking-wide">
          {config.personal.title}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-0.5 list-none p-0 m-0">
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[0.875rem] font-medium transition-all duration-200 cursor-pointer text-left ${
                  activeSection === id
                    ? 'bg-blue-600 text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]'
                    : 'text-white/70 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <Icon
                  className={`text-[1.125rem] w-5 text-center flex-shrink-0 transition-opacity duration-200 ${
                    activeSection === id ? 'opacity-100' : 'opacity-70'
                  }`}
                />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Download CV */}
      <div className="px-3 pb-6 pt-4 border-t border-white/10">
        <button
          onClick={downloadCV}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border text-[0.875rem] font-semibold transition-all duration-200"
          style={{
            borderColor: 'rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.85)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
          }}
        >
          <BiDownload className="text-base" />
          <span>Download CV</span>
        </button>
      </div>
    </aside>
  );
}
