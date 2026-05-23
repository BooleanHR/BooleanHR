import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AboutProps {
  onOpenModal: (type: string) => void;
}

const AnimatedNumber: React.FC<{ target: number; startTrigger: boolean; suffix?: string }> = ({ target, startTrigger, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let startTime: number | null = null;
    const duration = 1200; // 1.2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * target);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, startTrigger]);

  return <>{count}{suffix}</>;
};

export const About: React.FC<AboutProps> = ({ onOpenModal }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLDivElement>} 
      id="about" 
      className="py-24 md:py-16 bg-canvas"
    >
      <div className="max-w-[1160px] mx-auto px-8 md:px-5">
        <p className={`section-label text-2xs font-semibold tracking-widest text-stone uppercase mb-12 flex items-center gap-3 before:content-[''] before:inline-block before:w-5 before:h-[1px] before:bg-muted reveal ${
          isVisible ? 'visible' : ''
        }`}>
          About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-10 items-start">
          {/* Left Column: Text & CTA */}
          <div className={`reveal transition-all duration-550 ${isVisible ? 'visible' : ''}`}>
            <p className="text-base text-slate leading-relaxed mb-4 text-left">
              채용대행 분야에서 <strong className="text-ink font-semibold">공공기관 및 공기업</strong>을 대상으로
              다양한 채용 프로젝트를 성공적으로 이끌어온 PM입니다.
              채용 시스템 기획부터 서류, 필기, 면접 전형 운영까지
              <strong className="text-ink font-semibold"> End-to-End 실행 경험</strong>을 보유하고 있으며,
              현장의 비효율을 데이터와 시스템으로 개선합니다.
            </p>
            <p className="text-base text-slate leading-relaxed mb-6 text-left">
              Python, SPSS 등 <strong className="text-ink font-semibold">통계 분석 도구</strong>와 Microsoft Excel을 활용한
              <strong className="text-ink font-semibold"> RFP 작성 역량</strong>을 바탕으로, 단순 채용 운영을 넘어
              고객사의 채용 프로세스 전반을 컨설팅합니다.
            </p>
            <div className="text-left">
              <button 
                onClick={() => onOpenModal('cover-letter')}
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-button border border-hairline bg-canvas text-ink hover:border-steel hover:bg-surface transition-all duration-150 cursor-pointer"
                id="btn-cover-letter"
              >
                <span className="text-stone text-[13px]">◎</span>
                자기소개서 전문 읽기
                <span className="text-stone text-[13px] transition-transform duration-150 group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: KPI Cards */}
          <div className={`flex flex-col gap-3 reveal transition-all duration-550 delay-75 ${isVisible ? 'visible' : ''}`}>
            {/* KPI 1 */}
            <div className="bg-canvas border border-hairline rounded-card px-6 py-5 shadow-xs transition-shadow duration-200 hover:shadow-sm text-left">
              <div className="text-4xl font-bold text-ink tracking-tight leading-none flex items-baseline gap-1">
                <AnimatedNumber target={3} startTrigger={isVisible} />
                <span className="text-sm font-normal text-stone">년 3개월+</span>
              </div>
              <div className="text-xs text-stone font-medium mt-1">채용대행 경력</div>
              <div className="h-[2px] bg-hairline rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: isVisible ? '75%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-canvas border border-hairline rounded-card px-6 py-5 shadow-xs transition-shadow duration-200 hover:shadow-sm text-left">
              <div className="text-4xl font-bold text-ink tracking-tight leading-none flex items-baseline gap-1">
                <AnimatedNumber target={10} startTrigger={isVisible} />
                <span className="text-sm font-normal text-stone">건 이상</span>
              </div>
              <div className="text-xs text-stone font-medium mt-1">연간 PM 프로젝트</div>
              <div className="h-[2px] bg-hairline rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: isVisible ? '85%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* KPI 3 (Accent Dark Card) */}
            <div className="bg-ink border border-ink rounded-card px-6 py-5 shadow-xs transition-shadow duration-200 hover:shadow-sm text-left text-white">
              <div className="text-4xl font-bold text-canvas tracking-tight leading-none flex items-baseline gap-1">
                <AnimatedNumber target={100} startTrigger={isVisible} />
                <span className="text-sm font-normal text-white/55">점</span>
              </div>
              <div className="text-xs text-white/55 font-medium mt-1">2024 고객사 CS 만족도</div>
              <div className="h-[2px] bg-white/10 rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full bg-white/60 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: isVisible ? '100%' : '0%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
