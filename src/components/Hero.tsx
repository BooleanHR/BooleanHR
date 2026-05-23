import React, { useEffect, useState } from 'react';
import logoYyw from '../assets/logo_yyw_throuth_white.png';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations slightly after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-dark-bg overflow-hidden pt-[60px]"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* Subtle radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
      ></div>

      <div className="relative z-10 text-center px-8 py-20 max-w-[800px] w-full">
        {/* YYW Logo - ESM Import ensures path is resolved by Vite */}
        <img 
          src={logoYyw} 
          alt="YYW 모노그램 로고" 
          className={`w-[clamp(72px,10vw,120px)] h-[clamp(72px,10vw,120px)] object-contain mx-auto mb-10 transition-all duration-900 ease-out ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.88] translate-y-2'
          }`}
        />

        <p className={`font-mono text-xs font-normal tracking-[0.18em] uppercase text-on-dark/35 mb-4 transition-all duration-550 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          Portfolio · 2025
        </p>

        <h1 className={`text-[clamp(52px,8.5vw,84px)] font-bold text-on-dark tracking-[-0.04em] leading-none mb-2 transition-all duration-550 delay-[80ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          유용완
        </h1>

        <p className={`font-mono text-[clamp(11px,1.4vw,14px)] font-light text-on-dark/35 tracking-[0.35em] uppercase mb-8 transition-all duration-550 delay-[160ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          YOO YONGWAN
        </p>

        <div className={`inline-flex items-center gap-2 border border-dark-border px-[18px] py-[9px] rounded-button bg-white/[0.03] mb-10 transition-all duration-550 delay-[240ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="w-[5px] h-[5px] bg-[#6ee7b7] rounded-full animate-pulse-dot"></div>
          <span className="text-sm font-normal text-on-dark/75 tracking-[0.02em]">Recruitment Consulting PM</span>
        </div>

        <p className={`text-[clamp(14px,2vw,18px)] font-light text-on-dark/35 leading-relaxed mb-10 transition-all duration-550 delay-[320ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          "해라, 진심을 다해서"
          <em className="block not-italic font-mono text-[0.88em] text-on-dark/45 mt-1 tracking-[0.04em]">
            GO for it, Go whole heart
          </em>
        </p>

        <div className={`flex gap-2 justify-center flex-wrap transition-all duration-550 delay-[320ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <a href="mailto:yongwan5871@gmail.com" className="btn btn-on-dark bg-on-dark text-ink hover:bg-[#f0f0f0]/88 font-medium py-2.5 px-5 rounded-button transition-all duration-150">
            ✉ 이메일 연락하기
          </a>
          <a href="#projects" className="btn btn-ghost-on-dark border border-dark-border text-on-dark hover:border-dark-border-hover hover:bg-white/[0.04] font-medium py-2.5 px-5 rounded-button transition-all duration-150">
            프로젝트 보기 ↓
          </a>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-dark/35 text-[10px] tracking-[0.12em] uppercase font-mono animate-bounce">
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-white/20"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};
