import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    confetti({ particleCount: 40, spread: 60 });
    // Trigger standard print dialog which allows "Save as PDF"
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-[#121212] border border-white/20 max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col relative"
          >
            {/* Modal Controls Bar */}
            <div className="p-4 bg-black border-b border-white/10 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF3B3F]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                  CLENT_ARCHIN_PARAS_RESUME.pdf
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="resume-btn-print"
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-black border border-white/20 hover:border-white/40 text-white text-[10px] uppercase tracking-wider font-bold transition-all"
                >
                  <Printer className="w-3.5 h-3.5 text-[#FF3B3F]" />
                  <span>Print</span>
                </button>
                <button
                  id="resume-btn-pdf"
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FF3B3F] hover:bg-[#ff5558] text-black text-[10px] uppercase tracking-wider font-black transition-all shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save as PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-white/50 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Printable Resume Document Canvas */}
            <div className="p-6 sm:p-12 bg-black text-white font-sans space-y-8 print:bg-white print:text-black">
              
              {/* Header */}
              <div className="border-b border-white/10 pb-8 print:border-slate-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-black uppercase text-white print:text-black tracking-tight">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-[#FF3B3F] print:text-black font-mono font-bold text-xs uppercase tracking-widest mt-1">
                      Senior React Native & Cross-Platform Mobile Engineer
                    </p>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider space-y-1 text-white/60 print:text-slate-600">
                    <p className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#FF3B3F] print:text-black" />
                      <span>{PERSONAL_INFO.email}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF3B3F] print:text-black" />
                      <span>{PERSONAL_INFO.location}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#FF3B3F] print:text-black" />
                      <span>{PERSONAL_INFO.institution}</span>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-white/70 print:text-slate-700 leading-relaxed mt-4">
                  {PERSONAL_INFO.about}
                </p>
              </div>

              {/* Core Skills Summary */}
              <div>
                <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#FF3B3F] print:text-black mb-3 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" /> Technical Competencies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {SKILL_CATEGORIES.map((cat, idx) => (
                    <div key={idx} className="bg-[#121212] print:bg-slate-100 p-3.5 border border-white/10 print:border-slate-300">
                      <p className="font-black uppercase text-white print:text-black font-mono text-[10px] tracking-wider mb-1">{cat.title}</p>
                      <p className="text-white/50 print:text-slate-700 text-[10px] font-mono uppercase tracking-wider">
                        {cat.skills.map(s => s.name).join(' • ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#FF3B3F] print:text-black mb-4 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" /> Professional Experience
                </h2>
                <div className="space-y-6">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between">
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-tight text-white print:text-black">{exp.role}</h3>
                          <p className="text-[10px] font-mono uppercase tracking-wider text-[#FF3B3F] print:text-black">{exp.company} • {exp.location}</p>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 print:text-slate-600">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 text-xs text-white/70 print:text-slate-800 pl-4 list-disc">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#FF3B3F] print:text-black mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Education & Academic Credentials
                </h2>
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="bg-[#121212] print:bg-slate-100 p-4 border border-white/10 print:border-slate-300 space-y-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xs font-black uppercase text-white print:text-black">{edu.institution}</h3>
                      <span className="text-[10px] font-mono uppercase text-white/50 print:text-slate-600">{edu.period}</span>
                    </div>
                    <p className="text-xs text-[#FF3B3F] print:text-black font-semibold">{edu.degree}</p>
                    {edu.gpaOrHonors && (
                      <p className="text-[10px] font-mono uppercase tracking-wider text-white/70 print:text-black font-bold">{edu.gpaOrHonors}</p>
                    )}
                    <ul className="text-xs text-white/50 print:text-slate-700 pt-2 space-y-0.5 list-disc pl-4">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>

            {/* Modal Bottom Footer */}
            <div className="p-4 bg-black border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">Direct Contact: {PERSONAL_INFO.email}</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
