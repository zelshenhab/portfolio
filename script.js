(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  // Nav state, scroll progress & active link
  const nav = document.getElementById('nav');
  const progress = document.querySelector('.progress');
  const links = [...document.querySelectorAll('.nav-links a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href')));
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  // On phones the nav slides away while scrolling down and returns on scroll up
  const mobile = window.matchMedia('(max-width: 760px)');
  let lastY = window.scrollY;

  // Telegram button: appears after the hero, steps aside once the contact section is on screen
  const tgFab = document.getElementById('tgFab');
  const contact = document.getElementById('contact');

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 30);
    tgFab.classList.toggle('show', y > 500 && contact.getBoundingClientRect().top > innerHeight * 0.8);
    const menuOpen = burger.getAttribute('aria-expanded') === 'true';
    if (!mobile.matches || menuOpen || y < 80) nav.classList.remove('nav-hidden');
    else if (y > lastY + 6) nav.classList.add('nav-hidden');
    else if (y < lastY - 6) nav.classList.remove('nav-hidden');
    if (Math.abs(y - lastY) > 6) lastY = y;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    let current = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) current = i; });
    links.forEach((a, i) => a.classList.toggle('active', i === current));
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    navLinks.classList.toggle('open', open);
  });
  links.forEach(a => a.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  }));

  // Reveal on scroll, with stagger for siblings
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 5) * 0.08}s`);
    io.observe(el);
  });

  // Count-up stats
  const counters = document.querySelectorAll('[data-count]');
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      const dur = reduceMotion ? 1 : 1400;
      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => countIO.observe(c));

  // Typing roles
  const typed = document.getElementById('typed');
  let roles = i18n.t('roles');
  let r = 0, i = roles[0].length, deleting = true;
  typed.textContent = roles[0];
  document.addEventListener('langchange', () => {
    roles = i18n.t('roles');
    r = 0; i = roles[0].length; deleting = true;
    typed.textContent = roles[0];
  });
  if (!reduceMotion) {
    const loop = () => {
      const word = roles[r];
      i += deleting ? -1 : 1;
      typed.textContent = word.slice(0, i);
      let delay = deleting ? 40 : 85;
      if (!deleting && i === word.length) { deleting = true; delay = 2000; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 300; }
      setTimeout(loop, delay);
    };
    setTimeout(loop, 2200);
  }

  // Cursor glow, card spotlight & hero parallax
  if (finePointer && !reduceMotion) {
    const glow = document.querySelector('.cursor-glow');
    const stack = document.querySelector('.shot-stack');
    const hero = document.getElementById('heroVisual');
    addEventListener('pointermove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      const r = hero.getBoundingClientRect();
      if (r.bottom > 0) {
        const x = (e.clientX - (r.left + r.width / 2)) / innerWidth;
        const y = (e.clientY - (r.top + r.height / 2)) / innerHeight;
        stack.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
      }
    }, { passive: true });

    document.querySelectorAll('.glow').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });

    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  // Drag-to-scroll galleries + lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('img');
  let lbList = [], lbIndex = 0, lbOpener = null;
  const showLb = () => { lbImg.src = lbList[lbIndex].src; lbImg.alt = lbList[lbIndex].alt; };
  const openLb = (list, i) => {
    lbList = list; lbIndex = i; lbOpener = document.activeElement; showLb();
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
    lb.querySelector('.lb-close').focus({ preventScroll: true });
  };
  const closeLb = () => {
    lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true');
    lbOpener?.focus?.({ preventScroll: true });
  };
  const step = d => { lbIndex = (lbIndex + d + lbList.length) % lbList.length; showLb(); };
  lb.querySelector('.lb-close').addEventListener('click', closeLb);
  lb.querySelector('.lb-prev').addEventListener('click', () => step(-1));
  lb.querySelector('.lb-next').addEventListener('click', () => step(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  document.querySelectorAll('[data-gallery]').forEach(g => {
    let down = false, moved = false, startX = 0, startScroll = 0;
    g.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false; startX = e.clientX; startScroll = g.scrollLeft;
    });
    addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) { moved = true; g.classList.add('dragging'); }
      g.scrollLeft = startScroll - dx;
    });
    addEventListener('pointerup', () => { down = false; g.classList.remove('dragging'); });
    const imgs = [...g.querySelectorAll('img')];
    g.addEventListener('click', e => {
      const img = e.target.closest('img');
      if (!img || moved) return;
      openLb(imgs, imgs.indexOf(img));
    });
    // Keyboard: screenshots are focusable and open with Enter / Space
    imgs.forEach((img, i) => {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.addEventListener('keydown', e => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        openLb(imgs, i);
      });
    });
  });

  // Copy email
  const copyBtn = document.getElementById('copyEmail');
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      copyBtn.querySelector('span').textContent = i18n.t('contact.copied');
      copyBtn.classList.add('copied');
      setTimeout(() => { copyBtn.querySelector('span').textContent = i18n.t('contact.copy'); copyBtn.classList.remove('copied'); }, 1800);
    } catch { location.href = `mailto:${copyBtn.dataset.email}`; }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
