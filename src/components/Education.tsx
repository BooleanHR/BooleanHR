import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Education: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLDivElement>} 
      id="education" 
      className="py-24 md:py-16 bg-surface"
    >
      <div className="max-w-[1160px] mx-auto px-8 md:px-5">
        <p className={`section-label text-2xs font-semibold tracking-widest text-stone uppercase mb-12 flex items-center gap-3 before:content-[''] before:inline-block before:w-5 before:h-[1px] before:bg-muted reveal ${
          isVisible ? 'visible' : ''
        }`}>
          Education
        </p>

        <div className={`bg-canvas border border-hairline rounded-card p-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 text-left reveal transition-all duration-550 ${
          isVisible ? 'visible' : ''
        }`}>
          {/* School & Period */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xl font-semibold text-ink tracking-tight mb-1">호서대학교</div>
              <div className="font-mono text-xs text-stone mb-4">2016.03 — 2022.02</div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-surface text-charcoal border border-hairline">산업심리학과</span>
                <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#f5f3ff] text-[#6d28d9] border border-[#ddd6fe]">응용통계학과 복수전공</span>
              </div>
            </div>
            
            {/* Military Service Row */}
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-hairline text-xs">
              <span className="font-semibold text-ink bg-surface border border-hairline px-2 py-0.5 rounded">해병대 병장 만기전역</span>
              <span className="font-mono text-stone">2017.01 — 2018.10</span>
            </div>
          </div>

          {/* Subject & GPA stats */}
          <div className="space-y-6">
            {/* GPA visualization */}
            <div>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="text-xs font-semibold text-charcoal">학점</span>
                <div className="font-mono">
                  <span className="text-lg font-bold text-ink">4.06</span>
                  <span className="text-xs text-stone"> / 4.5</span>
                </div>
              </div>
              <div className="h-[6px] bg-hairline rounded-full overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: isVisible ? '90.2%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* Subject tags */}
            <div>
              <div className="text-2xs font-semibold uppercase tracking-wider text-stone mb-2">주요 이수 과목</div>
              <div className="flex gap-1.5 flex-wrap">
                {['직무분석', '역량모델링', '인적자원개발', '조직심리학', '심리통계법', '빅데이터분석', 'SAS/R/Python 실습'].map((subject, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] font-medium px-2 py-0.5 bg-surface text-slate rounded border border-hairline-soft"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
