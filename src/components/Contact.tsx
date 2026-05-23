import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Contact: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLDivElement>} 
      id="contact" 
      className="py-24 md:py-16 bg-dark-bg text-on-dark text-center"
    >
      <div className="max-w-[1160px] mx-auto px-8 md:px-5">
        <p className={`section-label text-2xs font-semibold tracking-widest text-on-dark-muted uppercase mb-12 flex items-center justify-center gap-3 before:content-[''] before:inline-block before:w-5 before:h-[1px] before:bg-white/15 reveal ${
          isVisible ? 'visible' : ''
        }`}>
          Contact
        </p>

        <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-2 text-on-dark reveal transition-all duration-550 ${
          isVisible ? 'visible' : ''
        }`}>
          Let's Connect
        </h2>
        
        <p className={`text-sm text-on-dark-muted mb-12 reveal transition-all duration-550 delay-75 ${
          isVisible ? 'visible' : ''
        }`}>
          궁금한 점이 있으시면 편하게 연락해주세요.
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto reveal transition-all duration-550 delay-150 ${
          isVisible ? 'visible' : ''
        }`}>
          {/* Email */}
          <a 
            href="mailto:yongwan5871@gmail.com" 
            className="bg-dark-surface border border-dark-border rounded-card p-5 flex items-center gap-4 hover:border-dark-border-hover hover:bg-white/[0.02] transition-all duration-200 text-left"
            id="contact-email"
          >
            <span className="text-xl text-on-dark-muted bg-white/5 w-10 h-10 flex items-center justify-center rounded-md">&nbsp;✉&nbsp;</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase font-semibold text-on-dark-muted tracking-wider">Email</span>
              <span className="text-sm font-semibold text-on-dark leading-tight break-all">yongwan5871@gmail.com</span>
            </div>
          </a>

          {/* Kaggle */}
          <a 
            href="https://www.kaggle.com/humanalystyy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-dark-surface border border-dark-border rounded-card p-5 flex items-center gap-4 hover:border-dark-border-hover hover:bg-white/[0.02] transition-all duration-200 text-left"
            id="contact-kaggle"
          >
            <span className="text-xl text-on-dark-muted bg-white/5 w-10 h-10 flex items-center justify-center rounded-md">&nbsp;📊&nbsp;</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase font-semibold text-on-dark-muted tracking-wider">Kaggle</span>
              <span className="text-sm font-semibold text-on-dark leading-tight">humanalystyy</span>
            </div>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/humanalystyy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-dark-surface border border-dark-border rounded-card p-5 flex items-center gap-4 hover:border-dark-border-hover hover:bg-white/[0.02] transition-all duration-200 text-left"
            id="contact-github"
          >
            <span className="text-xl text-on-dark-muted bg-white/5 w-10 h-10 flex items-center justify-center rounded-md">&nbsp;⬡&nbsp;</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase font-semibold text-on-dark-muted tracking-wider">GitHub</span>
              <span className="text-sm font-semibold text-on-dark leading-tight">github.com/humanalystyy</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
