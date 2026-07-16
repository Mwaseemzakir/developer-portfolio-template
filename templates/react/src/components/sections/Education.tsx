import portfolioConfig from '@/config/portfolio.config';
import { BiBook, BiCalendar, BiMedal } from 'react-icons/bi';

export default function Education() {
  const { education } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <p className="eyebrow">Foundation</p>
      <h2 className="section-title mt-2">Education</h2>

      <div className="space-y-5">
        {education.map((edu, i) => (
          <div key={i} className="surface-card surface-card-hover p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-2xl text-blue-700">
                <BiBook />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-extrabold tracking-normal text-slate-950">{edu.degree}</h3>
                <p className="mt-1 text-base font-bold text-blue-700">{edu.institution}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="meta-pill">
                    <BiCalendar className="text-slate-400" />
                    {edu.startDate} - {edu.endDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700">
                    <BiMedal />
                    Grade: {edu.grade}
                  </span>
                </div>
              </div>
            </div>

            {edu.courses.length > 0 && (
              <div className="mt-6">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span key={course} className="skill-badge">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
