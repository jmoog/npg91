// public/assets/js/main.js — NPG Nettoyage 91

// Header fixe — pas de hide/show au scroll

// ── Burger menu ───────────────────────────────────────────────────────────
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');
let scrollPos = 0;
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));

    if (open) {
      scrollPos = window.scrollY;
      document.body.classList.add('menu-open');
      document.body.style.top = `-${scrollPos}px`;
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollPos);
    }
  });
}

// ── FAQ accordion ─────────────────────────────────────────────────────────
document.querySelectorAll('.faq__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq__item');
    const answer = item?.querySelector('.faq__a');
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.faq__q.open').forEach(b => {
      if (b !== btn) {
        b.classList.remove('open');
        b.closest('.faq__item')?.querySelector('.faq__a')?.classList.remove('open');
      }
    });
    btn.classList.toggle('open', !isOpen);
    if (answer) answer.classList.toggle('open', !isOpen);
  });
});

// ── FAB — Bouton flottant animé + popup ───────────────────────────────────
const fab      = document.getElementById('fab');
const fabBtn   = document.getElementById('fab-btn');
const fabClose = document.getElementById('fab-close');

if (fab && fabBtn) {
  fabBtn.addEventListener('click', () => {
    const isOpen = fab.classList.toggle('open');
    fabBtn.setAttribute('aria-expanded', String(isOpen));
  });

  if (fabClose) {
    fabClose.addEventListener('click', (e) => {
      e.stopPropagation();
      fab.classList.remove('open');
      fabBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Fermer la popup si on clique en dehors
  document.addEventListener('click', (e) => {
    if (fab.classList.contains('open') && !fab.contains(e.target)) {
      fab.classList.remove('open');
      fabBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Sur mobile : afficher le FAB après 400px de scroll
  if (window.matchMedia('(max-width:768px)').matches) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        fab.classList.add('fab--visible');
      } else {
        fab.classList.remove('fab--visible');
      }
    }, { passive: true });
  }
}
