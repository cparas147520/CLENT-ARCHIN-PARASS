import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Smartphone, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-12 text-xs text-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-black border border-[#FF3B3F]/40 flex items-center justify-center text-[#FF3B3F] font-mono font-black text-sm">
              CP
            </div>
            <div>
              <p className="font-black uppercase tracking-tight text-white text-base">{PERSONAL_INFO.name}</p>
              <p className="text-[10px] text-[#FF3B3F] font-mono uppercase tracking-widest">React Native & Mobile Systems Architect</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-white/70">
            <a href="#hero" className="hover:text-[#FF3B3F] transition-colors">Home</a>
            <a href="#simulator" className="hover:text-[#FF3B3F] transition-colors">App Simulator</a>
            <a href="#expo" className="hover:text-[#FF3B3F] transition-colors text-[#FF3B3F]">Expo Hub</a>
            <a href="#projects" className="hover:text-[#FF3B3F] transition-colors">Projects</a>
            <a href="#sandbox" className="hover:text-[#FF3B3F] transition-colors">RN Sandbox</a>
            <a href="#skills" className="hover:text-[#FF3B3F] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#FF3B3F] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#FF3B3F] transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            id="btn-scroll-top"
            onClick={scrollToTop}
            className="p-3 bg-black hover:bg-[#FF3B3F] text-white hover:text-black border border-white/10 transition-all flex items-center gap-2"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Top</span>
          </button>
        </div>

        {/* Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[10px] uppercase tracking-wider text-white/40 font-mono">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & React Native mobile principles.
          </p>
          <div className="flex items-center gap-4">
            <span>Affiliation: University of Mindanao</span>
            <span className="text-white/20">•</span>
            <span className="text-[#FF3B3F] font-bold">c.paras.147520.tc@umindanao.edu.ph</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
