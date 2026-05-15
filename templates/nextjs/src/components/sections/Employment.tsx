import portfolioConfig from '@/config/portfolio.config';
import type { ExperienceEntry } from '@/config/portfolio.types';
import {
  BiBriefcaseFill,
  BiBuilding,
  BiHouseFill,
  BiGeoAltFill,
  BiCalendar,
  BiGearFill,
  BiAwardFill,
  BiClockHistory,
} from 'react-icons/bi';

function parseDate(dateStr: string): Date {
  if (dateStr === 'Present') return new Date();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const [m, y] = dateStr.split(' ');
  return new Date(parseInt(y), months.indexOf(m), 1);
}

function calculateDuration(start: string, end: string): string {
  const s = parseDate(start);
  const e = parseDate(end);
  let years = e.getFullYear() - s.getFullYear();
  let months = e.getMonth() - s.getMonth();
  if (months < 0) { years--; months += 12; }
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
  const accentColor = isTraining ? '#0ea5e9' : '#2563eb';

  return (
    <div className="relative mb-8 last:mb-0 pl-6">
      {/* Timeline dot */}
      <div
        className="absolute left-[-33px] top-2 w-3.5 h-3.5 rounded-full bg-white border-[3px] z-10 transition-all duration-200"
        style={{ borderColor: accentColor }}
      />

      {/* Card */}
      <div className="bg-slate-50 rounded-[10px] p-6 border border-slate-200 transition-all duration-200 hover:border-slate-300 hover:shadow-md">
        {/* Position + meta */}
        <div className="mb-4">
          <h3 className="font-sans text-xl font-bold text-slate-900 mb-2 tracking-tight">{entry.position}</h3>
          <div className="flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[0.8125rem] font-semibold ${
                isTraining
                  ? 'bg-sky-50 text-sky-600'
                  : entry.jobType === 'Remote'
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'bg-blue-50 text-blue-600'
              }`}
            >
              {isTraining ? (
                <><BiClockHistory className="text-sm" /> Part-Time</>
              ) : entry.jobType === 'Remote' ? (
                <><BiHouseFill className="text-sm" /> Remote</>
              ) : (
                <><BiBuilding className="text-sm" /> On-site</>
              )}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[0.8125rem] font-semibold bg-amber-50 text-amber-600">
              <BiGeoAltFill className="text-sm" />
              {entry.location}
            </span>
          </div>
        </div>

        {/* Company + dates */}
        <div className="flex flex-wrap items-center gap-4 pb-3 mb-4 border-b border-slate-200">
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-[0.9375rem] no-underline hover:text-blue-700 transition-colors"
          >
            <BiBuilding className="text-base" />
            {entry.company}
          </a>
          <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium text-sm">
            <BiCalendar className="text-base text-slate-400" />
            {entry.startDate} – {entry.endDate}
            <span className="text-blue-600 font-semibold ml-1">
              ({calculateDuration(entry.startDate, entry.endDate)})
            </span>
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-500 leading-[1.7] text-[0.9375rem] mb-4">{entry.description}</p>

        {/* Technologies */}
        <div className="mt-4">
          <div className="inline-flex items-center gap-1.5 text-slate-700 font-semibold text-[0.8125rem] uppercase tracking-wider mb-2">
            <BiGearFill className="text-slate-400" />
            Technologies:
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {entry.skills.map((skill) => (
              <span key={skill} className="skill-badge">
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
      <h2 className="section-title">Employment History</h2>

      {/* Experience badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-full font-semibold text-sm mb-7">
        <BiBriefcaseFill className="text-lg" />
        <span>{totalYears}+ years of experience</span>
      </div>

      {/* Jobs timeline */}
      <div className="relative pl-8" style={{ borderLeft: '2px solid #2563eb', borderRadius: '2px' }}>
        {jobs.map((job, i) => (
          <TimelineEntry key={i} entry={job} />
        ))}
      </div>

      {/* Training */}
      {training.length > 0 && (
        <>
          <hr className="my-9 border-slate-200" />
          <h2 className="flex items-center gap-2.5 font-serif text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
            <BiAwardFill className="text-sky-500" />
            Part-Time Training Experience
          </h2>
          <div className="relative pl-8" style={{ borderLeft: '2px solid #0ea5e9', borderRadius: '2px' }}>
            {training.map((t, i) => (
              <TimelineEntry key={i} entry={t} isTraining />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
