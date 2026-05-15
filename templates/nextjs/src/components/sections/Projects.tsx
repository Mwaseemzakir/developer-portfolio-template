import portfolioConfig from '@/config/portfolio.config';
import { BiFolder2Open, BiBuilding, BiCalendar } from 'react-icons/bi';

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="space-y-4 mt-5">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-5 bg-slate-50 rounded-[10px] border border-slate-200 transition-all duration-200 hover:border-slate-300 hover:shadow-md"
          >
            {/* Title row */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg flex-shrink-0 mt-0.5">
                <BiFolder2Open />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-lg font-bold text-slate-900 tracking-tight mb-1">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                    <BiBuilding className="text-slate-400" />
                    {project.company}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400 font-medium">
                    <BiCalendar className="text-slate-400" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-[1.7] mb-3">{project.description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
