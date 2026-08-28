import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  X, 
  Code, 
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Mobile', 'Enterprise', 'Open Source', 'Full-Stack'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#FF3B3F] font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B3F]" />
              Production Index 02
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Featured Mobile Architectures
            </h2>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 max-w-2xl leading-relaxed">
              Engineered by Clent Archin Paras with focus on 60FPS UI performance, offline resiliency, native bridges, and seamless user experiences.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#141414] p-1.5 border border-white/10 overflow-x-auto scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                id={`filter-${category.toLowerCase().replace(' ', '-')}`}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-[#FF3B3F] text-black shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-[#121212] border border-white/10 hover:border-[#FF3B3F] transition-all duration-300 overflow-hidden flex flex-col hover:shadow-2xl"
            >
              {/* Cover Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-black">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-black/90 border border-white/10 text-[9px] uppercase tracking-widest font-mono text-[#FF3B3F] font-bold">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-[#FF3B3F] text-black text-[9px] font-black uppercase tracking-widest flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#FF3B3F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] text-[#FF3B3F] uppercase tracking-wider font-mono mt-1 font-semibold">
                  {project.tagline}
                </p>

                <p className="text-white/60 text-xs mt-3 line-clamp-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-3 gap-2 my-5 pt-4 border-t border-white/10">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-black/60 p-2.5 border border-white/10 text-center">
                      <p className="text-[9px] uppercase tracking-wider text-white/40">{metric.label}</p>
                      <p className="text-xs font-mono font-black text-white mt-0.5">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-black border border-white/10 text-[9px] uppercase tracking-wider font-mono text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 bg-black border border-white/10 text-[9px] uppercase tracking-wider font-mono text-white/40">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                  <button
                    id={`btn-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 bg-white/5 hover:bg-[#FF3B3F] text-white hover:text-black border border-white/10 text-[10px] uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Architecture Deep-Dive</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#simulator"
                    className="p-2.5 bg-[#FF3B3F]/10 hover:bg-[#FF3B3F] text-[#FF3B3F] hover:text-black border border-[#FF3B3F]/30 text-xs font-bold transition-all flex items-center justify-center"
                    title="Test on Simulator"
                  >
                    <Smartphone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#121212] border-2 border-white/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-start justify-between bg-black sticky top-0 z-20">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 bg-[#FF3B3F]/10 border border-[#FF3B3F]/30 text-[#FF3B3F] font-mono text-[10px] uppercase tracking-wider font-bold">
                      {selectedProject.category}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-white/40">ID: {selectedProject.id}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">{selectedProject.title}</h3>
                  <p className="text-xs text-[#FF3B3F] font-mono mt-0.5">{selectedProject.tagline}</p>
                </div>
                <button
                  id="close-project-modal"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/5 hover:bg-[#FF3B3F] text-white hover:text-black border border-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 flex-1 bg-[#121212]">
                {/* Description */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/50 mb-2">Project Overview</h4>
                  <p className="text-sm text-white/80 leading-relaxed bg-black/60 p-4 border border-white/10">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#FF3B3F] mb-3 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" /> Technical Architecture & Performance Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.architectureHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="bg-black/60 p-3 border border-white/10 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FF3B3F] shrink-0 mt-0.5" />
                        <span className="text-xs text-white/80 leading-normal">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Stack & Technologies */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/50 mb-2.5">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-black border border-[#FF3B3F]/30 text-white text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippet If Available */}
                {selectedProject.codeSnippet && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/50 flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-[#FF3B3F]" /> Key Implementation ({selectedProject.codeSnippet.filename})
                      </h4>
                    </div>
                    <div className="bg-black border border-white/10 p-4 font-mono text-xs text-white/90 overflow-x-auto">
                      <pre className="whitespace-pre">{selectedProject.codeSnippet.code}</pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="p-6 bg-black border-t border-white/10 flex items-center justify-between gap-4 sticky bottom-0">
                <a
                  href="#simulator"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-[#FF3B3F] hover:bg-[#ff5558] text-black font-black text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-[#FF3B3F]/20"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Launch in Simulator</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white text-[10px] uppercase tracking-wider font-bold border border-white/10"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
