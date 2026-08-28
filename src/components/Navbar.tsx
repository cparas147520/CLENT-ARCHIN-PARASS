import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Terminal, 
  FileText, 
  Send, 
  Menu, 
  X, 
  Layers, 
  Sparkles,
  Zap,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenDevMenu: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDevMenu, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Live Simulator', href: '#simulator' },
    { label: 'Projects', href: '#projects' },
    { label: 'RN Sandbox', href: '#sandbox' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          id="nav-brand-logo"
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 bg-[#FF3B3F] text-black font-black flex items-center justify-center text-xs tracking-tighter transition-transform group-hover:scale-105">
            CP
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs uppercase tracking-[0.25em] group-hover:text-[#FF3B3F] transition-colors">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#e5e5e5]/50 font-mono flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B3F] animate-pulse" />
              Mobile Systems • RN
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-[#e5e5e5]/70">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#FF3B3F] transition-colors relative py-1 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* React Native Dev Menu Simulator Button */}
          <button
            id="nav-btn-devmenu"
            onClick={onOpenDevMenu}
            title="Open React Native Dev Menu (Shake Gesture Simulator)"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-[#1f1f1f] text-[#e5e5e5] text-[10px] uppercase tracking-[0.15em] border border-white/10 transition-all hover:border-[#FF3B3F] active:scale-95"
          >
            <Code2 className="w-3.5 h-3.5 text-[#FF3B3F]" />
            <span className="font-mono">DevMenu</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            id="nav-btn-resume"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#141414] hover:bg-[#1f1f1f] text-[#e5e5e5] text-[10px] uppercase tracking-[0.15em] border border-white/10 transition-all hover:border-white/30 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-white/60" />
            <span>CV</span>
          </button>

          {/* Contact Direct CTA */}
          <a
            href="#contact"
            id="nav-btn-contact"
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#FF3B3F] hover:bg-[#ff5255] text-black font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#FF3B3F]/20"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDevMenu}
            className="p-2 bg-[#141414] border border-white/10 text-[#FF3B3F] text-xs"
            title="RN Dev Menu"
          >
            <Code2 className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#141414] border border-white/10 text-white/80 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 border-b border-white/10 p-6 space-y-4 backdrop-blur-xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs uppercase tracking-[0.25em] text-[#e5e5e5]/80 hover:text-[#FF3B3F] hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#141414] text-[#e5e5e5] text-[10px] uppercase tracking-[0.2em] font-bold border border-white/10"
            >
              <FileText className="w-4 h-4 text-white/50" />
              <span>View Full Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FF3B3F] text-black text-[10px] uppercase tracking-[0.2em] font-black"
            >
              <Send className="w-4 h-4" />
              <span>Contact Clent</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
