import { useState } from 'react';
import { InitializingScreen } from './components/InitializingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatusPanel } from './components/StatusPanel';
import { BuildLab } from './components/BuildLab';
import { ProjectModal } from './components/ProjectModal';
import { FeaturedDeepDive } from './components/FeaturedDeepDive';
import { HowIThink } from './components/HowIThink';
import { SkillConstellation } from './components/SkillConstellation';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { BeyondCode } from './components/BeyondCode';
import { JourneyTimeline } from './components/JourneyTimeline';
import { GithubActivity } from './components/GithubActivity';
import { ConnectSection } from './components/ConnectSection';
import { EasterEggToast } from './components/EasterEggToast';
import { Footer } from './components/Footer';
import type { ProjectNode } from './types';

export function App() {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectNode | null>(null);
  const [showEasterEgg, setShowEasterEgg] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* 1. Opening Screen - System Initializing */}
      {initializing && (
        <InitializingScreen onComplete={() => setInitializing(false)} />
      )}

      {/* Main Portfolio Layout */}
      {!initializing && (
        <>
          {/* Navigation */}
          <Navbar onEasterEggTrigger={() => setShowEasterEgg(true)} />

          <main className="flex-grow">
            {/* 2. Main Hero - Personal AI Dashboard & Profile Card */}
            <Hero />

            {/* 3. Personal Status Panel - Bhavya's Current State */}
            <StatusPanel />

            {/* 4. My Digital Lab - The Build Lab Project Map */}
            <BuildLab onSelectProject={(project) => setSelectedProject(project)} />

            {/* 7. Featured Project - Deep Dive Case Study */}
            <FeaturedDeepDive />

            {/* 8. How I Think - Problem Solving Pipeline */}
            <HowIThink />

            {/* 9. Skills - Tech Constellation */}
            <SkillConstellation />

            {/* 10. Learning Now - Research Board */}
            <CurrentlyExploring />

            {/* 11. Beyond The Repositories - Mindset Panels */}
            <BeyondCode />

            {/* 12. Education - My Journey Timeline */}
            <JourneyTimeline />

            {/* 13. GitHub Activity - My Code, In Motion */}
            <GithubActivity />

            {/* 14 & 15. Connect & Open Channel */}
            <ConnectSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Project DNA Modal */}
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          {/* Secret Interaction Easter Egg Toast */}
          <EasterEggToast
            show={showEasterEgg}
            onClose={() => setShowEasterEgg(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;
