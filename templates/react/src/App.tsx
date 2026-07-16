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
    <div className="min-h-screen font-sans text-slate-900">
      <Sidebar config={portfolioConfig} />
      <MobileNav />

      <main className="md:ml-72 mt-14 md:mt-0 px-4 py-6 md:px-8 lg:px-12 md:py-10">
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

        <footer className="max-w-[1040px] mx-auto mt-8 py-8 text-center border-t border-slate-200">
          <p className="text-slate-500 text-[0.8125rem] font-semibold">
            &copy; {currentYear} {portfolioConfig.personal.name}. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
