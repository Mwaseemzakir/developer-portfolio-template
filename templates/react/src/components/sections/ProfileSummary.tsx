import portfolioConfig from '@/config/portfolio.config';

export default function ProfileSummary() {
  return (
    <div className="section-card fade-in">
      <h2 className="section-title">Profile Summary</h2>
      <p className="text-slate-500 leading-[1.8] text-base">{portfolioConfig.summary}</p>
    </div>
  );
}
