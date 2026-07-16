import portfolioConfig from '@/config/portfolio.config';
import { BiEdit, BiLinkExternal, BiLogoMediumSquare, BiLogoYoutube } from 'react-icons/bi';
import type { IconType } from 'react-icons';
import type { ContentPlatform } from '@/config/portfolio.types';

const PLATFORM_ICONS: Record<string, IconType> = {
  blog: BiEdit,
  medium: BiLogoMediumSquare,
  youtube: BiLogoYoutube,
  custom: BiEdit,
};

function PlatformCard({ platform }: { platform: ContentPlatform }) {
  const Icon = PLATFORM_ICONS[platform.icon] ?? BiEdit;

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card surface-card-hover block overflow-hidden no-underline"
    >
      <div className="flex items-center gap-3 px-5 py-4 text-white" style={{ background: platform.gradient }}>
        <Icon className="text-2xl" />
        <span className="font-extrabold">{platform.name}</span>
        <BiLinkExternal className="ml-auto text-lg opacity-80" />
      </div>
      <div className="bg-white px-5 py-4">
        <p className="text-sm leading-7 text-slate-600">{platform.description}</p>
      </div>
    </a>
  );
}

export default function ContentCreator() {
  const { contentCreation } = portfolioConfig;

  return (
    <div className="section-card fade-in">
      <p className="eyebrow">Knowledge Sharing</p>
      <h2 className="section-title mt-2">Content Creation</h2>
      <p className="mb-6 max-w-3xl text-base leading-8 text-slate-600">{contentCreation.description}</p>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contentCreation.platforms.map((platform) => (
          <PlatformCard key={platform.name} platform={platform} />
        ))}
      </div>

      <div className="surface-card p-5">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">Topics I write about</p>
        <div className="flex flex-wrap gap-2">
          {contentCreation.topics.map((topic) => (
            <span key={topic} className="tech-badge">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
