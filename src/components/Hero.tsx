import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Sparkles, 
  Terminal, 
  Copy, 
  Check, 
  ArrowRight, 
  ExternalLink, 
  Zap, 
  ShieldCheck, 
  GraduationCap,
  Download,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const expoStarterCmd = 'npx create-expo-app@latest --template @clent/stack';

  const copyCommand = () => {
    navigator.clipboard.writeText(expoStarterCmd);
    setCopiedCmd(true);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      {/* Subtle Architectural Ambient Accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF3B3F]/5 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-white/[0.02] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Column Editorial Title / Right Column Technical Card Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols): Dramatic Typography & Statement */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-10">
            {/* Signature Artistic Flair Vertical Indicator */}
            <div className="absolute top-3 left-0 w-1.5 h-36 sm:h-48 bg-[#FF3B3F]" />

            {/* University & Status Line */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#e5e5e5]/60 mb-4 font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF3B3F] animate-pulse" />
              <span>Available for Mobile Roles</span>
              <span className="text-white/20">•</span>
              <span className="text-[#FF3B3F]">University of Mindanao</span>
            </motion.div>

            {/* Massive Hero Name Header */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88] text-white"
            >
              <span className="block text-[#FF3B3F]">Clent</span>
              <span className="block text-white">Archin</span>
              <span className="block text-white/90">Paras</span>
            </motion.h1>

            {/* Subtitle / Focus Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#e5e5e5]/60 mt-6 max-w-xl leading-relaxed"
            >
              Creative Technologist & Senior React Native Systems Architect specializing in 60FPS fluid mobile experiences, Expo SDK, and cross-platform native modules.
            </motion.p>

            {/* Technical Stack Micro-Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-2 mt-6"
            >
              {PERSONAL_INFO.quickStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 bg-[#141414] border border-white/10 text-white/80 hover:border-[#FF3B3F]/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <a
                href="#simulator"
                id="hero-cta-simulator"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#FF3B3F] hover:bg-[#ff5255] text-black font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#FF3B3F]/20 transition-all hover:scale-105 active:scale-95"
              >
                <Smartphone className="w-4 h-4" />
                <span>Launch Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                id="hero-cta-projects"
                className="flex items-center gap-2 px-5 py-3.5 bg-[#141414] hover:bg-[#1f1f1f] text-[#e5e5e5] font-bold text-xs uppercase tracking-[0.15em] border border-white/10 hover:border-white/30 transition-all active:scale-95"
              >
                <span>View Works</span>
              </a>

              <button
                id="hero-btn-resume"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3.5 bg-[#141414] hover:bg-[#1f1f1f] text-[#FF3B3F] font-bold text-xs uppercase tracking-[0.15em] border border-[#FF3B3F]/30 hover:border-[#FF3B3F] transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </button>
            </motion.div>

            {/* Terminal Command Quick Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 w-full max-w-lg bg-[#141414] border border-white/10 p-2 pl-4 flex items-center justify-between shadow-2xl"
            >
              <div className="flex items-center gap-2.5 overflow-hidden text-left">
                <Terminal className="w-4 h-4 text-[#FF3B3F] shrink-0" />
                <span className="font-mono text-xs text-white/80 truncate">
                  {expoStarterCmd}
                </span>
              </div>
              <button
                id="hero-copy-cli"
                onClick={copyCommand}
                title="Copy Expo Starter Command"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#222] hover:bg-[#FF3B3F] hover:text-black text-white text-[10px] uppercase tracking-wider font-bold shrink-0 transition-colors ml-2"
              >
                {copiedCmd ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCmd ? 'Copied' : 'Copy'}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Artistic Flair Metric Mosaic */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            
            {/* Top Split Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bg-[#141414] p-6 border border-white/10 relative overflow-hidden group hover:border-[#FF3B3F]/50 transition-all">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF3B3F]/10 -mr-6 -mt-6 rounded-full group-hover:scale-150 transition-transform" />
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3 font-bold">Experience</div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">4+</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-[#FF3B3F] font-bold mt-1">Years RN Mastery</div>
              </div>

              <div className="bg-[#FF3B3F] text-black p-6 flex flex-col justify-between shadow-lg shadow-[#FF3B3F]/20">
                <div className="text-[10px] uppercase tracking-[0.25em] font-black opacity-80">Shipped</div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight my-2">12+</div>
                <div className="text-[10px] uppercase tracking-[0.15em] font-bold">Production Apps</div>
              </div>
            </div>

            {/* Bottom Full-Width Metric Block */}
            <div className="bg-[#141414] p-6 border border-white/10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">Mobile Engineering Standards</span>
                <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-white/5 border border-white/10 text-white/70">60 FPS Worklets</span>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/10">
                <div>
                  <div className="text-xl font-black text-[#FF3B3F]">99.9%</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/50 mt-0.5">Crash-Free</div>
                </div>
                <div>
                  <div className="text-xl font-black text-white">100k+</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/50 mt-0.5">App Downloads</div>
                </div>
                <div>
                  <div className="text-xl font-black text-white">Native</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/50 mt-0.5">JSI / Turbo</div>
                </div>
              </div>
            </div>

            {/* Location & Architecture Line */}
            <div className="flex items-center justify-between px-2 pt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">
              <span>Based in Philippines</span>
              <span className="text-[#FF3B3F]">Architecture of Experience</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
