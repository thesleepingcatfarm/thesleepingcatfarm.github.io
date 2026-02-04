/**
 * ============================================================
 *  animations.js — ALL INTERACTIVE ANIMATIONS
 *  ─────────────────────────────────────────
 *  1. Nav shrink on scroll
 *  2. Nav dropdown hover menus
 *  3. Staggered scroll-reveal (IntersectionObserver)
 *  4. Smooth-scroll for anchor links
 *  5. Hero entrance sequence
 *  6. Product card 3-D tilt on hover
 *  7. Process step number counter
 *  8. Product detail accordion toggle
 *  9. Contact form "send" handler (opens mailto)
 * ============================================================
 */


/* ─── 1. NAV SHRINK ON SCROLL ─── */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
      ticking = false;
    });
    ticking = true;
  });
}


/* ─── 2. NAV DROPDOWN HOVER ─── */
function initNavDropdowns() {
  /* Close all dropdowns when clicking outside */
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown').forEach(li => li.classList.remove('open'));
    }
  });

  /* Toggle on click for mobile-friendliness; hover works via CSS */
  document.querySelectorAll('.has-dropdown > a').forEach(a => {
    a.addEventListener('click', (e) => {
      const li = a.parentElement;
      // If the href is just "#" or points to a section, allow default navigation
      // but also toggle the dropdown on mobile
      if (window.innerWidth <= 900) {
        e.preventDefault();
        li.classList.toggle('open');
      }
    });
  });
}


/* ─── 3. STAGGERED SCROLL REVEAL ─── */
function initScrollReveal() {
  const STAGGER_MS = 110;
  const THRESHOLD  = 0.12;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let index = 0;
      siblings.forEach((sib, i) => { if (sib === entry.target) index = i; });

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * STAGGER_MS);

      observer.unobserve(entry.target);
    });
  }, { threshold: THRESHOLD });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* ─── 4. SMOOTH SCROLL ─── */
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}


/* ─── 5. HERO ENTRANCE SEQUENCE ─── */
function initHeroEntrance() {
  const children = document.querySelectorAll(
    '.hero-buttons, .scroll-hint'
  );
  if (!children.length) return;

  const BASE_DELAY = 320;
  const STEP       = 200;

  children.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(22px)';
    el.style.transition = `opacity 0.7s cubic-bezier(.22,.61,0,1) ${BASE_DELAY + i * STEP}ms,
                            transform 0.7s cubic-bezier(.22,.61,0,1) ${BASE_DELAY + i * STEP}ms`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
}

/* ─── HERO SLIDESHOW ─── */
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;

  let currentSlide = 0;
  const SLIDE_INTERVAL = 5000; // Change slide every 5 seconds

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, SLIDE_INTERVAL);
}


/* ─── 6. PRODUCT CARD 3-D TILT ─── */
function initCardTilt() {
  const MAX_TILT = 6;

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.cheese-card');
    if (!card) return;

    const rect    = card.getBoundingClientRect();
    const centerX = rect.left + rect.width  / 2;
    const centerY = rect.top  + rect.height / 2;

    const rotateY = ((e.clientX - centerX) / (rect.width  / 2)) * MAX_TILT;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * MAX_TILT;

    card.style.transform  = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.transition = 'transform 0.1s ease-out';
  });

  document.addEventListener('mouseleave', (e) => {
    const card = e.target.closest('.cheese-card');
    if (!card) return;
    card.style.transform  = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    card.style.transition = 'transform 0.45s cubic-bezier(.22,.61,0,1)';
  });
}


/* ─── 7. PROCESS STEP NUMBER COUNTER ─── */
function initCounters() {
  const DURATION = 600;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.textContent, 10);
      const start  = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / DURATION, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(eased * target)).padStart(2, '0');
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.step-number').forEach(el => observer.observe(el));
}


/* ─── 8. PRODUCT DETAIL ACCORDION ─── */
function initAccordion() {
  document.querySelectorAll('.detail-accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item  = btn.closest('.detail-accordion-item');
      const body  = item.querySelector('.detail-accordion-body');
      const isOpen = btn.classList.contains('open');

      // Close all others in the same accordion
      btn.closest('.detail-accordion').querySelectorAll('.detail-accordion-btn').forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove('open');
          otherBtn.closest('.detail-accordion-item').querySelector('.detail-accordion-body').classList.remove('open');
        }
      });

      // Toggle current
      btn.classList.toggle('open', !isOpen);
      body.classList.toggle('open', !isOpen);
    });
  });
}


/* ─── 9. CONTACT FORM HANDLER ─── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.querySelector('#cf-name').value;
    const email   = form.querySelector('#cf-email').value;
    const subject = form.querySelector('#cf-subject').value || 'Inquiry';
    const message = form.querySelector('#cf-message').value;

    const mailto = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailto;
  });
}


/* ═══════════════════════════════════════════
   MASTER INIT
   ═══════════════════════════════════════════ */
function initAnimations() {
  initNavScroll();
  initNavDropdowns();
  initHeroEntrance();
  initHeroSlideshow();
  initScrollReveal();
  initSmoothScroll();
  initCardTilt();
  initCounters();
  initAccordion();
  initContactForm();
}
