import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Career: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLDivElement>} 
      id="career" 
      className="py-24 md:py-16 bg-canvas"
    >
      <div className="max-w-[1160px] mx-auto px-8 md:px-5">
        <p className={`section-label text-2xs font-semibold tracking-widest text-stone uppercase mb-12 flex items-center gap-3 before:content-[''] before:inline-block before:w-5 before:h-[1px] before:bg-muted reveal ${
          isVisible ? 'visible' : ''
        }`}>
          Career
        </p>

        <div className="relative pl-8 before:content-[''] before:absolute before:left-[6px] before:top-[10px] before:bottom-0 before:w-[1px] before:bg-hairline text-left">
          
          {/* Timeline Item 1 - Current */}
          <div className={`relative pb-12 reveal ${isVisible ? 'visible' : ''}`}>
            <div className="absolute left-[-30px] top-[9px] w-[9px] h-[9px] rounded-full bg-ink border-2 border-canvas shadow-[0_0_0_3px_#f7f7f7]"></div>
            
            <div className="flex justify-between items-start mb-4 gap-4 flex-wrap">
              <div>
                <div className="font-mono text-xs font-normal text-stone flex items-center gap-2 mb-1">
                  2023.03 — Present
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#e8f5e9] text-[#2e7d32]">재직중</span>
                </div>
                <div className="text-xl font-semibold text-ink tracking-tight mb-1">국내 대형 HR 컨설팅사</div>
                <div className="text-sm text-steel">평가운영실 · 사원 &rarr; 주임 &rarr; 책임 매니저</div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-2xl font-bold text-ink tracking-tight leading-none">3</span>
                <span className="text-xs text-stone ml-0.5">년 3개월+</span>
              </div>
            </div>

            <ul className="flex flex-col gap-1 mb-4">
              <li className="text-sm text-slate leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-1 before:text-muted">
                공공기관/공기업 채용 대행 <span className="font-semibold text-ink">연간 10건+ PM 총괄</span>
              </li>
              <li className="text-sm text-slate leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-1 before:text-muted">
                2024년 고객사 <span className="font-semibold text-ink">CS 만족도 100점 만점</span> 달성
              </li>
              <li className="text-sm text-slate leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-1 before:text-muted">
                입찰 성공률 <span className="font-semibold text-ink">60%</span> 기록 / 연간 기여 순이익 2.0억+
              </li>
              <li className="text-sm text-slate leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-1 before:text-muted">
                채용 기획 &rarr; 서류 &rarr; 필기 &rarr; 면접 End-to-End 실행
              </li>
            </ul>

            <div className="flex gap-6 px-5 py-4 bg-surface rounded-md border border-hairline flex-wrap">
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-bold text-ink tracking-tight">10+</span>
                <span className="text-[11px] text-stone">연간 프로젝트</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-bold text-ink tracking-tight">300+</span>
                <span className="text-[11px] text-stone">총 채용 인원</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-bold text-ink tracking-tight">2억+</span>
                <span className="text-[11px] text-stone">기여 순이익</span>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className={`relative pb-12 reveal transition-all duration-550 delay-75 ${isVisible ? 'visible' : ''}`}>
            <div className="absolute left-[-30px] top-[9px] w-[9px] h-[9px] rounded-full bg-hairline border-2 border-canvas shadow-[0_0_0_1px_#999999]"></div>
            <div className="font-mono text-xs text-stone mb-1">2022.04 — 2022.06</div>
            <div className="text-lg font-semibold text-ink tracking-tight mb-1">공공기관 · 물류팀 사무인턴</div>
            <div className="text-sm text-steel">사무 업무 지원 및 행정 보조</div>
          </div>

          {/* Timeline Item 3 */}
          <div className={`relative pb-12 reveal transition-all duration-550 delay-150 ${isVisible ? 'visible' : ''}`}>
            <div className="absolute left-[-30px] top-[9px] w-[9px] h-[9px] rounded-full bg-hairline border-2 border-canvas shadow-[0_0_0_1px_#999999]"></div>
            <div className="font-mono text-xs text-stone mb-1">2021.06 — 2021.08</div>
            <div className="text-lg font-semibold text-ink tracking-tight mb-1">HR 컨설팅사 · 컨설팅사업부 인턴</div>
            <div className="text-sm text-steel">역량평가 과제 개발 · AC/DC 운영 지원</div>
          </div>

          {/* Timeline Item 4 */}
          <div className={`relative reveal transition-all duration-550 delay-[225ms] ${isVisible ? 'visible' : ''}`}>
            <div className="absolute left-[-30px] top-[9px] w-[9px] h-[9px] rounded-full bg-hairline border-2 border-canvas shadow-[0_0_0_1px_#999999]"></div>
            <div className="font-mono text-xs text-stone mb-1">2020.06 — 2020.08</div>
            <div className="text-lg font-semibold text-ink tracking-tight mb-1">리서치 전문기관 · BU 연구팀 인턴</div>
            <div className="text-sm text-steel">조사결과 보고서 작성 · <span className="font-semibold text-ink">현장실습 우수 공모전 동상</span></div>
          </div>

        </div>
      </div>
    </section>
  );
};
