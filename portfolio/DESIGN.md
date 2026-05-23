# YYW Portfolio Design Specification (DESIGN.md)

본 문서는 유용완 채용대행 PM 포트폴리오의 **디자인 시스템 및 사양 명세서**입니다. 프로젝트의 단일 진실 공급원(Source of Truth)으로서 일관된 브랜드 정체성을 유지하고, 향후 프로젝트 확장 및 유지보수 시 디자인 일관성을 유지할 수 있도록 돕습니다.

---

## 1. 디자인 철학 및 방향성

포트폴리오의 디자인은 **"집요함, 신뢰성, 정밀함"**이라는 유용완 PM의 핵심 정체성을 시각적으로 반영합니다. 불필요한 장식과 다채로운 색상을 배제하고, Notion의 정돈된 레이아웃 시스템과 YYW 모노그램의 단단하고 기하학적인 그레이스케일 아이덴티티를 조화롭게 융합하였습니다.

- **절제된 미학 (Grayscale First)**: 배경과 텍스트, 경계선 등은 그레이스케일(Grayscale)을 기본으로 설계하여 채용 대행 PM의 객관성과 신뢰성을 전달합니다.
- **단일 강조색 (Minimal Accent)**: 화려한 파스텔 톤 대신 깊이감 있는 **Ink/Charcoal (#1a1a1a)** 색상을 단 하나의 강조색으로 삼아, 핵심 성과와 강조하고 싶은 컴포넌트에 한해서만 적용합니다.
- **Notion 레이아웃의 차용**: 카드 디자인의 반경(12px), 선 두께(1px Hairline), 컴포넌트 여백은 Notion 특유의 정갈하고 실용적인 스타일을 계승합니다.

---

## 2. 디자인 토큰 (Design Tokens)

### A. 색상 토큰 (Color Tokens)

| 토큰명 | 값 (HEX) | 사용처 | 비고 |
| :--- | :--- | :--- | :--- |
| `--ink` | `#1a1a1a` | 기본 텍스트 색상, 주요 강조 버튼, 강조 카드 배경 | 주 강조색 |
| `--ink-deep` | `#0d0d0d` | 극도로 어두운 텍스트 및 로고 필터 | - |
| `--charcoal` | `#2d2d2d` | 서브 강조 버튼 및 마우스 호버 상태 색상 | - |
| `--slate` | `#4a4a4a` | 본문 텍스트, 중간 명도의 UI 요소 | - |
| `--steel` | `#6b6b6b` | 설명 문구, 라벨 텍스트 | - |
| `--stone` | `#999999` | 흐린 텍스트, 메타데이터, 부차적 장식 | - |
| `--muted` | `#c4c4c4` | 스크롤바 썸, 비활성화된 테두리 | - |
| `--hairline` | `#e4e4e4` | 카드, 섹션 구분선 등의 기본 1px 경계선 | Notion Style |
| `--hairline-soft`| `#efefef` | 매우 미세한 레이아웃 경계선 | - |
| `--surface` | `#f7f7f7` | 섹션 배경(Career), 미니 스태츠 박스 배경 | - |
| `--canvas` | `#ffffff` | 웹 페이지 기본 배경, 카드 배경 | 기본 도화지 |
| `--dark-bg` | `#111111` | 어두운 섹션(Hero, Projects, Contact) 배경 | Navy Dark 변환 |

### B. 타이포그래피 (Typography Hierarchy)

전체 텍스트는 **Inter**를 기본 폰트로 사용하며, 코드 스타일 및 메타 데이터 표현 시에는 **JetBrains Mono**를 활용해 기술적 정밀함을 나타냅니다.

- **Font Stack**: 
  - Sans-Serif: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
  - Monospace: `'JetBrains Mono', monospace`

| 레벨 | 크기 (Desktop) | 크기 (Mobile) | Weight | Line Height | 사용 예시 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Hero Display`| `84px` | `52px` (clamp) | 700 (Bold) | 1.0 | Hero 영역 성명 (유용완) |
| `Display` | `52px` | `36px` (clamp) | 700 (Bold) | 1.1 | 모달 내 대형 헤딩 |
| `H1` | `42px` | `28px` (clamp) | 700 (Bold) | 1.2 | - |
| `H2` | `32px` | `22px` (clamp) | 700 (Bold) | 1.3 | 섹션 주요 타이틀 |
| `H3` | `24px` | `18px` (clamp) | 600 (Semibold)| 1.4 | 카드/모달 내 소제목 |
| `Base` | `16px` | `16px` | 400 (Regular) | 1.8 | 기본 본문 텍스트 |
| `Small (SM)` | `14px` | `14px` | 500 (Medium) | 1.65 | 네비게이션 링크, 버튼 텍스트 |
| `Extra Small` | `12px` | `12px` | 400 (Regular) | 1.6 | 메타 정보, 캡션 |

### C. 여백 및 스페이싱 (Spacing)

여백은 일관성을 극대화하기 위해 8px 배수 시스템을 엄격히 적용합니다.

- `8px` (`--sp-8`): 컴포넌트 내부 요소 간 미세 조절
- `12px` (`--sp-12`): 배지 및 미니 태그 그룹 간격
- `16px` (`--sp-16`): 기본 카드 내부 패딩
- `24px` (`--sp-24`): 성과 대시보드 카드 내부 패딩
- `32px` (`--sp-32`): 데스크톱 그리드 간격 및 컨테이너 좌우 패딩
- `48px` (`--sp-48`): 섹션 레이블과 타이틀 간격
- `96px` (`--sp-96`): 데스크톱 섹션 간 수직 패딩 (상하 여백)
- `64px` (`--sp-64`): 모바일 섹션 간 수직 패딩

---

## 3. UI 컴포넌트 사양 명세 (Component Specs)

### A. Navigation Bar
- **구조**: 상단 고정식 (Sticky Header), 높이 `60px`.
- **배경**: `rgba(255, 255, 255, 0.95)` 투명도 및 `backdrop-filter: blur(12px)` 적용으로 스크롤 시 하단 콘텐츠가 유려하게 투영됨.
- **동적 효과**: 스크롤이 내려가면 `.scrolled` 클래스가 활성화되며 하단에 `1px solid --hairline` 경계선과 미세한 그림자(`--shadow-xs`)가 생성됨.

### B. Cards (기본 카드 & 강조 카드)
- **Border Radius**: `12px` (`--r-lg`).
- **Border**: `1px solid --hairline`.
- **Hover Effect**: 마우스 오버 시 `box-shadow: --shadow-sm`과 미세한 위 방향 이동(`translateY(-1px)`) 적용.
- **강조 카드 (dash-card--accent)**:
  - 배경을 `--ink`로 채우고 글자를 `--canvas`로 반전시킴.
  - 전체 리스트 중 독보적인 성과나 핵심 KPI를 부각시키기 위해 한 섹션당 단 하나만 사용함.

### C. Buttons
- **Notion 스타일 사각형**: 둥근 모서리 반경은 `8px` (`--r-md`)로 고정하여 직사각형 형태를 지향함 (타원형 pill 모양 지양).
- **종류**:
  - `btn-dark` (기본 강조): 배경 `--ink`, 글자 `--canvas`.
  - `btn-outline` (서브): 투명 배경, 테두리 `--hairline`, 호버 시 `--surface`로 변경.
  - `btn-on-dark` (어두운 배경용): 배경 `--on-dark`, 글자 `--ink`.

### D. Badges & Tags
- **형태**: 완벽한 타원형 (`border-radius: var(--r-full)`).
- **용도**: 직무 명칭, 재직 상태(Live), 프로젝트 메타 정보 등에 사용됨.
- **종류**:
  - `badge-live`: 재직 중 상태 표시 (녹색 계열, `#e8f5e9` 배경 + `#2e7d32` 텍스트).
  - `badge-dark`: 검정 배경에 흰색 텍스트.
  - `badge-subtle`: 회색 배경 테두리.

---

## 4. 인터랙션 및 애니메이션 원칙

- **스크롤 리빌 (Scroll Reveal)**:
  - 모든 콘텐츠 섹션은 스크롤에 반응하여 등장함 (`.reveal`).
  - 등장 효과: `translateY(20px)`에서 위로 슬라이드하며 `opacity`가 `0`에서 `1`로 변화함.
  - 속도: `0.55s ease`. 시간 차 등장을 위해 0.08초 단위의 딜레이(`.reveal--d1`, `.reveal--d2` 등)를 순차적으로 부여함.
- **인터랙티브 모달 (Modal System)**:
  - 자세히 보기 등의 액션 시 전체 화면을 덮는 모달 창 생성.
  - 트랜지션: 배경 오버레이는 `opacity` 서서히 증가, 모달 판넬은 `scale(0.95)`에서 `scale(1)`로 확대되며 부드럽게 등장.
  - 스크롤 락: 모달이 열리면 `body`에 `overflow: hidden`을 부여해 뒷배경 스크롤을 원천 차단함.
- **동적 차트 애니메이션**:
  - 차트(도넛, 게이지, 스킬바)는 화면에 진입하는 순간(Intersection Observer 감지)에 맞춰 바 길이나 스트로크가 서서히 차오르는 애니메이션 실행.
