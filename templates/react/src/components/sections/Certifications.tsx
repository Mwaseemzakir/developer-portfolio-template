import portfolioConfig from '@/config/portfolio.config';
import { BiBadgeCheck, BiBuilding, BiCalendar, BiLink } from 'react-icons/bi';

export default function Certifications() {
  const { certifications } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <p className="eyebrow">Proof</p>
      <h2 className="section-title mt-2">Certifications</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <article key={i} className="surface-card surface-card-hover flex flex-col gap-3 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-xl text-emerald-700">
                <BiBadgeCheck />
              </div>
              <h3 className="mt-0.5 text-base font-extrabold leading-snug tracking-normal text-slate-950">{cert.name}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="meta-pill">
                <BiBuilding className="text-slate-400" />
                {cert.issuer}
              </span>
              <span className="meta-pill">
                <BiCalendar className="text-slate-400" />
                {cert.date}
              </span>
            </div>

            <p className="text-sm leading-7 text-slate-600">{cert.description}</p>

            {(cert.expirationDate || cert.credentialId) && (
              <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-200 pt-3">
                {cert.expirationDate && (
                  <span className="text-xs font-semibold text-slate-500">{cert.expirationDate}</span>
                )}
                {cert.credentialUrl && cert.credentialUrl.startsWith('http') ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-blue-700 no-underline hover:underline"
                  >
                    <BiLink />
                    {cert.credentialId ?? 'View credential'}
                  </a>
                ) : cert.credentialId ? (
                  <span className="text-xs font-semibold text-slate-500">ID: {cert.credentialId}</span>
                ) : null}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
