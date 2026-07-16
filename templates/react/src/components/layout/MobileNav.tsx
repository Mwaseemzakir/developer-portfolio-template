import { useEffect, useState } from 'react';
import {
  BiHome,
  BiUser,
  BiCog,
  BiBriefcase,
  BiBook,
  BiFolderOpen,
  BiEdit,
  BiBadgeCheck,
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

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState('headline');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80;
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

  return (
    <nav className="mobile-nav md:hidden fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-lg backdrop-blur">
      <div className="flex overflow-x-auto scrollbar-hide px-2 py-2 gap-1">
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
              activeSection === id
                ? 'bg-cyan-400 text-slate-950'
                : 'text-white/75 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon className="text-sm flex-shrink-0" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
