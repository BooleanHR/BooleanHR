/* ============================================
   유용완 Portfolio — Main.js v2
   시각화 요소 애니메이션 통합 관리
   ============================================ */
(function () {
  'use strict';

  /* ── 1. Scroll Reveal ── */
  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('reveal--visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    );
    els.forEach(el => io.observe(el));
  }

  /* ── 2. Hero Fade ── */
  function initHeroFade() {
    const content = document.querySelector('.hero__content');
    const indicator = document.querySelector('.hero__scroll-indicator');
    if (!content) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / (window.innerHeight * 0.45), 1);
        content.style.opacity = 1 - p;
        content.style.transform = `translateY(${p * -28}px)`;
        if (indicator) indicator.style.opacity = 1 - p * 2.5;
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }

  /* ── 3. Number Counter ── */
  function countUp(el, target, duration, suffix) {
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.floor(eased * target) + (suffix || '');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + (suffix || '');
    }
    requestAnimationFrame(step);
  }

  function initKpiCounters() {
    const cards = document.querySelectorAll('.kpi-card__value[data-target]');
    if (!cards.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const target = parseInt(e.target.dataset.target, 10);
        countUp(e.target, target, 1000);
        // animate bar
        const bar = e.target.closest('.kpi-card')?.querySelector('.kpi-card__bar-fill');
        if (bar) { setTimeout(() => { bar.style.width = bar.style.width || '0%'; }, 100); }
        io.unobserve(e.target);
      }),
      { threshold: 0.5 }
    );
    cards.forEach(el => io.observe(el));
  }

  /* ── 4. KPI Bar Fills (trigger on section visible) ── */
  function initKpiBars() {
    const fills = document.querySelectorAll('.kpi-card__bar-fill');
    if (!fills.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        // already has width set inline, just ensure transition fires
        const w = e.target.style.width;
        e.target.style.width = '0%';
        requestAnimationFrame(() => { e.target.style.width = w; });
        io.unobserve(e.target);
      }),
      { threshold: 0.3 }
    );
    fills.forEach(el => io.observe(el));
  }

  /* ── 5. Donut Chart ── */
  function initDonutCharts() {
    const arcs = document.querySelectorAll('.donut-chart__fill[data-value]');
    if (!arcs.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const val = parseFloat(e.target.dataset.value); // e.g. 113 of 188.5
        e.target.style.strokeDasharray = `${val} ${188.5 - val}`;
        io.unobserve(e.target);
      }),
      { threshold: 0.4 }
    );
    arcs.forEach(el => io.observe(el));
  }

  /* ── 6. Compare Chart Bars ── */
  function initCompareBars() {
    const bars = document.querySelectorAll('.compare-chart__bar');
    if (!bars.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const targetW = e.target.dataset.finalWidth || e.target.style.width;
        e.target.style.width = '0%';
        setTimeout(() => { e.target.style.width = targetW; }, 80);
        io.unobserve(e.target);
      }),
      { threshold: 0.3 }
    );
    bars.forEach(bar => {
      bar.dataset.finalWidth = bar.style.width;
      bar.style.width = '0%';
      io.observe(bar);
    });
  }

  /* ── 7. Gauge Fill ── */
  function initGaugeFills() {
    const paths = document.querySelectorAll('.gauge-fill[data-value]');
    if (!paths.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const val = parseFloat(e.target.dataset.value); // full = 125.7
        e.target.style.strokeDasharray = `${val} ${125.7 * 2 - val}`;
        io.unobserve(e.target);
      }),
      { threshold: 0.4 }
    );
    paths.forEach(p => io.observe(p));
  }

  /* ── 8. Skill Bars ── */
  function initSkillBars() {
    const fills = document.querySelectorAll('.skill-bar-item__fill[data-width]');
    if (!fills.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const pct = e.target.dataset.width;
        e.target.style.width = pct + '%';
        io.unobserve(e.target);
      }),
      { threshold: 0.2 }
    );
    fills.forEach(el => io.observe(el));
  }

  /* ── 9. GPA Bar ── */
  function initGpaBar() {
    const fills = document.querySelectorAll('.gpa-visual__fill[data-width]');
    if (!fills.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.width = e.target.dataset.width + '%';
        io.unobserve(e.target);
      }),
      { threshold: 0.3 }
    );
    fills.forEach(el => io.observe(el));
  }

  /* ── 10. Radar Chart Animation ── */
  function initRadar() {
    const polygon = document.querySelector('.radar-data');
    const dots = document.querySelectorAll('.radar-dot');
    if (!polygon) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        polygon.style.opacity = '1';
        dots.forEach(d => { d.style.opacity = '1'; });
        io.unobserve(e.target);
      }),
      { threshold: 0.3 }
    );
    io.observe(polygon);
  }

  /* ── 11. Footer Year ── */
  function initFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ── 12. Modal Handlers ── */
  function initModals() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    const body = document.getElementById('modalBody');
    const triggers = document.querySelectorAll('[data-modal]');

    if (!overlay || !closeBtn || !body) return;

    function openModal(modalId) {
      const template = document.getElementById(`tpl-${modalId}`);
      if (!template) return;

      // Clear previous content
      body.innerHTML = '';

      // Clone template content and append
      const clone = template.content.cloneNode(true);
      body.appendChild(clone);

      // Show modal
      overlay.classList.add('modal-overlay--active');
      document.body.classList.add('modal-open');

      // Accessibility: Focus close button
      closeBtn.focus();
    }

    function closeModal() {
      overlay.classList.remove('modal-overlay--active');
      document.body.classList.remove('modal-open');
      setTimeout(() => {
        body.innerHTML = '';
      }, 300); // clear after fade-out transition
    }

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal');
        if (modalId) {
          openModal(modalId);
        }
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const modalId = trigger.getAttribute('data-modal');
          if (modalId) {
            openModal(modalId);
          }
        }
      });
    });

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      // Close only if click is directly on the overlay backdrop
      if (e.target === overlay) {
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('modal-overlay--active')) {
        closeModal();
      }
    });
  }

  /* ── Init All ── */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initHeroFade();
    initKpiCounters();
    initKpiBars();
    initDonutCharts();
    initCompareBars();
    initGaugeFills();
    initSkillBars();
    initGpaBar();
    initRadar();
    initFooterYear();
    initModals();
  });
})();
