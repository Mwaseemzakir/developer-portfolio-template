import portfolioConfig from '@/config/portfolio.config';
import {
  BiEnvelope,
  BiMapPin,
  BiGlobe,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoTwitter,
} from 'react-icons/bi';

const contactItems = [
  {
    label: 'Email',
    getValue: () => portfolioConfig.contact.email,
    getHref: () => `mailto:${portfolioConfig.contact.email}`,
    Icon: BiEnvelope,
    iconBg: 'bg-blue-600',
  },
  {
    label: 'Location',
    getValue: () => portfolioConfig.contact.address,
    getHref: () => `https://www.google.com/maps?q=${encodeURIComponent(portfolioConfig.contact.address)}`,
    Icon: BiMapPin,
    iconBg: 'bg-blue-600',
  },
  {
    label: 'Website',
    getValue: () => 'Visit my site',
    getHref: () => portfolioConfig.contact.website,
    Icon: BiGlobe,
    iconBg: 'bg-blue-600',
  },
  {
    label: 'LinkedIn',
    getValue: () => 'Connect with me',
    getHref: () => portfolioConfig.contact.linkedin,
    Icon: BiLogoLinkedin,
    iconBg: 'bg-[#0077b5]',
  },
  {
    label: 'GitHub',
    getValue: () => 'View my code',
    getHref: () => portfolioConfig.contact.github,
    Icon: BiLogoGithub,
    iconBg: 'bg-[#24292f]',
  },
  {
    label: 'X / Twitter',
    getValue: () => 'Follow me',
    getHref: () => portfolioConfig.contact.twitter,
    Icon: BiLogoTwitter,
    iconBg: 'bg-slate-900',
  },
];

export default function Headline() {
  const { personal } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      {/* Name, title, tagline */}
      <div className="text-center mb-9">
        <h1
          className="font-serif text-[2.75rem] font-extrabold text-slate-900 mb-2 tracking-tight"
          style={{ animation: 'fadeInUp 0.5s ease-out' }}
        >
          {personal.name}
        </h1>
        <h2
          className="text-blue-600 font-sans text-[1.375rem] font-bold mb-2 tracking-tight"
          style={{ animation: 'fadeInUp 0.5s ease-out 0.08s backwards' }}
        >
          {personal.title}
        </h2>
        <p
          className="text-slate-500 text-base font-semibold mb-2"
          style={{ animation: 'fadeInUp 0.5s ease-out 0.12s backwards' }}
        >
          {personal.subtitle}
        </p>
        <p
          className="text-slate-500 text-[0.9375rem] leading-relaxed max-w-lg mx-auto"
          style={{ animation: 'fadeInUp 0.5s ease-out 0.16s backwards' }}
        >
          {personal.tagline}
        </p>
      </div>

      {/* Contact grid */}
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {contactItems.map(({ label, getValue, getHref, Icon, iconBg }) => (
          <a
            key={label}
            href={getHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3.5 bg-slate-50 rounded-[10px] border border-slate-200 text-slate-800 no-underline transition-all duration-200 hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg text-white flex-shrink-0 ${iconBg}`}
            >
              <Icon />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
                {label}
              </span>
              <span className="text-sm font-semibold text-slate-800 truncate">{getValue()}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
