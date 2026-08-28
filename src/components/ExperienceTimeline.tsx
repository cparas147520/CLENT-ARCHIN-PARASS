import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { EXPERIENCES, EDUCATION_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#FF3B3F] font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B3F]" />
              Career Trajectory 05
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Experience & Education
            </h2>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 max-w-2xl">
              Proven track record of engineering scalable cross-platform mobile solutions from academic roots at University of Mindanao to senior engineering leadership.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Work Experience Column (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black border border-[#FF3B3F]/40 flex items-center justify-center text-[#FF3B3F]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white">Professional Engineering Roles</h3>
            </div>

            <div className="relative border-l-2 border-white/10 ml-4 pl-6 space-y-10">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 border-2 transition-all ${
                    exp.current
                      ? 'bg-[#FF3B3F] border-white ring-2 ring-[#FF3B3F]/40'
                      : 'bg-black border-white/40 group-hover:border-[#FF3B3F]'
                  }`} />

                  {/* Card Body */}
                  <div className="bg-[#121212] p-6 border border-white/10 hover:border-[#FF3B3F] transition-all shadow-xl">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-black uppercase text-white group-hover:text-[#FF3B3F] transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-xs font-bold text-[#FF3B3F] font-mono uppercase tracking-wider">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-white/60 bg-black px-2.5 py-1 border border-white/10">
                        <Calendar className="w-3 h-3 text-[#FF3B3F]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-white/40 mb-4">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span className="text-white/60 font-semibold">{exp.type}</span>
                    </div>

                    {/* Description bullet points */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-xs text-white/70 flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-[#FF3B3F] shrink-0 mt-1.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Achievements */}
                    {exp.achievements.length > 0 && (
                      <div className="bg-black/60 p-3.5 border border-white/10 mb-4 space-y-1.5">
                        <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#FF3B3F] flex items-center gap-1">
                          <Award className="w-3 h-3" /> Key Impact
                        </p>
                        {exp.achievements.map((ach, aIdx) => (
                          <p key={aIdx} className="text-xs text-white/80 leading-tight">
                            • {ach}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-black border border-white/10 text-[9px] font-mono uppercase tracking-wider text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Academic Honors Column (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black border border-[#FF3B3F]/40 flex items-center justify-center text-[#FF3B3F]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white">Academic Background</h3>
            </div>

            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#121212] p-6 border border-white/10 hover:border-[#FF3B3F] transition-all shadow-xl"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-[#FF3B3F]/10 border border-[#FF3B3F]/30 text-[#FF3B3F] font-mono text-[10px] uppercase tracking-wider font-bold">
                    University of Mindanao
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">{edu.period}</span>
                </div>

                <h4 className="text-lg font-black uppercase tracking-tight text-white mt-2 leading-snug">
                  {edu.degree}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-white/50 mt-1 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#FF3B3F]" />
                  <span>{edu.location}</span>
                </div>

                {edu.gpaOrHonors && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider font-bold">
                    <Award className="w-3.5 h-3.5 text-[#FF3B3F]" />
                    <span>{edu.gpaOrHonors}</span>
                  </div>
                )}

                <div className="space-y-2 border-t border-white/10 pt-4">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 font-bold">Specialized Coursework & Research</p>
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B3F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* University Credentials Card */}
            <div className="bg-[#121212] p-6 border-2 border-white/10 hover:border-[#FF3B3F] transition-colors shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-black border border-[#FF3B3F]/30 flex items-center justify-center text-[#FF3B3F]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">Verified University Email</h4>
                  <p className="text-[11px] font-mono text-[#FF3B3F]">c.paras.147520.tc@umindanao.edu.ph</p>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Direct academic & professional email affiliated with the University of Mindanao. Feel free to send official correspondence, RFP proposals, or engineering job inquiries.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
