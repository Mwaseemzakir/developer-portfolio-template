import portfolioConfig from '@/config/portfolio.config';
import { BiPencilSquare, BiLogoMediumSquare, BiLogoYoutube } from 'react-icons/bi';
import type { IconType } from 'react-icons';
import type { ContentPlatform } from '@/config/portfolio.types';

const PLATFORM_ICONS: Record<string, IconType> = {
  blog: BiPencilSquare,
  medium: BiLogoMediumSquare,
  youtube: BiLogoYoutube,
  custom: BiPencilSquare,
};

function PlatformCard({ platform }: { platform: ContentPlatform }) {
  const Icon = PLATFORM_ICONS[platform.icon] ?? BiPencilSquare;

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden border border-slate-200 no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Gradient header */}
      <div
        className="flex items-center gap-3 px-5 py-4 text-white"
        style={{ background: platform.gradient }}
      >
        <Icon className="text-2xl flex-shrink-0" />
        <span className="font-bold text-base">{platform.name}</span>
      </div>
      {/* Description */}
      <div className="px-5 py-4 bg-white">
        <p className="text-slate-500 text-sm leading-relaxed m-0">{platform.description}</p>
      </div>
    </a>
  );
}

export default function ContentCreator() {
  const { contentCreation } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <h2 className="section-title">Content Creation &amp; Blogging</h2>
      <p className="text-slate-500 text-base mb-6">{contentCreation.description}</p>

      {/* Platform cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {contentCreation.platforms.map((platform) => (
          <PlatformCard key={platform.name} platform={platform} />
        ))}
      </div>

      {/* Topics */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Topics I write about</p>
        <div className="flex flex-wrap gap-2">
          {contentCreation.topics.map((topic) => (
            <span
              key={topic}
              className="inline-block px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 text-sm font-semibold bg-blue-50 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
