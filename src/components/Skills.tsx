import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SkillsProps {
  onOpenModal: (type: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onOpenModal }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLDivElement>} 
      id="skills" 
      className="py-24 md:py-16 bg-canvas"
    >
      <div className="max-w-[1160px] mx-auto px-8 md:px-5">
        <p className={`section-label text-2xs font-semibold tracking-widest text-stone uppercase mb-12 flex items-center gap-3 before:content-[''] before:inline-block before:w-5 before:h-[1px] before:bg-muted reveal ${
          isVisible ? 'visible' : ''
        }`}>
          Skills &amp; Tools
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-10 items-center">
          
          {/* Skill Bars */}
          <div className={`space-y-4 text-left reveal transition-all duration-550 ${
            isVisible ? 'visible' : ''
          }`}>
            {/* Excel */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-charcoal">
                <span>Microsoft Excel</span>
                <span className="font-medium text-stone">상 (90%)</span>
              </div>
              <div className="h-[6px] bg-hairline rounded-full overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: isVisible ? '90%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* RFP */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-charcoal">
                <span>RFP 작성 / 제안서 기획</span>
                <span className="font-medium text-stone">상 (85%)</span>
              </div>
              <div className="h-[6px] bg-hairline rounded-full overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out delay-75" 
                  style={{ width: isVisible ? '85%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* SPSS */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-charcoal">
                <span>SPSS (통계 데이터 분석)</span>
                <span className="font-medium text-stone">중 (60%)</span>
              </div>
              <div className="h-[6px] bg-hairline rounded-full overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out delay-150" 
                  style={{ width: isVisible ? '60%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* Python */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-charcoal">
                <span>Python</span>
                <span className="font-medium text-stone">하 (35%)</span>
              </div>
              <div className="h-[6px] bg-hairline rounded-full overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out delay-[225ms]" 
                  style={{ width: isVisible ? '35%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* SAS */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-charcoal">
                <span>SAS</span>
                <span className="font-medium text-stone">하 (30%)</span>
              </div>
              <div className="h-[6px] bg-hairline rounded-full overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out delay-300" 
                  style={{ width: isVisible ? '30%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* R */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-charcoal">
                <span>R / RStudio</span>
                <span className="font-medium text-stone">하 (28%)</span>
              </div>
              <div className="h-[6px] bg-hairline rounded-full overflow-hidden">
                <div 
                  className="h-full bg-ink rounded-full transition-all duration-1000 ease-out delay-[375ms]" 
                  style={{ width: isVisible ? '28%' : '0%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Radar Chart */}
          <div className={`flex flex-col items-center gap-2 reveal transition-all duration-550 delay-100 ${
            isVisible ? 'visible' : ''
          }`}>
            <svg viewBox="0 0 240 240" width="200" height="200">
              <g className="opacity-15">
                <polygon points="120,30 195,75 195,165 120,210 45,165 45,75" fill="none" stroke="#4a4a4a" stroke-width="1" />
                <polygon points="120,55 172,85 172,155 120,185 68,155 68,85" fill="none" stroke="#4a4a4a" stroke-width="1" />
                <polygon points="120,80 149,97 149,143 120,160 91,143 91,97" fill="none" stroke="#4a4a4a" stroke-width="1" />
                <line x1="120" y1="30" x2="120" y2="210" stroke="#c4c4c4" stroke-width="0.8" />
                <line x1="120" y1="120" x2="195" y2="75" stroke="#c4c4c4" stroke-width="0.8" />
                <line x1="120" y1="120" x2="195" y2="165" stroke="#c4c4c4" stroke-width="0.8" />
                <line x1="120" y1="120" x2="120" y2="210" stroke="#c4c4c4" stroke-width="0.8" />
                <line x1="120" y1="120" x2="45" y2="165" stroke="#c4c4c4" stroke-width="0.8" />
                <line x1="120" y1="120" x2="45" y2="75" stroke="#c4c4c4" stroke-width="0.8" />
              </g>
              <polygon 
                className="radar-data fill-ink/[0.06] stroke-ink" 
                points="120,42 181,81 185,153 120,192 57,157 57,81" 
                stroke-width="1.5" 
                style={{ opacity: isVisible ? 1 : 0 }} 
              />
              <text x="120" y="22" text-anchor="middle" fill="#999" font-size="9" font-family="Inter">PM 역량</text>
              <text x="204" y="72" text-anchor="start" fill="#999" font-size="9" font-family="Inter">데이터 분석</text>
              <text x="204" y="170" text-anchor="start" fill="#999" font-size="9" font-family="Inter">기획/제안</text>
              <text x="120" y="226" text-anchor="middle" fill="#999" font-size="9" font-family="Inter">CS 관리</text>
              <text x="36" y="170" text-anchor="end" fill="#999" font-size="9" font-family="Inter">협상</text>
              <text x="36" y="72" text-anchor="end" fill="#999" font-size="9" font-family="Inter">리스크 관리</text>
              
              {/* Radar Dots */}
              {[[120, 42], [181, 81], [185, 153], [120, 192], [57, 157], [57, 81]].map(([cx, cy], i) => (
                <circle 
                  key={i} 
                  cx={cx} 
                  cy={cy} 
                  r="2.5" 
                  className="radar-dot fill-ink" 
                  style={{ opacity: isVisible ? 1 : 0, transitionDelay: `${0.5 + i * 0.1}s` }} 
                />
              ))}
            </svg>
            <div className="text-[11px] text-stone">핵심 역량 분포</div>
          </div>
        </div>

        {/* Certifications (3개로 정합성 일치!) */}
        <div className={`mt-14 text-left reveal transition-all duration-550 delay-100 ${
          isVisible ? 'visible' : ''
        }`}>
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-5">취득 자격증</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Cert 1: ADsP */}
            <div className="bg-canvas border border-hairline rounded-card p-5 flex flex-col gap-2 relative shadow-xs hover:shadow-sm transition-all duration-200">
              <div className="text-stone">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" stroke-width="1.2" />
                  <path d="M9 14h10M9 10h6M9 18h8" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
                </svg>
              </div>
              <div className="text-sm font-bold text-ink tracking-tight mt-1">ADsP</div>
              <div className="text-[11px] text-slate font-medium">데이터분석 준전문가</div>
              <div className="text-[10px] text-stone mt-auto">2022 · 한국데이터산업진흥원</div>
            </div>

            {/* Cert 2: 사회조사분석사 2급 - 모달 트리거 */}
            <div 
              onClick={() => onOpenModal('cert-social')}
              className="bg-canvas border border-hairline rounded-card p-5 flex flex-col gap-2 relative shadow-xs hover:shadow-sm hover:border-steel transition-all duration-200 cursor-pointer group"
              role="button"
              tabIndex={0}
            >
              <div className="text-stone group-hover:text-ink transition-colors">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="9" stroke="currentColor" stroke-width="1.2" />
                  <path d="M10 14l3 3 5-5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="text-sm font-bold text-ink tracking-tight mt-1">사조사 2급</div>
              <div className="text-[11px] text-slate font-medium">사회조사분석사 2급</div>
              <div className="text-[10px] text-stone mt-auto">2022 · 한국산업인력공단</div>
              <div className="text-[10px] text-stone/45 absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity">🔍 보기</div>
            </div>

            {/* Cert 3: 컴활 1급 - 모달 트리거 */}
            <div 
              onClick={() => onOpenModal('cert-excel-view')}
              className="bg-canvas border border-hairline rounded-card p-5 flex flex-col gap-2 relative shadow-xs hover:shadow-sm hover:border-steel transition-all duration-200 cursor-pointer group"
              role="button"
              tabIndex={0}
            >
              <div className="text-stone group-hover:text-ink transition-colors">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <rect x="5" y="8" width="18" height="12" rx="1.5" stroke="currentColor" stroke-width="1.2" />
                  <path d="M9 12h10M9 15h6" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
                </svg>
              </div>
              <div className="text-sm font-bold text-ink tracking-tight mt-1">컴활 1급</div>
              <div className="text-[11px] text-slate font-medium">컴퓨터활용능력 1급</div>
              <div className="text-[10px] text-stone mt-auto">2023 · 대한상공회의소</div>
              <div className="text-[10px] text-stone/45 absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity">🔍 보기</div>
            </div>

            {/* Cert 4: 자격증 증빙 통합본 - 모달 트리거 */}
            <div 
              onClick={() => onOpenModal('cert-image-zoom')}
              className="bg-canvas border border-hairline rounded-card p-5 flex flex-col gap-2 relative shadow-xs hover:shadow-sm hover:border-steel transition-all duration-200 cursor-pointer group"
              role="button"
              tabIndex={0}
            >
              <div className="text-stone group-hover:text-ink transition-colors">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" stroke-width="1.2" />
                  <path d="M10 18l4-8 4 8" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="14" cy="10" r="1" fill="currentColor" />
                </svg>
              </div>
              <div className="text-sm font-bold text-ink tracking-tight mt-1">자격증 증빙</div>
              <div className="text-[11px] text-slate font-medium">3개 자격증 통합 사본</div>
              <div className="text-[10px] text-stone mt-auto">ADsP · 사조사 · 컴활</div>
              <div className="text-[10px] text-stone/45 absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity">🔍 보기</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
