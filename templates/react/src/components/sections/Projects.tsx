import portfolioConfig from '@/config/portfolio.config';
import { BiFolderOpen, BiBuilding, BiCalendar, BiCodeAlt } from 'react-icons/bi';

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <p className="eyebrow">Delivery</p>
      <h2 className="section-title mt-2">Selected Projects</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project, i) => (
          <article key={i} className="surface-card surface-card-hover flex h-full flex-col p-5">
            <div className="mb-4 flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-cyan-100 bg-cyan-50 text-xl text-cyan-700">
                <BiFolderOpen />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-extrabold tracking-normal text-slate-950">{project.name}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-1 font-bold text-slate-600">
                    <BiBuilding className="text-slate-400" />
                    {project.company}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-slate-500">
                    <BiCalendar className="text-slate-400" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            <p className="mb-4 flex-1 text-sm leading-[1.75] text-slate-600">{project.description}</p>

            <div>
              <p className="mb-2 inline-flex items-center gap-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                <BiCodeAlt />
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
