import portfolioConfig from '@/config/portfolio.config';
import { BiCodeSquare, BiData, BiPalette, BiGitBranch } from 'react-icons/bi';
import type { IconType } from 'react-icons';

const CATEGORY_ICON_MAP: Array<{ keyword: string; Icon: IconType }> = [
  { keyword: '.NET', Icon: BiCodeSquare },
  { keyword: 'Database', Icon: BiData },
  { keyword: 'Client', Icon: BiPalette },
  { keyword: 'Version', Icon: BiGitBranch },
];

function getCategoryIcon(name: string): IconType {
  return CATEGORY_ICON_MAP.find((m) => name.includes(m.keyword))?.Icon ?? BiCodeSquare;
}

export default function Skills() {
  const { skills } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        {skills.map((category) => {
          const Icon = getCategoryIcon(category.name);
          return (
            <div
              key={category.name}
              className="p-6 rounded-[10px] bg-slate-50 border border-slate-200 transition-all duration-200 hover:border-slate-300 hover:shadow-md min-h-[180px] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xl flex-shrink-0">
                  <Icon />
                </div>
                <h3 className="text-[1.0625rem] font-bold text-slate-900 font-sans tracking-tight m-0">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
