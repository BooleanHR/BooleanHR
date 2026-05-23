# 유용완 Portfolio — GitHub Pages 배포 가이드

## 🚀 배포 방법

### 1. GitHub 리포지토리 생성
1. GitHub에서 새 리포지토리를 만듭니다.
   - 리포지토리 이름: `your-username.github.io` (개인 페이지) 또는 원하는 이름
   - Public으로 설정

### 2. 파일 업로드
```bash
# portfolio 폴더로 이동
cd portfolio

# Git 초기화
git init
git add .
git commit -m "Initial portfolio"

# 원격 리포지토리 연결
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### 3. GitHub Pages 활성화
1. 리포지토리 → Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main`, Folder: `/ (root)`
4. Save

배포 완료 후 `https://your-username.github.io/your-repo/` 에서 확인

---

## ✏️ 수정 가이드

### 내용 수정하기
`index.html` 파일에서 `✏️ 수정 가능` 주석을 검색하세요.
각 섹션별 수정 포인트가 표시되어 있습니다.

| 수정 항목 | 파일 | 검색 키워드 |
|-----------|------|-------------|
| 이름/직함/모토 | `index.html` | `HERO SECTION` |
| 자기소개 텍스트 | `index.html` | `ABOUT SECTION` |
| 핵심 수치 | `index.html` | `핵심 수치` |
| 경력 사항 | `index.html` | `CAREER SECTION` |
| 프로젝트 | `index.html` | `PROJECTS SECTION` |
| 스킬/자격증 | `index.html` | `SKILLS` |
| 학력 | `index.html` | `EDUCATION` |
| 연락처 | `index.html` | `CONTACT` |
| 색상/폰트 | `css/style.css` | `:root` |

### 디자인 수정하기
`css/style.css` 상단의 `:root` 블록에서 CSS 변수를 수정하세요:

```css
:root {
  --bg-primary: #0a0a0a;        /* 메인 배경 */
  --text-highlight: #ffffff;     /* 핵심 강조 색상 */
  --accent-warm: #b0a898;        /* 포인트 컬러 */
  --section-gap: 140px;          /* 섹션 간격 */
  --container-width: 780px;      /* 컨텐츠 너비 */
}
```

### 경력/프로젝트 항목 추가하기

**경력 추가 예시:**
```html
<div class="timeline__item reveal">
  <div class="timeline__dot"></div>
  <div class="timeline__period">2025.01 — 2025.12</div>
  <div class="timeline__company">회사명</div>
  <div class="timeline__role">부서 · 직급</div>
  <ul class="timeline__desc">
    <li>업무 내용 1</li>
    <li><span class="timeline__highlight">강조 내용</span></li>
  </ul>
</div>
```

**프로젝트 추가 예시:**
```html
<div class="project reveal">
  <div class="project__year">2025</div>
  <div class="project__info">
    <div class="project__name">
      <span class="project__role-badge">PM</span>
      프로젝트명
    </div>
    <div class="project__scale">규모 설명</div>
    <div class="project__result">핵심 성과</div>
  </div>
</div>
```

---

## 📁 파일 구조

```
portfolio/
├── index.html          # 메인 페이지 (내용 수정)
├── css/
│   └── style.css       # 스타일 (디자인 수정)
├── js/
│   └── main.js         # 애니메이션 (수정 불필요)
└── README.md           # 이 파일
```
