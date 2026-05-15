'use client';

import { useEffect, useState } from 'react';
import {
  BiHouseDoor,
  BiPersonLinesFill,
  BiGear,
  BiBriefcase,
  BiMortarboard,
  BiFolder2Open,
  BiPencilSquare,
  BiPatchCheck,
} from 'react-icons/bi';

const NAV_ITEMS = [
  { id: 'headline', label: 'Home', Icon: BiHouseDoor },
  { id: 'profile-summary', label: 'Summary', Icon: BiPersonLinesFill },
  { id: 'skills', label: 'Skills', Icon: BiGear },
  { id: 'employment', label: 'Employment', Icon: BiBriefcase },
  { id: 'education', label: 'Education', Icon: BiMortarboard },
  { id: 'project', label: 'Projects', Icon: BiFolder2Open },
  { id: 'content-creator', label: 'Content', Icon: BiPencilSquare },
  { id: 'certification', label: 'Certifications', Icon: BiPatchCheck },
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
    <nav
      className="mobile-nav md:hidden fixed top-0 left-0 right-0 z-50 shadow-lg"
      style={{ background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)' }}
    >
      <div className="flex overflow-x-auto scrollbar-hide px-2 py-2 gap-0.5">
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
              activeSection === id
                ? 'bg-blue-600 text-white'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
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
