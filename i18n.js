// Language engine. English lives in index.html (the default); every other
// language is a file in lang/ that registers itself on window.I18N.
(() => {
  const LANGS = [
    ['en', 'English'], ['ru', 'Русский'], ['es', 'Español'], ['de', 'Deutsch'],
    ['fr', 'Français'], ['pt', 'Português'], ['tr', 'Türkçe'],
  ];
  const STRINGS = Object.assign({
    en: {
      title: 'Zeyad Elshenhab — Flutter Developer',
      description: 'Zeyad Elshenhab — Flutter developer building production-ready cross-platform mobile apps. Native Kotlin & Swift, real-time chat, clean architecture, BLoC. Apps live on App Store, Google Play and RuStore.',
      roles: ['Real-time apps', 'Native Kotlin & Swift', 'Clean Architecture', 'BLoC & Cubit', 'Pixel-perfect UI'],
      'contact.copied': 'Copied!',
    },
  }, window.I18N);

  const SUPPORTED = LANGS.map(([code]) => code).filter(code => STRINGS[code]);
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const original = new Map(nodes.map(el => [el, el.innerHTML]));
  const originalByKey = {};
  nodes.forEach(el => { originalByKey[el.dataset.i18n] ??= el.innerHTML; });
  // Links with a Russian-language destination (CV, company and university sites)
  const links = [...document.querySelectorAll('[data-href-ru]')].map(el => [el, el.getAttribute('href')]);
  const metaDesc = document.querySelector('meta[name="description"]');
  let lang = 'en';

  const t = key => STRINGS[lang][key] ?? STRINGS.en[key] ?? originalByKey[key] ?? key;

  // Language menu in the nav
  const menu = document.getElementById('langMenu');
  const menuBtn = document.getElementById('langBtn');
  const list = document.getElementById('langList');
  list.innerHTML = LANGS.filter(([code]) => SUPPORTED.includes(code)).map(([code, name]) =>
    `<li><button type="button" role="menuitemradio" data-lang="${code}" lang="${code}" aria-checked="false"><span class="lang-code">${code.toUpperCase()}</span>${name}</button></li>`
  ).join('');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    if (open) list.querySelector('[aria-checked="true"]')?.focus({ preventScroll: true });
  };
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  document.addEventListener('click', e => { if (!menu.contains(e.target)) setMenu(false); });
  menu.addEventListener('keydown', e => {
    const items = [...list.querySelectorAll('button')];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'Escape') { setMenu(false); menuBtn.focus(); }
    if (e.key === 'ArrowDown' && i > -1) { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === 'ArrowUp' && i > -1) { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  });

  const apply = next => {
    lang = next;
    document.documentElement.lang = lang;
    nodes.forEach(el => {
      el.innerHTML = lang === 'en' ? original.get(el) : (STRINGS[lang][el.dataset.i18n] ?? original.get(el));
    });
    links.forEach(([el, href]) => el.setAttribute('href', lang === 'ru' ? el.dataset.hrefRu : href));
    document.title = t('title');
    metaDesc?.setAttribute('content', t('description'));
    menuBtn.querySelector('.lang-current').textContent = lang.toUpperCase();
    list.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-checked', b.dataset.lang === lang));
  };

  const fromUrl = new URLSearchParams(location.search).get('lang');
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch {}
  apply([fromUrl, saved].find(l => SUPPORTED.includes(l)) || 'en');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  list.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    setMenu(false);
    const next = btn.dataset.lang;
    if (next === lang) return;
    try { localStorage.setItem('lang', next); } catch {}
    const url = new URL(location.href);
    if (next === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', next);
    history.replaceState(null, '', url);

    const swap = () => {
      apply(next);
      document.dispatchEvent(new CustomEvent('langchange', { detail: next }));
      document.body.classList.remove('lang-fade');
    };
    if (reduceMotion) return swap();
    document.body.classList.add('lang-fade');
    setTimeout(swap, 200);
  });

  window.i18n = { t, get lang() { return lang; } };
})();
