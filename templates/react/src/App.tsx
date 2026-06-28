import Sidebar from '@/components/layout/Sidebar';
import MobileNav from '@/components/layout/MobileNav';
import Headline from '@/components/sections/Headline';
import ProfileSummary from '@/components/sections/ProfileSummary';
import Skills from '@/components/sections/Skills';
import Employment from '@/components/sections/Employment';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import ContentCreator from '@/components/sections/ContentCreator';
import Certifications from '@/components/sections/Certifications';
import portfolioConfig from '@/config/portfolio.config';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen font-sans">
      {/* Desktop sidebar */}
      <Sidebar config={portfolioConfig} />

      {/* Mobile top nav */}
      <MobileNav />

      {/* Main content */}
      <main className="flex-1 md:ml-60 mt-14 md:mt-0 bg-slate-100 px-4 py-6 md:px-8 md:py-8">
        <section id="headline">
          <Headline />
        </section>

        <section id="profile-summary">
          <ProfileSummary />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="employment">
          <Employment />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="project">
          <Projects />
        </section>

        <section id="content-creator">
          <ContentCreator />
        </section>

        <section id="certification">
          <Certifications />
        </section>

        <footer className="max-w-[900px] mx-auto mt-8 py-6 text-center border-t border-slate-200">
          <p className="text-slate-400 text-[0.8125rem] font-medium">
            &copy; {currentYear} {portfolioConfig.personal.name}. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
