import portfolioConfig from '@/config/portfolio.config';
import { BiCodeCurly, BiData, BiPalette, BiGitBranch } from 'react-icons/bi';
import type { IconType } from 'react-icons';

const CATEGORY_ICON_MAP: Array<{ keyword: string; Icon: IconType; accent: string }> = [
  { keyword: '.NET', Icon: BiCodeCurly, accent: 'text-blue-700 bg-blue-50 border-blue-100' },
  { keyword: 'Database', Icon: BiData, accent: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
  { keyword: 'Client', Icon: BiPalette, accent: 'text-violet-700 bg-violet-50 border-violet-100' },
  { keyword: 'Version', Icon: BiGitBranch, accent: 'text-cyan-700 bg-cyan-50 border-cyan-100' },
];

function getCategoryStyle(name: string) {
  return CATEGORY_ICON_MAP.find((m) => name.includes(m.keyword)) ?? CATEGORY_ICON_MAP[0];
}

export default function Skills() {
  const { skills } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <p className="eyebrow">Capabilities</p>
      <h2 className="section-title mt-2">Technical Skills</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((category) => {
          const { Icon, accent } = getCategoryStyle(category.name);
          return (
            <div key={category.name} className="surface-card surface-card-hover p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg border text-2xl ${accent}`}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-normal text-slate-950">{category.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      {category.skills.length} tools
                    </p>
                  </div>
                </div>
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
