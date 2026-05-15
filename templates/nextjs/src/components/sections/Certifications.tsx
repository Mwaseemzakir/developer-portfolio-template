import portfolioConfig from '@/config/portfolio.config';
import { BiPatchCheck, BiBuilding, BiCalendar, BiLink } from 'react-icons/bi';

export default function Certifications() {
  const { certifications } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <h2 className="section-title">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="p-5 bg-slate-50 rounded-[10px] border border-slate-200 transition-all duration-200 hover:border-slate-300 hover:shadow-md flex flex-col gap-3"
          >
            {/* Icon + name */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xl flex-shrink-0">
                <BiPatchCheck />
              </div>
              <h3 className="font-sans text-base font-bold text-slate-900 tracking-tight leading-snug mt-0.5">
                {cert.name}
              </h3>
            </div>

            {/* Issuer + date */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                <BiBuilding className="text-slate-400" />
                {cert.issuer}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                <BiCalendar className="text-slate-400" />
                {cert.date}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed">{cert.description}</p>

            {/* Optional: expiry, credential */}
            {(cert.expirationDate || cert.credentialId) && (
              <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-200">
                {cert.expirationDate && (
                  <span className="text-xs text-slate-400 font-medium">{cert.expirationDate}</span>
                )}
                {cert.credentialUrl && cert.credentialUrl.startsWith('http') ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold no-underline hover:underline"
                  >
                    <BiLink />
                    {cert.credentialId ?? 'View credential'}
                  </a>
                ) : cert.credentialId ? (
                  <span className="text-xs text-slate-400 font-medium">ID: {cert.credentialId}</span>
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
