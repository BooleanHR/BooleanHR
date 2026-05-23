import React, { useState, useEffect } from 'react';
import logoYyw from '../assets/logo_yyw.png';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] bg-white/95 backdrop-blur-md border-b transition-all duration-200 ${
          isScrolled ? 'border-hairline shadow-xs' : 'border-transparent'
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-8 md:px-8 h-full flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2" onClick={closeMenu}>
            <img src={logoYyw} alt="YYW 모노그램" className="w-[30px] h-[30px] object-contain grayscale opacity-85" />
            <span className="text-sm font-semibold text-ink tracking-tight">유용완</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#about" className="text-sm font-medium text-steel px-3 py-1 rounded-md hover:text-ink hover:bg-surface transition-colors duration-150">About</a>
            <a href="#achievements" className="text-sm font-medium text-steel px-3 py-1 rounded-md hover:text-ink hover:bg-surface transition-colors duration-150">성과</a>
            <a href="#career" className="text-sm font-medium text-steel px-3 py-1 rounded-md hover:text-ink hover:bg-surface transition-colors duration-150">Career</a>
            <a href="#projects" className="text-sm font-medium text-steel px-3 py-1 rounded-md hover:text-ink hover:bg-surface transition-colors duration-150">Projects</a>
            <a href="#skills" className="text-sm font-medium text-steel px-3 py-1 rounded-md hover:text-ink hover:bg-surface transition-colors duration-150">Skills</a>
            <a href="#education" className="text-sm font-medium text-steel px-3 py-1 rounded-md hover:text-ink hover:bg-surface transition-colors duration-150">Education</a>
            <a href="mailto:yongwan5871@gmail.com" className="text-sm font-medium text-white bg-ink px-4 py-1.5 rounded-button ml-2 hover:bg-charcoal transition-colors duration-150">연락하기</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex flex-col gap-[5px] p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 토글"
          >
            <span className={`w-5 h-[1.5px] bg-ink rounded-sm transition-transform duration-200 ${isMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
            <span className={`w-5 h-[1.5px] bg-ink rounded-sm transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-[1.5px] bg-ink rounded-sm transition-transform duration-200 ${isMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div 
          className={`md:hidden fixed top-[60px] left-0 right-0 bg-white border-b border-hairline px-5 py-3 flex flex-col gap-0.5 z-40 shadow-md transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
          }`}
        >
          <a href="#about" className="text-base text-steel hover:text-ink p-3 hover:bg-surface rounded-md transition-colors" onClick={closeMenu}>About</a>
          <a href="#achievements" className="text-base text-steel hover:text-ink p-3 hover:bg-surface rounded-md transition-colors" onClick={closeMenu}>Key Achievements</a>
          <a href="#career" className="text-base text-steel hover:text-ink p-3 hover:bg-surface rounded-md transition-colors" onClick={closeMenu}>Career</a>
          <a href="#projects" className="text-base text-steel hover:text-ink p-3 hover:bg-surface rounded-md transition-colors" onClick={closeMenu}>Key Projects</a>
          <a href="#skills" className="text-base text-steel hover:text-ink p-3 hover:bg-surface rounded-md transition-colors" onClick={closeMenu}>Skills</a>
          <a href="#education" className="text-base text-steel hover:text-ink p-3 hover:bg-surface rounded-md transition-colors" onClick={closeMenu}>Education</a>
          <a href="mailto:yongwan5871@gmail.com" className="text-base text-steel hover:text-ink p-3 hover:bg-surface rounded-md transition-colors" onClick={closeMenu}>연락하기 &rarr;</a>
        </div>
      </nav>
    </>
  );
};
