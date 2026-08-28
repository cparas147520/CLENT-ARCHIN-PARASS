import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#0a0a0a] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#FF3B3F] font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B3F]" />
              Industry Validation 06
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Endorsements & Feedback
            </h2>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 max-w-2xl">
              Feedback on code architecture, cross-platform performance optimization, and communication from engineering leads and product directors.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#121212] p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-[#FF3B3F] transition-all shadow-xl"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-[#FF3B3F]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FF3B3F]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-white/20" />
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-white/80 italic leading-relaxed mb-8 font-serif">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">{testimonial.name}</h4>
                  <p className="text-[10px] text-[#FF3B3F] font-mono uppercase tracking-wider">{testimonial.role}</p>
                  <p className="text-[9px] uppercase tracking-wider text-white/40">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
