import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ProjectsProps {
  onOpenModal: (type: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLDivElement>} 
      id="projects" 
      className="py-24 md:py-16 bg-dark-bg text-on-dark"
    >
      <div className="max-w-[1160px] mx-auto px-8 md:px-5">
        <p className={`section-label text-2xs font-semibold tracking-widest text-on-dark-muted uppercase mb-12 flex items-center gap-3 before:content-[''] before:inline-block before:w-5 before:h-[1px] before:bg-white/15 reveal ${
          isVisible ? 'visible' : ''
        }`}>
          Key Projects
        </p>

        {/* Project Totals */}
        <div className={`flex gap-10 pb-10 border-b border-dark-border flex-wrap mb-10 text-left reveal transition-all duration-550 ${
          isVisible ? 'visible' : ''
        }`}>
          <div className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-bold text-on-dark tracking-tight">5+</span>
            <span className="text-xs text-on-dark-muted">주요 PM 프로젝트</span>
          </div>
          <div className="hidden sm:block w-[1px] bg-dark-border h-12 self-center"></div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-bold text-on-dark tracking-tight">300+</span>
            <span className="text-xs text-on-dark-muted">총 채용 인원 관리</span>
          </div>
          <div className="hidden sm:block w-[1px] bg-dark-border h-12 self-center"></div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-bold text-on-dark tracking-tight">2.0억</span>
            <span className="text-xs text-on-dark-muted">누적 계약 기여</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Project 1 */}
          <div className={`bg-dark-surface border border-dark-border rounded-card p-6 flex flex-col gap-6 text-left reveal transition-all duration-550 ${
            isVisible ? 'visible' : ''
          }`}>
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                <span className="font-semibold bg-white/10 px-2 py-0.5 rounded text-on-dark">PM</span>
                <span className="font-mono text-on-dark-muted">2025</span>
                <span className="text-on-dark-muted">신설 공공기관 · 첫 정규채용</span>
              </div>
              <button 
                onClick={() => onOpenModal('story-1')}
                className="text-xs font-medium text-on-dark hover:text-white/80 transition-colors flex items-center gap-1 cursor-pointer"
                id="btn-story-1"
              >
                자세히 보기 &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2 border-y border-dark-border py-4">
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-on-dark">26</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">총 채용인원</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-on-dark">2</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">채용 유형<br />(경력·신입)</span>
              </div>
              <div className="flex flex-col text-[#6ee7b7]">
                <span className="text-lg md:text-xl font-bold">200%+</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">목표 대비<br />지원율</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '100%' : '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] mt-1.5">
                  <span className="text-on-dark-muted">지원율 달성</span>
                  <span className="text-on-dark font-medium">200%+</span>
                </div>
              </div>
              <div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white/40 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '100%' : '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] mt-1.5">
                  <span className="text-on-dark-muted">평가 공정성</span>
                  <span className="text-on-dark font-medium">감사관 입회 만장일치</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-on-dark-muted leading-relaxed mt-auto pt-2 border-t border-white/[0.04]">
              예산 한계 극복 · K-dart 기반 객관적 경력 산정 기준 설계 · 한정 예산 내 단가협상·협회 컨택
            </div>
          </div>

          {/* Project 2 */}
          <div className={`bg-dark-surface border border-dark-border rounded-card p-6 flex flex-col gap-6 text-left reveal transition-all duration-550 delay-75 ${
            isVisible ? 'visible' : ''
          }`}>
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                <span className="font-semibold bg-white/10 px-2 py-0.5 rounded text-on-dark">PM</span>
                <span className="font-mono text-on-dark-muted">2025</span>
                <span className="text-on-dark-muted">준정부기관 · 대규모 정기채용</span>
              </div>
              <button 
                onClick={() => onOpenModal('story-2')}
                className="text-xs font-medium text-on-dark hover:text-white/80 transition-colors flex items-center gap-1 cursor-pointer"
                id="btn-story-2"
              >
                자세히 보기 &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2 border-y border-dark-border py-4">
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-on-dark">110</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">총 채용인원</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-on-dark">11</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">직종 수<br />(정규·기간제)</span>
              </div>
              <div className="flex flex-col text-[#6ee7b7]">
                <span className="text-lg md:text-xl font-bold">100점</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">기관<br />만족도</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '43%' : '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] mt-1.5">
                  <span className="text-on-dark-muted">전형 기간</span>
                  <span className="text-on-dark font-medium">7일 &rarr; 3일 (&minus;57%)</span>
                </div>
              </div>
              <div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '100%' : '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] mt-1.5">
                  <span className="text-on-dark-muted">기관 만족도</span>
                  <span className="text-on-dark font-medium">100점 만점</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-on-dark-muted leading-relaxed mt-auto pt-2 border-t border-white/[0.04]">
              담당자 교체 3회 위기 극복 · 병렬 프로세스 설계로 불가능한 일정 돌파 · 차년도 재입찰 요청
            </div>
          </div>

          {/* Project 3 */}
          <div className={`bg-dark-surface border border-dark-border rounded-card p-6 flex flex-col gap-6 text-left reveal transition-all duration-550 delay-150 ${
            isVisible ? 'visible' : ''
          }`}>
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                <span className="font-semibold bg-white/10 px-2 py-0.5 rounded text-on-dark">PM</span>
                <span className="font-mono text-on-dark-muted">2024</span>
                <span className="text-on-dark-muted">에너지 공기업 · 연간 반복채용</span>
              </div>
              <button 
                onClick={() => onOpenModal('story-3')}
                className="text-xs font-medium text-on-dark hover:text-white/80 transition-colors flex items-center gap-1 cursor-pointer"
                id="btn-story-3"
              >
                자세히 보기 &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2 border-y border-dark-border py-4">
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-on-dark">149</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">총 채용인원</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-on-dark">11</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">직종 수<br />(일반·경영직)</span>
              </div>
              <div className="flex flex-col text-[#6ee7b7]">
                <span className="text-lg md:text-xl font-bold">+66%</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">계약 규모<br />확대</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white/50 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '60%' : '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] mt-1.5">
                  <span className="text-on-dark-muted">초기 계약</span>
                  <span className="text-on-dark font-medium">1.2억</span>
                </div>
              </div>
              <div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '100%' : '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] mt-1.5">
                  <span className="text-on-dark-muted">최종 계약</span>
                  <span className="text-on-dark font-medium">2.0억 (+66%)</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-on-dark-muted leading-relaxed mt-auto pt-2 border-t border-white/[0.04]">
              타겟 오프라인 홍보 역제안 · 4개 지역 순환 면접 현장 총괄 · 필기전형 추가 수의계약 수주
            </div>
          </div>

          {/* Project 4 */}
          <div className={`bg-dark-surface border border-dark-border rounded-card p-6 flex flex-col gap-6 text-left reveal transition-all duration-550 delay-[225ms] ${
            isVisible ? 'visible' : ''
          }`}>
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                <span className="font-semibold bg-white/10 px-2 py-0.5 rounded text-on-dark">PM</span>
                <span className="font-mono text-on-dark-muted">2024</span>
                <span className="text-on-dark-muted">준정부기관 · 하반기 정기채용</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 border-y border-dark-border py-4">
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-on-dark">73</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">총 채용인원</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-on-dark">11</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">직종 수<br />(정규·기간제)</span>
              </div>
              <div className="flex flex-col text-[#6ee7b7]">
                <span className="text-lg md:text-xl font-bold">2건</span>
                <span className="text-[10px] text-on-dark-muted leading-tight">동시 과업<br />병행 완수</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '85%' : '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] mt-1.5">
                  <span className="text-on-dark-muted">동시 과업 수행</span>
                  <span className="text-on-dark font-medium">타 PM 과업 병행</span>
                </div>
              </div>
              <div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white/50 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '100%' : '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] mt-1.5">
                  <span className="text-on-dark-muted">평가 척도 정립</span>
                  <span className="text-on-dark font-medium">기준 체계 완성</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-on-dark-muted leading-relaxed mt-auto pt-2 border-t border-white/[0.04]">
              과거 민원 데이터 분석 &rarr; 평가 기준 체계 수립 · 화상면접 오류 선제 정정 대응
            </div>
          </div>

        </div>

        {/* CS Interview Section */}
        <div className={`mt-10 bg-dark-surface border border-dark-border rounded-card p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left reveal transition-all duration-550 delay-150 ${
          isVisible ? 'visible' : ''
        }`}>
          <div>
            <div className="text-lg font-bold text-on-dark mb-1">고객사 CS 인터뷰 내용</div>
            <div className="text-xs text-on-dark-muted leading-relaxed">채용 프로젝트 수행 중 진행된 고객사 CS 평가 인터뷰 기록을 확인할 수 있습니다.</div>
          </div>
          <button 
            onClick={() => onOpenModal('cs-interview')}
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-button border border-dark-border bg-transparent text-on-dark hover:border-dark-border-hover hover:bg-white/[0.04] transition-all duration-150 cursor-pointer flex-shrink-0"
            id="btn-cs-interview"
          >
            <span className="text-on-dark-muted text-[13px]">◎</span>
            CS 인터뷰 내용 보기
            <span className="text-on-dark-muted text-[13px]">&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};
