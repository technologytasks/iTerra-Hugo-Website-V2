// ─── Hamburger / Mobile Menu ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

function openMenu() {
  menuOpen = true;
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuOpen = false;
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    menuOpen ? closeMenu() : openMenu();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOpen) closeMenu();
});

// ─── Scroll-reveal ─────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── Back to Top ───────────────────────────────────────────────────────
const backToTopBtn = document.getElementById('btn-back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add('show');
      backToTopBtn.classList.remove('hide');
    } else {
      backToTopBtn.classList.add('hide');
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
