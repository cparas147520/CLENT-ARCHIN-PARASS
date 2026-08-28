import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Smartphone, 
  Database, 
  Palette, 
  Cloud, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Terminal
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-[#FF3B3F]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#FF3B3F]" />;
      case 'Palette': return <Palette className="w-4 h-4 text-[#FF3B3F]" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-[#FF3B3F]" />;
      default: return <Cpu className="w-4 h-4 text-[#FF3B3F]" />;
    }
  };

  const activeCategory = SKILL_CATEGORIES[selectedCategoryIdx];

  return (
    <section id="skills" className="py-24 relative bg-[#0a0a0a] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#FF3B3F] font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B3F]" />
              Engineering Matrix 04
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Technical Capabilities
            </h2>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 max-w-2xl">
              A comprehensive matrix of Clent Archin Paras's software engineering strengths across cross-platform mobile frameworks, native modules, state management, and cloud infrastructures.
            </p>
          </div>
        </div>

        {/* Category Selection Tabs */}
        <div className="flex items-center justify-start gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              id={`skill-category-${idx}`}
              onClick={() => setSelectedCategoryIdx(idx)}
              className={`flex items-center gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap border ${
                selectedCategoryIdx === idx
                  ? 'bg-[#FF3B3F] border-[#FF3B3F] text-black shadow-lg'
                  : 'bg-[#141414] border-white/10 text-white/50 hover:text-white hover:border-white/30'
              }`}
            >
              {getIcon(cat.icon)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-[#121212] p-6 border transition-all hover:border-[#FF3B3F] flex flex-col justify-between ${
                skill.highlight
                  ? 'border-[#FF3B3F]/40 shadow-md shadow-[#FF3B3F]/5'
                  : 'border-white/10'
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black uppercase text-white tracking-tight">{skill.name}</h3>
                    {skill.highlight && (
                      <span className="px-1.5 py-0.5 bg-[#FF3B3F]/20 text-[#FF3B3F] text-[9px] font-mono font-bold uppercase tracking-wider">
                        CORE
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#FF3B3F] uppercase tracking-wider">{skill.experience}</span>
                </div>

                <p className="text-xs text-white/60 leading-relaxed mt-2 mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
                  <span>Efficiency Vector</span>
                  <span className="text-[#FF3B3F] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-black overflow-hidden border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                    className="h-full bg-[#FF3B3F]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: Architecture Guarantee */}
        <div className="mt-14 p-6 sm:p-8 bg-[#121212] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black border border-[#FF3B3F]/40 flex items-center justify-center text-[#FF3B3F] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white">Zero-Compromise Mobile Performance Guarantee</h4>
              <p className="text-xs text-white/50 uppercase tracking-wide mt-1">Strict adherence to React Native worklet rules, minimal JS thread locks, FlashList virtualization, and battery-friendly pipelines.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#FF3B3F] hover:bg-[#ff5558] text-black font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all shadow-md active:scale-95 shrink-0"
          >
            Consult with Clent
          </a>
        </div>

      </div>
    </section>
  );
};
