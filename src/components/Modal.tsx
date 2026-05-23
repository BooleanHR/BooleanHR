import React, { useEffect } from 'react';
import certSocial from '../assets/cert_social.png';
import certExcel from '../assets/cert_excel.png';
import certBadges from '../assets/cert_badges.png';

interface ModalProps {
  isOpen: boolean;
  type: string | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, type, onClose }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen || !type) return null;

  const renderModalContent = () => {
    switch (type) {
      case 'cover-letter':
        return (
          <div className="text-left font-sans">
            <div className="border-b border-hairline pb-5 mb-8">
              <span className="inline-block bg-surface border border-hairline text-steel text-xs font-semibold px-2 py-1 rounded">자기소개서</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight leading-tight text-ink">
                근성으로 실행하고 신뢰로 증명하며,<br />채용의 솔루션을 제공하는 PM
              </h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-mono text-stone text-sm">01</div>
                  <div className="text-xs font-semibold text-stone uppercase tracking-wider">전략적 행동 역량</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-ink mb-3">전략적 타겟팅과 투명한 소통: 신뢰로 이끌어낸 용역비 66% 증액</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  2024년 에너지 공기업 채용 프로젝트 당시, 저는 제안 단계부터 참여하여 타사와의 차별점을 '데이터 기반의 맞춤형 홍보'로 정의했습니다.
                  과업지시서와 시장 리서치를 통해 지원자 주 타겟층이 고령층임을 파악했고, 경쟁사들이 집중하던 디지털 광고 대신 지사 중심의 오프라인 홍보(팜플렛, 현수막)를 역제안하여 수주를 확정 지었습니다.
                </p>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  수행 과정에서는 '고객사의 불안을 해소하는 투명성'을 원칙으로 삼았습니다. 요청받지 않은 산출물이라도 지원자 서류를 시스템적으로 정교하게 정리하여
                  수시로 공유했습니다. 이러한 철저한 리스크 관리와 정성은 고객사의 깊은 신뢰로 이어졌고, 그 결과 1.2억 원의 초기 계약에서 총 <strong className="text-ink font-semibold">2.0억 원 규모 (66% 증액)</strong>로
                  사업을 확대 완수했습니다.
                </p>
                <div className="bg-surface border border-hairline rounded-md p-4 flex items-center justify-between">
                  <span className="text-xs text-stone font-medium">계약 규모 확대 (1.2억 &rarr; 2.0억)</span>
                  <span className="text-lg font-bold text-ink">+66%</span>
                </div>
              </div>

              <div className="border-t border-hairline pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-mono text-stone text-sm">02</div>
                  <div className="text-xs font-semibold text-stone uppercase tracking-wider">위기 대응 역량</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-ink mb-3">집요한 근성과 프로세스 병렬화: 3일의 한계를 돌파한 위기 관리</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  세종시 소재 준정부기관의 연간 채용 프로젝트는 담당자가 세 차례나 바뀌는 극심한 혼선 속에서 진행되었습니다. 특히 최종 합격자 발표 전, 민원 대응을
                  이유로 면접 후 진위 확인 기간을 단 3일로 단축하라는 무리한 요구가 발생했습니다.
                </p>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  저는 인수인계 공백으로 인한 히스토리 부재를 탓하기보다, 스스로 이전 용역사 과거 데이터를 분석하여 업무의 맥락을 복원했습니다. 서류전형 이후
                  선제적으로 증빙서류를 제출받고 현장 제출과 동시에 진위 확인을 진행하는 '병렬 프로세스'로 기한 내 완료했습니다. 이러한 집요함 덕분에 해당 기관으로부터 <strong className="text-ink font-semibold">2년이 지난 지금까지도 재입찰
                  참여 요청</strong>을 받고 있습니다.
                </p>
                <div className="bg-surface border border-hairline rounded-md p-4 flex items-center justify-between">
                  <span className="text-xs text-stone font-medium">진위 확인 기간 단축 (7일 &rarr; 3일)</span>
                  <span className="text-lg font-bold text-ink">&minus;57%</span>
                </div>
              </div>

              <div className="border-t border-hairline pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-mono text-stone text-sm">03</div>
                  <div className="text-xs font-semibold text-stone uppercase tracking-wider">도전적 실행 역량</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-ink mb-3">한정된 예산 및 채용 기준 부재 상황 속 목표 대비 200% 지원율 달성</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  신설 공공기관의 첫 채용 총괄을 맡았을 때, 가장 큰 난관은 예산 부족과 불명확한 평가 기준이었습니다. 각종 채용 플랫폼에 직접 단가 협상을 제안하여
                  홍보 예산을 최적화했고, 유관 협회 및 직능단체에 다이렉트로 컨택하는 발로 뛰는 홍보를 전개했습니다.
                </p>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  특히 신설 기관으로서 가장 민감한 이슈인 '경력 산정'의 공정성을 확보하기 위해, K-dart(전자공시시스템) 기관 코드와 사업자 유형을 연동한
                  객관적 필터링 기준을 설계했습니다. 감사관 입회하에 평가위원 만장일치 선발 기준을 적용, 고객사의 행정적 부담을 완벽히 해소했습니다.
                </p>
                <div className="bg-surface border border-hairline rounded-md p-4 flex items-center justify-between">
                  <span className="text-xs text-stone font-medium">목표 대비 지원자 수 달성</span>
                  <span className="text-lg font-bold text-ink">200%+</span>
                </div>
              </div>

              <div className="border-t border-hairline pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-mono text-stone text-sm">04</div>
                  <div className="text-xs font-semibold text-stone uppercase tracking-wider">HR 솔루셔너</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-ink mb-3">현장의 비효율을 개선하고 실질적 가치를 만드는 PM</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  지난 채용 컨설팅 경력 동안 10개 이상의 프로젝트를 총괄하며 누적 2.0억 원의 기여 순이익(평균 이익률 30% 이상)을 달성했습니다. 저의 가장
                  큰 핵심 경쟁력은 현장에서 빈번하게 발생하는 인적 오류(Human Error)를 방지하고, 수동 업무로 인한 비용 및 시간의 낭비를 시스템적으로 개선하는 역량입니다.
                </p>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  메일머지 활용, 데이터 교차 검증 체계 기획 등 운영의 안정성과 비용 효율화를 최우선으로 삼아왔습니다. 저에게 채용 대행이란 단순 인력 투입이
                  아니라, 고객사의 운영 리스크를 진단하고 전체 프로세스의 비용 구조를 최적화해 수행하는 컨설팅 과정입니다.
                </p>
                <div className="bg-surface border border-hairline rounded-md p-4 flex items-center justify-between">
                  <span className="text-xs text-stone font-medium">누적 기여 순이익 (이익률 30%+)</span>
                  <span className="text-lg font-bold text-ink">2.0억+</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'story-1':
        return (
          <div className="text-left font-sans">
            <div className="border-b border-hairline pb-5 mb-8">
              <div className="flex gap-2 flex-wrap">
                <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">프로젝트 스토리</span>
                <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">2025</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight leading-tight text-ink">
                도전적 실행 역량<br />— 한정된 예산 · 기준 부재 &rarr; 200% 지원율
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">채용 규모</div>
                <div className="text-sm font-semibold text-ink">총 26명 (경력 16명 + 신입 10명)</div>
              </div>
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">주요 성과</div>
                <div className="text-sm font-semibold text-ink">목표 대비 200%+ 지원율 · 공정 선발</div>
              </div>
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">핵심 난관</div>
                <div className="text-sm font-semibold text-ink">예산 부족 · 평가 기준 부재 · 감사관 입회</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-ink mb-2">예산 한계 극복 — 발로 뛰는 홍보 전략</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed">
                  한정된 예산 내에서 경력직을 유치하기 위해 채용 플랫폼 담당자와 직접 단가 협상을 진행(첫 프로모션 활용 등)하고, 유관 기관 및 협회에 다이렉트로
                  연락해 채용 홍보를 전개했습니다. 도출된 내용을 '홍보 결과 보고서'로 별도 작성해 기관 담당자의 내부 상급자 보고와 신속한 의사결정을 지원했습니다.
                </p>
              </div>
              <div className="border-t border-hairline pt-5">
                <h3 className="text-lg font-bold text-ink mb-2">평가 공정성 확보 — K-dart 기반 객관적 기준 설계</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed">
                  K-dart(전자공시시스템) 기관 코드 유형 분류와 경력 회사별 비전·목표 등을 기반으로 선발 기준의 근거를 수립했습니다. 최종적으로 감사 담당자
                  입회하에 평가위원 3인의 의견 일치를 거쳐 선발 근거를 제공하였으며, 결과적으로 내부 재직자와 외부 인력이 편중되지 않고 골고루 선발되어 채용의 공정성을 확보했다는 평가를 받았습니다.
                </p>
              </div>
            </div>
          </div>
        );
      case 'story-2':
        return (
          <div className="text-left font-sans">
            <div className="border-b border-hairline pb-5 mb-8">
              <div className="flex gap-2 flex-wrap">
                <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">프로젝트 스토리</span>
                <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">2025</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight leading-tight text-ink">
                위기 대응 역량<br />— 담당자 교체 3회 · 3일 일정 돌파
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">채용 규모</div>
                <div className="text-sm font-semibold text-ink">총 110명 (정규 77명 · 기간제 33명)</div>
              </div>
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">주요 성과</div>
                <div className="text-sm font-semibold text-ink">전형 기간 7일 &rarr; 3일 단축 (만족도 100점)</div>
              </div>
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">핵심 난관</div>
                <div className="text-sm font-semibold text-ink">담당자 교체 3회 · 민원으로 인한 기한 단축 요구</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-ink mb-2">불가능한 일정을 가능하게 만든 책임감</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed mb-4">
                  촉박한 일정에 난색을 표하거나 변명하기보다는 어떻게든 완수하겠다는 근성으로 접근했습니다. 일정을 단축하기 위해 서류 합격 단계에서 증빙 파일을
                  선제적으로 제출받고, 1주일간의 면접이 진행되는 동안 현장에서 제출하는 서류의 진위 확인을 동시에 수행하는 '병렬 프로세스'를 적용했습니다. 그 결과 기한 내 최종 발표를 무사히 완료했습니다.
                </p>
                <p className="text-slate text-sm md:text-base leading-relaxed">
                  이 과정에서 수작업 진위 확인에 소모되는 물리적 리소스를 직접 체감하였고, 이는 향후 관련 리소스를 절감할 수 있는 채용 솔루션 및 시스템 개선을
                  기획하는 실질적인 계기가 되었습니다.
                </p>
              </div>
            </div>
          </div>
        );
      case 'story-3':
        return (
          <div className="text-left font-sans">
            <div className="border-b border-hairline pb-5 mb-8">
              <div className="flex gap-2 flex-wrap">
                <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">프로젝트 스토리</span>
                <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">2024</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight leading-tight text-ink">
                전략적 행동 역량<br />— 홍보 역제안 및 66% 계약 확대
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">채용 규모</div>
                <div className="text-sm font-semibold text-ink">총 149명 (일반직 133명 · 경영직 16명)</div>
              </div>
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">주요 성과</div>
                <div className="text-sm font-semibold text-ink">1.2억 &rarr; 2.0억 계약 확대 (+66%)</div>
              </div>
              <div className="bg-surface border border-hairline p-4 rounded-lg">
                <div className="text-xs text-stone font-medium mb-1">핵심 전략</div>
                <div className="text-sm font-semibold text-ink">고령층 타겟 오프라인 홍보 · 메일머지 안내</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-ink mb-2">선제적 제안을 통한 수주 확대</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed">
                  1차 일반직 채용 운영을 통해 구축한 신뢰를 바탕으로, 초기 제안요청서상 제외되었던 '필기전형' 위탁 운영의 필요성을 논리적으로 제안해 경영직
                  필기전형 및 추가 수의계약을 성공적으로 유치했습니다.
                </p>
              </div>
              <div className="border-t border-hairline pt-5">
                <h3 className="text-lg font-bold text-ink mb-2">타겟 홍보 및 행정 업무 효율화</h3>
                <p className="text-slate text-sm md:text-base leading-relaxed">
                  고령자 지원 비율이 높은 일반직 직무 특성을 감안해, 전국 단위 홍보 대신 기관과 협의한 10개 핵심 지역에 교차로 신문 및 현수막 등 오프라인
                  홍보를 집중했습니다. 또한 면접대상자 약 200명에게 메일머지를 활용한 맞춤형 서류 안내를 진행하고, 예비합격자를 포함한 진위확인 내역을 엑셀로 제공하여 기관 담당자의 행정 부담을 최소화했습니다.
                </p>
              </div>
            </div>
          </div>
        );
      case 'cs-interview':
        return (
          <div className="text-left font-sans">
            <div className="border-b border-hairline pb-5 mb-6">
              <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">고객사 CS 인터뷰</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight leading-tight text-ink">
                채용 프로젝트 수행 중<br />고객사 CS 평가 인터뷰 기록
              </h2>
              <p className="text-stone text-xs mt-2">※ 기관명은 개인정보 보호를 위해 비공개 처리되었습니다.</p>
            </div>

            <div className="bg-surface border border-hairline rounded-lg p-4 mb-6 flex items-start gap-3">
              <div className="text-ink font-semibold text-lg">◈</div>
              <div className="text-slate text-sm">
                이 문서는 채용 대행 프로젝트 종료 후 진행된 고객사 CS 만족도 평가 인터뷰를 요약한 내용입니다. 2024년 평균 CS 만족도 <strong className="text-ink">100점 만점</strong>을 달성했으며, 아래와 같이 피드백을 성장의 양분으로 삼아 발전하고 있습니다.
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-hairline p-5 rounded-lg">
                <div className="flex justify-between items-center text-xs text-stone mb-2">
                  <span className="font-semibold text-ink">준정부기관 A</span>
                  <span>만족도 100점 · 2024 하반기</span>
                </div>
                <div className="font-bold text-sm text-ink mb-1">Q. 이번 채용 대행 서비스에서 가장 만족스러웠던 부분은?</div>
                <div className="text-slate text-sm leading-relaxed">
                  "담당 PM의 선제적인 커뮤니케이션이 인상적이었습니다. 요청하지 않아도 진행 상황과 리스크를 먼저 공유해주어 내부 보고가 수월했습니다. 특히 진위 확인 일정 단축 요청에도 별다른 불만 없이 해결책을 제시해주어 신뢰가 높아졌습니다."
                </div>
              </div>

              <div className="border border-hairline p-5 rounded-lg">
                <div className="flex justify-between items-center text-xs text-stone mb-2">
                  <span className="font-semibold text-ink">에너지 공기업 B</span>
                  <span>만족도 98점 · 2024 상반기</span>
                </div>
                <div className="font-bold text-sm text-ink mb-1">Q. 재계약 또는 추가 과업을 결정하게 된 이유가 있다면?</div>
                <div className="text-slate text-sm leading-relaxed">
                  "처음 계약 시 예상보다 훨씬 세밀하게 업무를 처리해주셔서 신뢰가 생겼습니다. 특히 홍보 전략을 데이터 기반으로 역제안해 주신 부분이 좋았고, 결과적으로 지원자 수가 목표를 초과해 내부적으로도 좋은 평가를 받았습니다. 추가 과업을 맡기는 것이 당연한 선택이었습니다."
                </div>
              </div>

              <div className="border border-[#eab308]/30 bg-[#fef08a]/5 p-5 rounded-lg">
                <div className="flex justify-between items-center text-xs text-stone mb-2">
                  <span className="font-semibold text-ink">공공기관 C</span>
                  <span className="text-amber-700 font-semibold">만족도 80점 · 2025 상반기</span>
                </div>
                <div className="font-bold text-sm text-ink mb-1">Q. 채용 전형 수행 중 개선 및 보완이 필요하다고 느낀 부분은 무엇인가요?</div>
                <div className="text-slate text-sm leading-relaxed">
                  "업무 자체는 매우 성실하고 신속하게 대응해 주셨습니다. 다만, 단순히 전달받은 과업을 수동적으로 처리하는 데 그쳐 용역사 차원의 적극적인 대안 제시나 전략적 피드백이 다소 아쉬웠습니다. 경험과 연차가 더 많은 시니어 PM이 직접 소통하며 신뢰감과 전문성을 더 깊게 실어주었다면 하는 바램이 있습니다."
                </div>
              </div>

              {/* 정정된 성장 스토리 */}
              <div className="bg-surface border border-hairline p-6 rounded-lg">
                <h3 className="font-bold text-ink text-base mb-4">◈ 피드백을 기반으로 이뤄낸 PM 전문성 혁신</h3>
                <p className="text-slate text-sm mb-4 leading-relaxed">
                  단순 실무 오퍼레이터(Operator)에 머물지 않고, 고객사의 리스크를 선제적으로 진단하고 해결하는 <strong className="text-ink">컨설턴트(Consultant) PM</strong>으로 거듭나기 위해 다음과 같은 체질 개선을 단행했습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-canvas border border-hairline p-4 rounded-lg">
                    <div className="font-mono text-xs text-stone mb-1">01</div>
                    <div className="font-bold text-ink text-sm mb-2">데이터 분석 및 평가 기획 역량</div>
                    <p className="text-stone text-xs leading-relaxed">
                      채용 데이터 분석의 정밀도를 높이기 위해 <strong>ADsP(데이터분석준전문가)</strong> 및 <strong>사회조사분석사 2급</strong> 자격을 기반으로 계량 평가와 데이터 통계 분석의 기틀을 견고히 다졌습니다.
                    </p>
                  </div>
                  <div className="bg-canvas border border-hairline p-4 rounded-lg">
                    <div className="font-mono text-xs text-stone mb-1">02</div>
                    <div className="font-bold text-ink text-sm mb-2">객관적 평가 기준 모델 선제 제안</div>
                    <p className="text-stone text-xs leading-relaxed">
                      서울투자진흥재단 프로젝트 수행 시, K-dart(전자공시) 유형 분류 모델을 연동한 <strong>'객관적 경력 평가 기준'</strong>을 기획·제안하여 감사관의 만장일치 통과 및 공정성을 입증했습니다.
                    </p>
                  </div>
                  <div className="bg-canvas border border-hairline p-4 rounded-lg">
                    <div className="font-mono text-xs text-stone mb-1">03</div>
                    <div className="font-bold text-ink text-sm mb-2">전략적 홍보 역제안 및 66% 증액 수주</div>
                    <p className="text-stone text-xs leading-relaxed">
                      에너지 공기업 채용 시 타겟층(고령층) 특성을 분석하여 오프라인 타겟 홍보를 역제안하고, 필기 전형의 필요성을 논리적으로 제안해 <strong>1.2억&rarr;2.0억 66% 증액 수주</strong>시켰습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'cert-social':
        return (
          <div className="text-center font-sans">
            <div className="border-b border-hairline pb-4 mb-6">
              <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">자격증 증빙</span>
              <h2 className="text-xl md:text-2xl font-bold mt-2 text-ink">사회조사분석사 2급</h2>
            </div>
            <div className="flex flex-col items-center">
              <img src={certSocial} alt="사회조사분석사 2급 자격증 사본" className="max-w-full h-auto max-h-[550px] border border-hairline rounded shadow-md mb-4" />
              <div className="text-left w-full max-w-md bg-surface border border-hairline rounded p-4 text-sm space-y-1">
                <div><span className="text-stone inline-block w-20 font-medium">자격 명칭</span><span className="text-ink font-semibold">사회조사분석사 2급</span></div>
                <div><span className="text-stone inline-block w-20 font-medium">취득 일자</span><span className="text-slate">2022.09.02</span></div>
                <div><span className="text-stone inline-block w-20 font-medium">발급 기관</span><span className="text-slate">한국산업인력공단 (HRDK)</span></div>
              </div>
            </div>
          </div>
        );
      case 'cert-excel-view':
        return (
          <div className="text-center font-sans">
            <div className="border-b border-hairline pb-4 mb-6">
              <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">자격증 증빙</span>
              <h2 className="text-xl md:text-2xl font-bold mt-2 text-ink">컴퓨터활용능력 1급</h2>
            </div>
            <div className="flex flex-col items-center">
              <img src={certExcel} alt="컴퓨터활용능력 1급 자격증 사본" className="max-w-full h-auto max-h-[550px] border border-hairline rounded shadow-md mb-4" />
              <div className="text-left w-full max-w-md bg-surface border border-hairline rounded p-4 text-sm space-y-1">
                <div><span className="text-stone inline-block w-20 font-medium">자격 명칭</span><span className="text-ink font-semibold">컴퓨터활용능력 1급</span></div>
                <div><span className="text-stone inline-block w-20 font-medium">취득 일자</span><span className="text-slate">2023.01.27</span></div>
                <div><span className="text-stone inline-block w-20 font-medium">발급 기관</span><span className="text-slate">대한상공회의소</span></div>
              </div>
            </div>
          </div>
        );
      case 'cert-image-zoom':
        return (
          <div className="text-center font-sans">
            <div className="border-b border-hairline pb-4 mb-6">
              <span className="inline-block bg-surface border border-hairline text-steel text-2xs font-semibold px-2 py-0.5 rounded">자격증 증빙</span>
              <h2 className="text-xl md:text-2xl font-bold mt-2 text-ink">자격증 증빙 사본 통합본</h2>
              <p className="text-stone text-xs mt-1">자격 검정 기관에서 발급한 공식 자격증 사본 모음입니다.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={certBadges} alt="3개 자격증 통합 사본" className="max-w-full h-auto max-h-[500px] border border-hairline rounded shadow-md mb-4" />
              <p className="text-stone text-xs">ADsP · 사회조사분석사 2급 · 컴퓨터활용능력 1급</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-150 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative bg-canvas border border-hairline w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-card shadow-lg p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="document"
      >
        <button 
          className="absolute top-4 right-4 text-stone hover:text-ink text-xl transition-colors font-sans w-8 h-8 flex items-center justify-center rounded-md hover:bg-surface border border-transparent hover:border-hairline"
          onClick={onClose}
          aria-label="닫기"
        >
          ✕
        </button>
        <div className="modal-body mt-2">
          {renderModalContent()}
        </div>
      </div>
    </div>
  );
};
