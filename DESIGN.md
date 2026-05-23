# YYW Portfolio Design Specification (DESIGN.md)

본 문서는 유용완 채용대행 PM 포트폴리오의 **디자인 시스템 및 스타일 명세서**입니다. 프로젝트의 단일 진실 공급원(Source of Truth)으로서 일관된 브랜드 정체성을 유지하고, React 및 Tailwind CSS v4 프레임워크 환경에서의 구현 표준을 정의합니다.

---

## 1. 디자인 철학 및 방향성

포트폴리오의 디자인은 **"집요함, 신뢰성, 정밀함"**이라는 유용완 PM의 핵심 정체성을 시각적으로 반영합니다. 불필요한 장식과 다채로운 색상을 배제하고, Notion의 정돈된 레이아웃 시스템과 YYW 모노그램의 단단하고 기하학적인 그레이스케일 아이덴티티를 조화롭게 융합하였습니다.

- **절제된 미학 (Grayscale First)**: 배경과 텍스트, 경계선 등은 그레이스케일(Grayscale)을 기본으로 설계하여 채용 대행 PM의 객관성과 신뢰성을 전달합니다.
- **단일 강조색 (Minimal Accent)**: 화려한 파스텔 톤 대신 깊이감 있는 **Ink/Charcoal (#1a1a1a)** 색상을 단 하나의 강조색으로 삼아, 핵심 성과와 강조하고 싶은 컴포넌트에 한해서만 적용합니다.
- **Notion 레이아웃의 차용**: 카드 디자인의 반경(12px), 선 두께(1px Hairline), 컴포넌트 여백은 Notion 특유의 정갈하고 실용적인 스타일을 계승합니다.

---

## 2. 디자인 토큰 및 Tailwind CSS v4 설정

본 프로젝트는 **Tailwind CSS v4**를 적용하여, 기존 CSS 변수를 유틸리티 클래스로 완전히 이식하였습니다. 설정 사양은 `src/index.css`에 직접 `@theme` 지시문을 사용하여 확장 정의되었습니다.

### A. 색상 토큰 (Color Tokens)

| 토큰명 (Tailwind Class) | 값 (HEX) | 사용처 | 비고 |
| :--- | :--- | :--- | :--- |
| `bg-ink`, `text-ink` | `#1a1a1a` | 기본 텍스트 색상, 주요 강조 버튼, 강조 카드 배경 | 주 강조색 |
| `text-ink-deep` | `#0d0d0d` | 극도로 어두운 텍스트 및 로고 필터 | - |
| `bg-charcoal`, `text-charcoal` | `#2d2d2d` | 서브 강조 버튼 및 마우스 호버 상태 색상 | - |
| `text-slate` | `#4a4a4a` | 본문 텍스트, 중간 명도의 UI 요소 | - |
| `text-steel` | `#6b6b6b` | 설명 문구, 라벨 텍스트 | - |
| `text-stone` | `#999999` | 흐린 텍스트, 메타데이터, 부차적 장식 | - |
| `bg-muted` | `#c4c4c4` | 스크롤바 썸, 비활성화된 테두리 | - |
| `border-hairline` | `#e4e4e4` | 카드, 섹션 구분선 등의 기본 1px 경계선 | Notion Style |
| `border-hairline-soft`| `#efefef` | 매우 미세한 레이아웃 경계선 | - |
| `bg-surface` | `#f7f7f7` | 섹션 배경(Career), 미니 스태츠 박스 배경 | - |
| `bg-canvas` | `#ffffff` | 웹 페이지 기본 배경, 카드 배경 | 기본 도화지 |
| `bg-dark-bg` | `#111111` | 어두운 섹션(Hero, Projects, Contact) 배경 | Navy Dark 변환 |

### B. 타이포그래피 (Typography Hierarchy)

전체 텍스트는 **Inter**를 기본 폰트로 사용하며, 코드 스타일 및 메타 데이터 표현 시에는 **JetBrains Mono**를 활용해 기술적 정밀함을 나타냅니다.

- **Font Stack**: 
  - Sans-Serif: `font-sans` (`'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
  - Monospace: `font-mono` (`'JetBrains Mono', monospace`)

| 레벨 | 크기 (Desktop) | 크기 (Mobile) | Weight | Line Height | 사용 예시 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Hero Display`| `text-[clamp(52px,8.5vw,84px)]` | - | `font-bold` | `leading-none` | Hero 영역 성명 (유용완) |
| `Display` | `text-4xl` (`36px`) | `md:text-5xl` | `font-bold` | `leading-tight` | 모달 내 대형 헤딩 |
| `H2` | `text-3xl` (`30px`) | `md:text-4xl` | `font-bold` | `leading-tight` | 섹션 주요 타이틀 |
| `H3` | `text-lg` (`18px`) | `md:text-xl` | `font-bold` | `leading-relaxed` | 카드/모달 내 소제목 |
| `Base` | `text-base` | - | `font-normal`| `leading-relaxed` | 기본 본문 텍스트 |
| `Small (SM)` | `text-sm` | - | `font-medium`| `leading-relaxed` | 네비게이션 링크, 버튼 텍스트 |
| `Extra Small` | `text-xs` | - | `font-normal`| `leading-normal` | 메타 정보, 캡션 |

---

## 3. UI 컴포넌트 사양 명세 (Component Specs)

### A. Navigation (src/components/Navigation.tsx)
- **구조**: Sticky Header, 높이 `60px`.
- **배경**: `bg-white/95 backdrop-blur-md` 적용으로 스크롤 시 하단 콘텐츠가 유려하게 투영됨.
- **동적 효과**: 스크롤이 내려가면 `isScrolled` 상태가 true로 전환되며 하단에 `border-hairline shadow-xs`가 활성화됨.

### B. Cards (src/components/About.tsx, Projects.tsx 등)
- **Rounded**: `rounded-card` (12px 반경).
- **Border**: `border border-hairline`.
- **Hover Effect**: 마우스 오버 시 `shadow-sm -translate-y-0.5`로 자연스러운 인터랙션 제공.
- **강조 카드**:
  - `bg-ink text-white` 처리.
  - 전체 성과 중 주도적인 핵심 지표(예: 만족도 100점, 입찰성공률 60%)를 부각시키기 위해 한 섹션당 단 하나만 사용함.

### C. Buttons
- **사각형**: Notion 스타일을 따라 테두리 반경은 `rounded-button` (8px)로 고정하여 직사각형 형태를 지향함 (타원형 pill 모양 지양).
- **종류**:
  - `bg-ink text-white hover:bg-charcoal` (기본 강조)
  - `border border-hairline bg-canvas text-ink hover:bg-surface` (서브 아웃라인)
  - `bg-on-dark text-ink hover:bg-[#f0f0f0]/88` (어두운 배경용 밝은 버튼)

### D. Badges & Tags
- **형태**: 완벽한 타원형 (`rounded-full`).
- **용도**: 직무 명칭, 재직 상태(Live), 프로젝트 메타 정보 등에 사용됨.
- **종류**:
  - `badge-live` (`bg-[#e8f5e9] text-[#2e7d32]`): 재직 중 상태 표시.
  - `badge-dark` (`bg-white/10 text-on-dark`): 어두운 영역 내 메타 배지.

---

## 4. 인터랙션 및 애니메이션 원칙

- **스크롤 리빌 (Scroll Reveal - useIntersectionObserver)**:
  - 모든 콘텐츠 섹션은 스크롤에 반응하여 등장함 (`.reveal`).
  - 등장 효과: `translateY(20px)`에서 위로 슬라이드하며 `opacity`가 `0`에서 `1`로 변화함.
  - 속도: `0.55s ease`. 시간 차 등장을 위해 0.08초 단위의 딜레이(`.reveal--d1`, `.reveal--d2` 등)를 순차적으로 부여함.
- **인터랙티브 모달 (src/components/Modal.tsx)**:
  - 자세히 보기 등의 액션 시 전체 화면을 덮는 모달 창 생성.
  - State 관리: React state(`isOpen`, `modalType`)를 통해 조건부 렌더링되고 애니메이션 처리합니다.
  - 스크롤 락: 모달이 열리면 `body`에 `overflow: hidden`을 부여해 뒷배경 스크롤을 원천 차단함.
- **동적 차트 애니메이션**:
  - 차트(도넛, 게이지, 스킬바)는 화면에 진입하는 순간(Intersection Observer 감지)에 맞춰 바 길이나 stroke가 서서히 차오르는 애니메이션 실행.
  - 카운팅 애니메이션은 `requestAnimationFrame`을 활용하여 0부터 목표 수치까지 1.2초 동안 자연스럽게 카운트업 처리됩니다.
