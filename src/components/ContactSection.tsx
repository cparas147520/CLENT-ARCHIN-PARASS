import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Smartphone, 
  MapPin, 
  GraduationCap, 
  Clock, 
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'React Native Mobile App (iOS & Android)',
    timeline: 'Within 1-2 Months',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({ particleCount: 30, spread: 50 });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#FF3B3F] font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B3F]" />
              Direct Channel 07
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Initiate Contact
            </h2>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 max-w-2xl">
              Have a new React Native mobile app idea, need a performance overhaul, or looking to hire Clent Archin Paras? Send a direct dispatch below.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Card Column (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121212] p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white">Direct Coordinates</h3>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">
                  Prompt replies typically within 12–24 hours.
                </p>
              </div>

              {/* Direct Email Card with One-Click Copy */}
              <div className="bg-black p-4 border border-[#FF3B3F]/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center text-[#FF3B3F] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 font-bold">University & Business Email</p>
                    <p className="text-xs font-mono font-bold text-white truncate">{PERSONAL_INFO.email}</p>
                  </div>
                </div>

                <button
                  id="contact-copy-email-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-2.5 bg-[#141414] hover:bg-[#FF3B3F] text-white hover:text-black border border-white/10 shrink-0 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Fast Facts */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 p-3.5 bg-black border border-white/10">
                  <MapPin className="w-4 h-4 text-[#FF3B3F] shrink-0" />
                  <span className="text-white/80 uppercase tracking-wider text-[11px] font-medium">{PERSONAL_INFO.location} (UTC+8 / Remote-Ready)</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-black border border-white/10">
                  <GraduationCap className="w-4 h-4 text-[#FF3B3F] shrink-0" />
                  <span className="text-white/80 uppercase tracking-wider text-[11px] font-medium">{PERSONAL_INFO.institution} Computer Studies</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-black border border-white/10">
                  <Clock className="w-4 h-4 text-[#FF3B3F] shrink-0" />
                  <span className="text-white/80 uppercase tracking-wider text-[11px] font-medium">Status: <span className="text-[#FF3B3F] font-black">Open for Contracts & Full-time</span></span>
                </div>
              </div>

              {/* Consultation Scope */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Available Services:</p>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono uppercase tracking-wider text-white/60">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B3F] shrink-0" />
                    <span>Expo / RN App Dev</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B3F] shrink-0" />
                    <span>60FPS Worklet Polish</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B3F] shrink-0" />
                    <span>Native Bridges & JSI</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B3F] shrink-0" />
                    <span>Full-Stack Backends</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] p-6 sm:p-8 border border-white/10 shadow-2xl">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-[#FF3B3F]/20 border border-[#FF3B3F]/50 text-[#FF3B3F] flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">Message Dispatched Successfully!</h3>
                  <p className="text-xs uppercase tracking-wider text-white/70 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Clent Archin Paras has received your inquiry and will follow up with you at <span className="text-[#FF3B3F] font-bold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'React Native Mobile App (iOS & Android)',
                        timeline: 'Within 1-2 Months',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-[10px] uppercase tracking-wider font-bold border border-white/20 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-black border border-white/10 px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF3B3F] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-black border border-white/10 px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF3B3F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                        Project Scope / Category
                      </label>
                      <select
                        id="contact-form-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF3B3F]"
                      >
                        <option value="React Native Mobile App (iOS & Android)">React Native Mobile App (iOS & Android)</option>
                        <option value="Expo SDK Migration & Performance Optimization">Expo SDK Migration & Performance</option>
                        <option value="Custom Native Bridge / TurboModules">Custom Native Bridge / TurboModules</option>
                        <option value="Full-Stack Web & Mobile Architecture">Full-Stack Web & Mobile Architecture</option>
                        <option value="Full-time / Contract Hiring Inquiry">Full-time / Contract Hiring Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                        Estimated Timeline
                      </label>
                      <select
                        id="contact-form-timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF3B3F]"
                      >
                        <option value="Immediate (This Month)">Immediate (This Month)</option>
                        <option value="Within 1-2 Months">Within 1-2 Months</option>
                        <option value="Q3/Q4 Project Planning">Q3/Q4 Project Planning</option>
                        <option value="Flexible / Advisory">Flexible / Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell Clent about your app concept, target platforms, required integrations (e.g. Firebase, Stripe, Maps, Sensors), and goals..."
                      className="w-full bg-black border border-white/10 p-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF3B3F] transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#FF3B3F] hover:bg-[#ff5558] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Clent Archin Paras</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
