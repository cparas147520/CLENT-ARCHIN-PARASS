import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhoneSimulator } from './components/PhoneSimulator';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveCodePlayground } from './components/InteractiveCodePlayground';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DevMenuModal } from './components/DevMenuModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDevMenuOpen, setIsDevMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] selection:bg-[#FF3B3F]/30 selection:text-[#FF3B3F] flex flex-col font-sans relative">
      {/* Subtle architectural vertical border indicator lines */}
      <div className="fixed top-0 left-6 sm:left-12 bottom-0 w-px bg-white/[0.03] pointer-events-none z-0 hidden sm:block" />
      <div className="fixed top-0 right-6 sm:right-12 bottom-0 w-px bg-white/[0.03] pointer-events-none z-0 hidden sm:block" />

      {/* Top Fixed Navigation */}
      <Navbar 
        onOpenDevMenu={() => setIsDevMenuOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <PhoneSimulator />
        <ProjectsSection />
        <InteractiveCodePlayground />
        <SkillsSection />
        <ExperienceTimeline />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <DevMenuModal 
        isOpen={isDevMenuOpen}
        onClose={() => setIsDevMenuOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
