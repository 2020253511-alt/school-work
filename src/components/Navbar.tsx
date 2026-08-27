import React, { useState, useEffect } from 'react';
import { Anchor, Menu, X, BookOpen, Layers, Users, Building, Cpu, Award, Mail, ExternalLink, HelpCircle, Sun, Moon } from 'lucide-react';
import { projectMeta } from '../data/projectData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about-us', 'organization', 'information-system', 'contact-us'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'about-us', label: 'About Us', icon: Users },
    { id: 'organization', label: 'Organization', icon: Building },
    { id: 'information-system', label: 'Information System', icon: Cpu },
    { id: 'contact-us', label: 'Contact Us', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-950/85 backdrop-blur-xl shadow-2xl border-b border-zinc-800/80 py-3' 
          : 'bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800/60 py-4'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo mark */}
          <div 
            id="brand-logo-container"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-indigo-400/40 group-hover:scale-105 transition-transform">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black tracking-tight text-white text-base sm:text-lg font-sans">
                  {projectMeta.organizationShort} <span className="text-indigo-400 font-semibold">MIS</span>
                </span>
                <div className="bg-zinc-900 border border-zinc-800 rounded-full px-2.5 py-0.5 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_6px_rgba(16,185,129,0.8)] animate-pulse" />
                  <span className="text-[9px] font-bold font-mono text-zinc-300 uppercase tracking-wider">Active</span>
                </div>
              </div>
              <span className="text-[11px] text-zinc-500 font-mono tracking-tight line-clamp-1">
                {projectMeta.institutionShort} • {projectMeta.courseCode} ({projectMeta.courseYear})
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-zinc-900/60 border border-zinc-800/80 p-1.5 rounded-2xl backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs xl:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)] font-semibold'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Tools & Helper Button */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle Button (White / Dark) */}
            <button
              id="btn-toggle-theme"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer shadow-sm"
              title={isDark ? "Switch to White / Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">White Theme</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">Dark Theme</span>
                </>
              )}
            </button>

            <button
              id="btn-open-student-guide"
              onClick={onOpenGuide}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold bg-zinc-900 hover:bg-zinc-850 text-amber-400 border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-[0_0_10px_rgba(245,158,11,0.1)] cursor-pointer group"
              title="View student editing, deployment and Google Sites embed instructions"
            >
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Embed & Edit</span>
            </button>
          </div>

          {/* Mobile Menu Button & Quick Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="btn-toggle-theme-mobile"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-800"
              title={isDark ? "Switch to White / Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>
            <button
              id="btn-open-student-guide-mobile"
              onClick={onOpenGuide}
              className="p-2 rounded-xl bg-zinc-900 text-amber-400 border border-zinc-800"
              title="Guide"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-5 space-y-1.5 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-3 py-1">
            Navigation Menu
          </div>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-zinc-800 mt-2 space-y-2">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-200 border border-zinc-800"
            >
              <div className="flex items-center gap-2">
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
                <span>Active Mode: {isDark ? 'Dark Theme' : 'White Theme'}</span>
              </div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-800 text-indigo-400">
                Switch to {isDark ? 'White' : 'Dark'}
              </span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Google Sites & Editing Guide</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
