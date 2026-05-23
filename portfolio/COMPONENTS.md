# Portfolio Component Architecture (COMPONENTS.md)

본 문서는 유용완 채용대행 PM 포트폴리오의 **컴포넌트 구조 및 인터랙션 다이어그램**입니다. 정적 HTML 요소를 구조적으로 모듈화하고, 각 영역이 자바스크립트 이벤트 및 모달 시스템과 어떻게 유기적으로 동작하는지 나타냅니다.

---

## 1. 컴포넌트 계층 구조 (Component Hierarchy)

웹 페이지의 전체 구조는 아래와 같이 단일 레이아웃 위에 독립적인 섹션(Section) 컴포넌트와 전역 인터랙션 시스템(Modal Subsystem)으로 구성됩니다.

```mermaid
graph TD
    %% Base Layout
    Main[index.html Layout] --> Nav[Navigation Bar]
    Main --> Hero[Hero Section]
    Main --> About[About Section]
    Main --> Ach[Key Achievements]
    Main --> Career[Career Timeline]
    Main --> Proj[Key Projects]
    Main --> Skills[Skills & Tools]
    Main --> Edu[Education Section]
    Main --> Contact[Contact Section]
    Main --> Foot[Footer]
    Main --> ModalOverlay[Global Modal Overlay]

    %% Navigation Details
    Nav --> NavLogo[YYW Monogram Brand]
    Nav --> NavLinks[Desktop/Mobile Menu Links]
    NavLinks -.-> |Anchor Jump| Hero
    NavLinks -.-> |Anchor Jump| About
    NavLinks -.-> |Anchor Jump| Career
    NavLinks -.-> |Anchor Jump| Proj
    NavLinks -.-> |Anchor Jump| Skills
    NavLinks -.-> |Anchor Jump| Edu

    %% About Details
    About --> AboutDesc[Intro Biography]
    About --> CoverLetterTrigger[Read Cover Letter Button]
    About --> KPICards[KPI Cards Stack]
    KPICards --> KPI1[Tenure Stat]
    KPICards --> KPI2[Annual PM Projects]
    KPICards --> KPI3[CS Score - Highlighted]

    %% Achievements Details
    Ach --> AchDash[Dashboard Grid]
    AchDash --> AchCard1[Tender Success Rate - Highlighted]
    AchDash --> AchCard2[Contract Expansion Bar Chart]
    AchDash --> AchCard3[Validation Time Comparison]
    AchDash --> AchCard4[Target Ratio Gauge Chart]

    %% Projects Details
    Proj --> ProjGrid[Projects Grid 2x2]
    ProjGrid --> P1[Story 1 Card]
    ProjGrid --> P2[Story 2 Card]
    ProjGrid --> P3[Story 3 Card]
    ProjGrid --> P4[Story 4 Card]
    Proj --> CSTrigger[View CS Interview Button]

    %% Skills Details
    Skills --> SkillBars[Skill Gauge Bars]
    Skills --> RadarChart[Competency Radar Chart]
    Skills --> CertCards[Credential Cards Grid]
    CertCards --> Cert1[ADsP Card]
    CertCards --> Cert2[Social Survey Card]
    CertCards --> Cert3[Excel Card]
    CertCards --> CertZoomTrigger[Credential Bundle Card]

    %% Global Modal Overlay Details
    ModalOverlay --> ModalPanel[Modal Panel Wrapper]
    ModalPanel --> ModalCloseBtn[Close Button]
    ModalPanel --> ModalBodyContent[Dynamic Body Area]
```

---

## 2. 동적 인터랙션 및 데이터 흐름 (Behavior & Interaction)

### A. 모달 제어 흐름 (Modal Control Flow)
사용자가 `data-modal` 속성을 갖는 버튼을 클릭했을 때 HTML 내에 선언된 `<template>` 엘리먼트를 활용하여 모달창을 띄우는 흐름입니다.

```mermaid
sequenceDiagram
    autonumber
    actor User as 사용자
    participant trigger as data-modal 클릭 타겟
    participant mainjs as main.js (Event Listener)
    participant template as HTML template tag
    participant overlay as #modalOverlay
    participant body as #modalBody

    User ->> trigger: 클릭 (예: 자소서 보기)
    trigger ->> mainjs: Event Delegation 감지
    mainjs ->> mainjs: e.preventDefault() 실행 및 modal ID 추출
    mainjs ->> template: id (tpl-cover-letter 등) 검색
    template -->> mainjs: Template content 반환
    mainjs ->> body: innerHTML 초기화 후 content 복제본(clone) 삽입
    mainjs ->> overlay: .open 클래스 추가 (화면 표시)
    mainjs ->> User: 모달 레이아웃 애니메이션 렌더링
    
    Note over User, overlay: 모달 활성화 상태 (뒷배경 스크롤 방지 body overflow:hidden)
    
    User ->> overlay: 외부 영역 클릭 혹은 ✕ 버튼 클릭
    overlay ->> mainjs: Close trigger 감지
    mainjs ->> overlay: .open 클래스 제거 (서서히 사라짐)
    mainjs ->> User: 모달 닫힘 및 뒷배경 스크롤 복구
    mainjs ->> body: 300ms 대기 후 innerHTML 비우기 (메모리 해제)
```

### B. 뷰포트 진입 감지 애니메이션 (Intersection Observer Flow)
사용자가 스크롤하여 특정 섹션에 도달했을 때 텍스트 리빌 효과 및 차트의 차오르는 그래프 효과를 트리거하는 시스템입니다.

```mermaid
sequenceDiagram
    autonumber
    actor User as 사용자 (스크롤)
    participant browser as 브라우저 뷰포트
    participant observer as IntersectionObserver
    participant element as .reveal / Chart 요소

    User ->> browser: 스크롤 다운
    browser ->> observer: 뷰포트 교차율 감지 (threshold 10~15%)
    observer ->> element: Target 요소 감지 알림
    
    alt 일반 텍스트 리빌 (.reveal)
        observer ->> element: .visible 클래스 추가
        element ->> User: 0.55초간 위로 밀어올리며 페이드인
    else 카운터 및 차트 영역 (#about, #achievements, #skills)
        observer ->> element: data-target / data-width 읽기
        observer ->> element: requestAnimationFrame 실행 (카운터 수치 상승)
        observer ->> element: style.width 또는 strokeDasharray 변경
        element ->> User: 수치 카운트업 및 그래프 차오르는 애니메이션 렌더링
    end

    observer ->> observer: unobserve(target) 실행 (최초 1회만 트리거되도록 관찰 해제)
```
