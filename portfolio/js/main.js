document.addEventListener('DOMContentLoaded', () => {
  // ══════════════════════════════════════
  // 1. SCROLL EFFECT ON NAVIGATION
  // ══════════════════════════════════════
  const nav = document.getElementById('mainNav');
  const handleScrollNav = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollNav);
  handleScrollNav(); // Initial check


  // ══════════════════════════════════════
  // 2. MOBILE HAMBURGER MENU
  // ══════════════════════════════════════
  const navHamburger = document.getElementById('navHamburger');
  const navMobile = document.getElementById('navMobile');
  const navLinks = document.querySelectorAll('#navMobile .nav__link');

  if (navHamburger && navMobile) {
    navHamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navHamburger.classList.toggle('open');
      navMobile.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navHamburger.classList.remove('open');
        navMobile.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !navMobile.contains(e.target)) {
        navHamburger.classList.remove('open');
        navMobile.classList.remove('open');
      }
    });
  }


  // ══════════════════════════════════════
  // 3. INTERSECTION OBSERVER FOR REVEAL & ANIMATIONS
  // ══════════════════════════════════════
  
  // Hero logo transition immediately
  const heroLogo = document.getElementById('heroLogo');
  if (heroLogo) {
    setTimeout(() => {
      heroLogo.classList.add('visible');
    }, 150);
  }

  // General reveal animation
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ══════════════════════════════════════
  // 4. CHART & VALUE ANIMATIONS (ON INTERSECT)
  // ══════════════════════════════════════

  // Counter animation helper
  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = 1200; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * target);

      element.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    requestAnimationFrame(updateCounter);
  };

  // Observe and trigger stats/charts
  const statsSection = document.querySelector('#about');
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger counters
        const counters = entry.target.querySelectorAll('.kpi-card__value span[data-target]');
        counters.forEach(c => animateCounter(c));

        // Trigger KPI progress bars
        const bars = entry.target.querySelectorAll('.kpi-card__bar-fill');
        bars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = `${width}%`;
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Key Achievements Section (Charts)
  const achSection = document.querySelector('#achievements');
  const achObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Donut Chart
        const donut = entry.target.querySelector('.donut-chart__fill');
        if (donut) {
          const val = donut.getAttribute('data-value');
          donut.style.strokeDasharray = `${val} 188.5`;
        }

        // Gauge Chart
        const gauge = entry.target.querySelector('.gauge-fill');
        if (gauge) {
          const val = gauge.getAttribute('data-value');
          gauge.style.strokeDasharray = `${val} 125.7`;
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  if (achSection) {
    achObserver.observe(achSection);
  }

  // Skills & Tools Section (Skill bars & Radar Chart)
  const skillsSection = document.querySelector('#skills');
  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Skill Bars
        const fillBars = entry.target.querySelectorAll('.skill-bar-item__fill');
        fillBars.forEach(bar => {
          const w = bar.getAttribute('data-width');
          bar.style.width = `${w}%`;
        });

        // Radar Chart
        const radarData = entry.target.querySelector('.radar-data');
        const radarDots = entry.target.querySelectorAll('.radar-dot');
        if (radarData) {
          radarData.style.opacity = '1';
        }
        radarDots.forEach(dot => {
          dot.style.opacity = '1';
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // Education Section (GPA Bar)
  const eduSection = document.querySelector('#education');
  const eduObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const gpaFill = entry.target.querySelector('.gpa-visual__fill');
        if (gpaFill) {
          const w = gpaFill.getAttribute('data-width');
          gpaFill.style.width = `${w}%`;
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (eduSection) {
    eduObserver.observe(eduSection);
  }


  // ══════════════════════════════════════
  // 5. MODAL SYSTEM
  // ══════════════════════════════════════
  const modalOverlay = document.getElementById('modalOverlay');
  const modalPanel = document.getElementById('modalPanel');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');

  const openModal = (templateId) => {
    const template = document.getElementById(`tpl-${templateId}`);
    if (!template || !modalOverlay || !modalBody) return;

    // Clear previous modal content
    modalBody.innerHTML = '';
    
    // Import and append template content
    const clone = document.importNode(template.content, true);
    modalBody.appendChild(clone);

    // Show modal with animation
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Focus close button for accessibility
    setTimeout(() => {
      if (modalClose) modalClose.focus();
    }, 50);
  };

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll

    // Clear body after transitions finish
    setTimeout(() => {
      if (modalBody) modalBody.innerHTML = '';
    }, 300);
  };

  // Event Delegation for modal triggers
  document.addEventListener('click', (e) => {
    // Find closest click target with data-modal attribute
    const trigger = e.target.closest('[data-modal]');
    if (trigger) {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      openModal(modalId);
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      // Close only if clicking the overlay background itself, not the panel
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Keyboard accessibility for modal (ESC key)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });


  // ══════════════════════════════════════
  // 6. ACTIVE NAVIGATION LINK ON SCROLL
  // ══════════════════════════════════════
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('#navLinks .nav__link');

  const handleScrollActiveNav = () => {
    const scrollY = window.pageYOffset + 120; // Offset for sticky nav

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', handleScrollActiveNav);
  handleScrollActiveNav(); // Run once initially
});
