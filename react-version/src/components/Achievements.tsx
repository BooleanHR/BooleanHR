import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Achievements: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLDivElement>} 
      id="achievements" 
      className="py-24 md:py-16 bg-surface"
    >
      <div className="max-w-[1160px] mx-auto px-8 md:px-5">
        <p className={`section-label text-2xs font-semibold tracking-widest text-stone uppercase mb-12 flex items-center gap-3 before:content-[''] before:inline-block before:w-5 before:h-[1px] before:bg-muted reveal ${
          isVisible ? 'visible' : ''
        }`}>
          Key Achievements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          
          {/* Card 1: 입찰 성공률 — Accent Dark Card */}
          <div className={`bg-ink border border-ink rounded-card p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-left text-white reveal ${
            isVisible ? 'visible' : ''
          }`}>
            <div className="flex-shrink-0 flex justify-center">
              <svg viewBox="0 0 80 80" width="100" height="100">
                <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="7" />
                <circle 
                  className="donut-chart__fill" 
                  cx="40" 
                  cy="40" 
                  r="30" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.75)"
                  stroke-width="7" 
                  stroke-linecap="round" 
                  stroke-dashoffset="47.1"
                  stroke-dasharray={isVisible ? '113 188.5' : '0 188.5'}
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
                <text x="40" y="37" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="13" font-family="Inter" font-weight="700">60%</text>
                <text x="40" y="50" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="7" font-family="Inter">성공률</text>
              </svg>
            </div>
            <div>
              <div className="text-4xl font-bold text-canvas tracking-tight leading-none mb-1">
                60<span className="text-sm font-normal text-white/50">%</span>
              </div>
              <div className="text-sm font-semibold text-white/60 mb-2">채용 사업 입찰 성공률</div>
              <div className="text-xs text-white/40 leading-relaxed">전략적 제안서(RFP) 기획 및 데이터 기반 차별화</div>
            </div>
          </div>

          {/* Card 2: 계약 규모 확대 */}
          <div className={`bg-canvas border border-hairline rounded-card p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-left reveal transition-all duration-550 delay-75 ${
            isVisible ? 'visible' : ''
          }`}>
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center py-1">
              <div className="flex items-end gap-2 h-20 w-[120px]">
                {/* Bar 1 */}
                <div className="flex flex-col items-center flex-1 h-full justify-end">
                  <div 
                    className="w-full bg-[#d4d4d4] rounded-t-sm relative flex items-start justify-center min-h-[4px] transition-all duration-1000 ease-out"
                    style={{ height: isVisible ? '60%' : '0%' }}
                  >
                    <span className="text-[9px] text-slate pt-1 absolute -top-5 font-mono">1.2억</span>
                  </div>
                  <span className="text-[10px] text-stone mt-1">초기</span>
                </div>
                {/* Bar 2 */}
                <div className="flex flex-col items-center flex-1 h-full justify-end">
                  <div 
                    className="w-full bg-[#a3a3a3] rounded-t-sm relative flex items-start justify-center min-h-[4px] transition-all duration-1000 ease-out delay-150"
                    style={{ height: isVisible ? '85%' : '0%' }}
                  >
                    <span className="text-[9px] text-slate pt-1 absolute -top-5 font-mono">1.7억</span>
                  </div>
                  <span className="text-[10px] text-stone mt-1">+1차</span>
                </div>
                {/* Bar 3 */}
                <div className="flex flex-col items-center flex-1 h-full justify-end">
                  <div 
                    className="w-full bg-ink rounded-t-sm relative flex items-start justify-center min-h-[4px] transition-all duration-1000 ease-out delay-300"
                    style={{ height: isVisible ? '100%' : '0%' }}
                  >
                    <span className="text-[9px] text-white pt-1 absolute -top-5 font-mono font-semibold">2.0억</span>
                  </div>
                  <span className="text-[10px] text-stone mt-1">최종</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ink tracking-tight leading-none mb-1">
                +66<span className="text-sm font-normal text-stone">%</span>
              </div>
              <div className="text-sm font-semibold text-charcoal mb-2">단일 프로젝트 계약 규모 확대</div>
              <div className="text-xs text-stone leading-relaxed">1.2억 &rarr; 2.0억 · 선제적 추가 과업 제안으로 달성</div>
            </div>
          </div>

          {/* Card 3: 기간 단축 */}
          <div className={`bg-canvas border border-hairline rounded-card p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-left reveal transition-all duration-550 delay-150 ${
            isVisible ? 'visible' : ''
          }`}>
            <div className="flex-shrink-0 w-full sm:w-[130px] py-1 font-sans">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-steel w-7 flex-shrink-0">기존</span>
                  <div className="flex-1 bg-hairline rounded-sm h-[22px] overflow-hidden">
                    <div 
                      className="bg-muted text-white text-[10px] font-semibold flex items-center px-2 h-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? '100%' : '0%' }}
                    >
                      <span>7일</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-steel w-7 flex-shrink-0">개선</span>
                  <div className="flex-1 bg-hairline rounded-sm h-[22px] overflow-hidden">
                    <div 
                      className="bg-ink text-white text-[10px] font-semibold flex items-center px-2 h-full transition-all duration-1000 ease-out delay-150"
                      style={{ width: isVisible ? '42.8%' : '0%' }}
                    >
                      <span>3일</span>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-stone mt-1">병렬 프로세스 &rarr; <strong>57% 단축</strong></div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ink tracking-tight leading-none mb-1">
                &minus;57<span className="text-sm font-normal text-stone">%</span>
              </div>
              <div className="text-sm font-semibold text-charcoal mb-2">진위 확인 기간 단축</div>
              <div className="text-xs text-stone leading-relaxed">서류전형 선제 수집 + 병렬 검증 프로세스 설계</div>
            </div>
          </div>

          {/* Card 4: 지원율 */}
          <div className={`bg-canvas border border-hairline rounded-card p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-left reveal transition-all duration-550 delay-[225ms] ${
            isVisible ? 'visible' : ''
          }`}>
            <div className="flex-shrink-0 flex flex-col items-center gap-1 w-full sm:w-auto">
              <svg viewBox="0 0 100 60" width="120" height="72">
                <path d="M10 55 A 40 40 0 0 1 90 55" fill="none" stroke="#e4e4e4" stroke-width="8" stroke-linecap="round" />
                <path 
                  className="gauge-fill" 
                  d="M10 55 A 40 40 0 0 1 90 55" 
                  fill="none" 
                  stroke="#1a1a1a" 
                  stroke-width="8" 
                  stroke-linecap="round" 
                  stroke-dashoffset="0"
                  stroke-dasharray={isVisible ? '125.7 125.7' : '0 125.7'}
                />
                <text x="50" y="52" text-anchor="middle" fill="#1a1a1a" font-size="14" font-family="Inter" font-weight="700">200%</text>
              </svg>
              <div className="text-[10px] text-stone">목표 대비 지원율</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ink tracking-tight leading-none mb-1">
                200<span className="text-sm font-normal text-stone">%+</span>
              </div>
              <div className="text-sm font-semibold text-charcoal mb-2">신설 기관 채용 지원율</div>
              <div className="text-xs text-stone leading-relaxed">단가협상·오프라인·협회 다이렉트 컨택 홍보 전략</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
