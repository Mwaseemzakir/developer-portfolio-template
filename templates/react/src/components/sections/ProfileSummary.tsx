import portfolioConfig from '@/config/portfolio.config';
import { BiGitBranch, BiGroup, BiServer, BiTrendingUp } from 'react-icons/bi';

export default function ProfileSummary() {
  const highlights = [
    { label: 'Architecture', value: 'Clean APIs', Icon: BiServer },
    { label: 'Delivery', value: 'CI/CD Ready', Icon: BiGitBranch },
    { label: 'Leadership', value: 'Team Mentor', Icon: BiGroup },
    { label: 'Impact', value: 'Business Value', Icon: BiTrendingUp },
  ];

  return (
    <div className="section-card fade-in">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Profile</p>
          <h2 className="section-title mt-2">Summary</h2>
        </div>

        <div className="surface-card p-6 sm:p-7">
          <p className="text-[1.03rem] leading-8 text-slate-600">{portfolioConfig.summary}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map(({ label, value, Icon }) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <Icon className="mb-2 text-xl text-blue-700" />
                <p className="text-sm font-extrabold text-slate-950">{value}</p>
                <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
