import portfolioConfig from '@/config/portfolio.config';
import type { ExperienceEntry } from '@/config/portfolio.types';
import {
  BiBriefcase as BiBriefcaseFilled,
  BiBuilding,
  BiHome,
  BiMapPin,
  BiCalendar,
  BiCog,
  BiAward,
  BiHistory,
} from 'react-icons/bi';

function parseDate(dateStr: string): Date {
  if (dateStr === 'Present') return new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [m, y] = dateStr.split(' ');
  return new Date(parseInt(y, 10), months.indexOf(m), 1);
}

function calculateDuration(start: string, end: string): string {
  const s = parseDate(start);
  const e = parseDate(end);
  let years = e.getFullYear() - s.getFullYear();
  let months = e.getMonth() - s.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo`);
  return parts.length ? parts.join(' ') : '< 1 mo';
}

function calculateTotalYears(entries: ExperienceEntry[]): number {
  let total = 0;
  for (const e of entries) {
    const s = parseDate(e.startDate);
    const end = parseDate(e.endDate);
    total += (end.getTime() - s.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  }
  return Math.ceil(total * 10) / 10;
}

function TimelineEntry({ entry, isTraining }: { entry: ExperienceEntry; isTraining?: boolean }) {
  const accentColor = isTraining ? '#0891b2' : '#1f6feb';

  return (
    <div className="relative mb-8 pl-6 last:mb-0">
      <div
        className="absolute left-[-33px] top-4 z-10 h-3.5 w-3.5 rounded-full border-[3px] bg-white"
        style={{ borderColor: accentColor }}
      />

      <div className="surface-card surface-card-hover p-6">
        <div className="mb-4">
          <h3 className="mb-3 text-xl font-extrabold tracking-normal text-slate-950">{entry.position}</h3>
          <div className="flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[0.8125rem] font-bold ${
                isTraining
                  ? 'bg-cyan-50 text-cyan-700'
                  : entry.jobType === 'Remote'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-blue-50 text-blue-700'
              }`}
            >
              {isTraining ? (
                <>
                  <BiHistory className="text-sm" /> Part-Time
                </>
              ) : entry.jobType === 'Remote' ? (
                <>
                  <BiHome className="text-sm" /> Remote
                </>
              ) : (
                <>
                  <BiBuilding className="text-sm" /> On-site
                </>
              )}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2.5 py-1 text-[0.8125rem] font-bold text-amber-700">
              <BiMapPin className="text-sm" />
              {entry.location}
            </span>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-4 border-b border-slate-200 pb-3">
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.9375rem] font-extrabold text-blue-700 no-underline transition hover:text-cyan-700"
          >
            <BiBuilding className="text-base" />
            {entry.company}
          </a>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500">
            <BiCalendar className="text-base text-slate-400" />
            {entry.startDate} - {entry.endDate}
            <span className="ml-1 font-extrabold text-blue-700">
              ({calculateDuration(entry.startDate, entry.endDate)})
            </span>
          </span>
        </div>

        <p className="mb-4 text-[0.9375rem] leading-[1.75] text-slate-600">{entry.description}</p>

        <div className="mt-4">
          <div className="mb-2 inline-flex items-center gap-1.5 text-[0.75rem] font-extrabold uppercase tracking-[0.16em] text-slate-500">
            <BiCog className="text-slate-400" />
            Technologies
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {entry.skills.map((skill) => (
              <span key={skill} className="tech-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Employment() {
  const { jobs, training } = portfolioConfig.experience;
  const totalYears = calculateTotalYears(jobs);

  return (
    <div className="section-card fade-in">
      <p className="eyebrow">Experience</p>
      <h2 className="section-title mt-2">Employment History</h2>

      <div className="mb-7 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-extrabold text-white shadow-lg">
        <BiBriefcaseFilled className="text-lg" />
        <span>{totalYears}+ years of experience</span>
      </div>

      <div className="relative pl-8" style={{ borderLeft: '2px solid #1f6feb', borderRadius: '2px' }}>
        {jobs.map((job, i) => (
          <TimelineEntry key={i} entry={job} />
        ))}
      </div>

      {training.length > 0 && (
        <>
          <hr className="my-9 border-slate-200" />
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-extrabold tracking-normal text-slate-950">
            <BiAward className="text-cyan-600" />
            Part-Time Training Experience
          </h2>
          <div className="relative pl-8" style={{ borderLeft: '2px solid #0891b2', borderRadius: '2px' }}>
            {training.map((t, i) => (
              <TimelineEntry key={i} entry={t} isTraining />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
