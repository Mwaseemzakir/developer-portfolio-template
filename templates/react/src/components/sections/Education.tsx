import portfolioConfig from '@/config/portfolio.config';
import { BiBook, BiCalendar, BiMedal } from 'react-icons/bi';

export default function Education() {
  const { education } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="p-6 bg-slate-50 rounded-[10px] border border-slate-200 transition-all duration-200 hover:border-slate-300 hover:shadow-md"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                <BiBook />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-xl font-bold text-slate-900 mb-1 tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 font-semibold text-base">{edu.institution}</p>
              </div>
            </div>

            {/* Meta: dates + grade */}
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-sm font-medium text-slate-600">
                <BiCalendar className="text-slate-400" />
                {edu.startDate} – {edu.endDate}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100 text-sm font-semibold text-emerald-600">
                <BiMedal />
                Grade: {edu.grade}
              </span>
            </div>

            {/* Coursework */}
            {edu.courses.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 transition-all duration-200 hover:border-blue-300 hover:text-blue-600"
                    >
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
