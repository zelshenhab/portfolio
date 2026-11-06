// English lives in index.html (the default); this file holds Russian plus the
// few English strings that aren't in the DOM.
(() => {
  const STRINGS = {
    en: {
      title: 'Zeyad Elshenhab — Flutter Developer',
      description: 'Zeyad Elshenhab — Flutter developer building production-ready cross-platform mobile apps. Native Kotlin & Swift, real-time chat, clean architecture, BLoC. Apps live on App Store, Google Play and RuStore.',
      roles: ['Real-time apps', 'Native Kotlin & Swift', 'Clean Architecture', 'BLoC & Cubit', 'Pixel-perfect UI'],
      'contact.copied': 'Copied!',
    },
    ru: {
      title: 'Zeyad Elshenhab — Flutter-разработчик',
      description: 'Zeyad Elshenhab — Flutter-разработчик: кроссплатформенные мобильные приложения для продакшена. Нативный Kotlin и Swift, real-time чаты, чистая архитектура, BLoC. Приложения в App Store, Google Play и RuStore.',
      roles: ['Real-time приложения', 'Нативный Kotlin и Swift', 'Чистая архитектура', 'BLoC и Cubit', 'Pixel-perfect UI'],
      'contact.copied': 'Скопировано!',

      'nav.about': 'Обо мне',
      'nav.experience': 'Опыт',
      'nav.projects': 'Проекты',
      'nav.skills': 'Навыки',
      'nav.contact': 'Контакты',
      'nav.resume': 'Резюме',

      'hero.badge': 'Открыт к новым предложениям и фрилансу',
      'hero.hi': 'Привет, я',
      'hero.role': 'Flutter-разработчик',
      'hero.intro': 'Создаю быстрые и аккуратные кроссплатформенные мобильные приложения на Flutter и Dart, а когда этого требует платформа — пишу <strong>нативный код на Kotlin и Swift</strong>. От real-time чатов и социальных платформ до криптокошельков, VPN-клиентов и сервисов доставки еды, которые <strong>опубликованы в App Store, Google Play и RuStore</strong>.',
      'hero.cta1': 'Мои проекты',
      'hero.cta2': 'Связаться',
      'hero.scroll': 'вниз',
      'stat.years': 'Года коммерческого<br/>опыта',
      'stat.apps': 'Мобильных<br/>приложений',
      'stat.stores': 'Магазина<br/>приложений',
      'chip.adam': '★ 5.0 · В сторах',
      'chip.vpn': 'Подключено · 00:42',

      'about.eyebrow': '01 — Обо мне',
      'about.title': 'Превращаю идеи<br/><span class="grad">в живые приложения.</span>',
      'about.lead': 'Я Flutter-разработчик из России, выпускник Казанского федерального университета по направлению «Программная инженерия». Более 3 лет разрабатываю продакшн-приложения для стартапов и клиентов — проектирую масштабируемую архитектуру, реализую real-time функциональность и прорабатываю детали интерфейса, чтобы приложение ощущалось нативным на обеих платформах. Я не ограничиваюсь Dart: когда функции нужна сама платформа, пишу нативный код на Kotlin для Android и Swift для iOS и связываю его с Flutter.',
      'about.c1t': 'Real-time системы',
      'about.c1p': 'Чаты, индикаторы набора текста, счётчики непрочитанных и живые уведомления через WebSocket.',
      'about.c2t': 'Чистая архитектура',
      'about.c2p': 'BLoC/Cubit, SOLID и слоистые модули, которые легко поддерживать по мере роста продукта.',
      'about.c3t': 'Нативный Kotlin и Swift',
      'about.c3p': 'Нативный код для Android и iOS через platform channels — VPN-туннели, платежи, карты и не только.',
      'about.c4t': 'Публикация в сторах',
      'about.c4p': 'От первого коммита до релизов в App Store, Google Play, RuStore и TestFlight.',

      'exp.eyebrow': '02 — Опыт',
      'exp.title': 'Где я <span class="grad">работал.</span>',
      'exp.role': 'Flutter-разработчик',
      'exp.d1': 'Ноя 2025 — Сейчас',
      'exp.d2': 'Май 2025 — Окт 2025',
      'exp.d3': 'Фев 2024 — Апр 2025',
      'exp.ds1': 'Разрабатываю <b>2Arrowz</b> — приложение для знакомств, объединяющее людей в сферах дружбы, романтики, бизнеса и путешествий.',
      'exp.ds2': 'Реализовал свайп-механику подбора с кастомными анимациями и обработкой жестов.',
      'exp.ds3': 'Создал real-time чат: списки сообщений, индикатор набора текста, счётчики непрочитанных, логика скролла и кастомные поля ввода.',
      'exp.ds4': 'Разработал чат с ИИ-ассистентом: анимированные ответы, умные подсказки и собственная логика интерфейса.',
      'exp.ds5': 'Выпустил <b>Tunnel67</b> — VPN-клиент, опубликованный в App Store и Google Play.',
      'exp.f1': 'Разрабатывал и масштабировал <b>Founders</b> — социальную сеть для предпринимателей: нетворкинг, управление инвестициями и общение в реальном времени.',
      'exp.f2': 'Использовал WebSocket для мгновенных сообщений, живых уведомлений о запросах на партнёрство и обновлений по инвестициям.',
      'exp.f3': 'Следовал принципам Clean Architecture с BLoC для предсказуемого, тестируемого и модульного кода.',
      'exp.f4': 'Проектировал переиспользуемые UI-компоненты для профилей, инвестиционных предложений, запросов на партнёрство и чатов.',
      'exp.g1': 'Разрабатывал и дорабатывал приложение <b>криптокошелька</b> на Flutter и Dart.',
      'exp.g2': 'Интегрировал Ethereum через web3dart для вызова смарт-контрактов и получения балансов в реальном времени.',
      'exp.g3': 'Создал продвинутый UI: динамические AppBar, отображение балансов и шторки управления токенами.',
      'exp.g4': 'Работал в agile-команде над безопасными и отзывчивыми кроссплатформенными решениями.',
      'exp.freelance': 'Flutter-разработчик (фриланс)',
      'exp.adamCo': 'Ресторан «Адам и Ева» · Казань',
      'exp.a1': 'С нуля разработал приложение для заказа еды для ресторана — меню, корзина, оформление и отслеживание заказа.',
      'exp.a2': 'Опубликовал его в <b>App Store, Google Play и RuStore</b> и провёл весь процесс релиза.',
      'edu.degree': 'Бакалавр, Программная инженерия',
      'edu.uni': 'Казанский федеральный университет',
      'edu.note': 'В 2025 году получил диплом бакалавра по программной инженерии в одном из старейших университетов России.',

      'tag.anim': 'Анимации',
      'tag.aichat': 'ИИ-чат',
      'tag.security': 'Безопасность',
      'tag.freelance': 'Фриланс',
      'tag.release': 'Релиз в сторах',
      'tag.bio': 'Биометрия',
      'tag.gestures': 'Жесты',

      'proj.eyebrow': '03 — Избранные работы',
      'proj.title': 'Приложения, которые я <span class="grad">создал и выпустил.</span>',
      'proj.lead': 'Реальные продукты, реальные пользователи. Нажмите на скриншот, чтобы открыть его в полном размере.',
      'pill.live': 'В сторах',
      'pill.beta': 'Бета в TestFlight',
      'pill.freelance': 'Фриланс',
      'store.apple': 'Загрузите в',
      'store.play': 'Доступно в',
      'store.ru': 'Доступно в',
      'store.tf': 'Сейчас в',

      'adam.name': 'Адам и Ева',
      'adam.sub': 'Заказ еды · Ресторан в Казани',
      'adam.desc': 'Полноценный онлайн-заказ для ресторана в Казани. Пользователи просматривают меню по категориям, ищут блюда, добавляют их в корзину, оформляют заказ и отслеживают его статус в реальном времени — всё в премиальном тёмно-золотом дизайне.',
      'adam.f1': 'Меню с категориями, поиском и промо-баннерами',
      'adam.f2': 'Корзина, оформление и отслеживание заказа',
      'adam.f3': 'Безопасная авторизация по email и хранение данных',
      'adam.f4': 'Опубликовано в 3 сторах, включая RuStore',

      'tun.sub': 'Защищённый VPN-клиент · iOS и Android',
      'tun.desc': 'Быстрое и стабильное VPN-приложение с подключением в одно касание. Построено на нативных VPN-возможностях каждой платформы и связано с аккуратным Flutter-интерфейсом — список серверов, таймер и статус подключения, работа без разрывов.',
      'tun.f1': 'Подключение в одно касание с таймером сессии',
      'tun.f2': 'Выбор сервера и статус подключения',
      'tun.f3': 'Нативный VPN-слой на Kotlin и Swift',
      'tun.f4': 'Готовность к подпискам и требованиям сторов',

      'arr.sub': 'Знакомства по энергии · ИИ-ассистент',
      'arr.desc': 'Приложение для знакомств, которое соединяет людей по их «энергии» в разных сферах — романтика, дружба, бизнес, досуг, спорт и путешествия. Пользователи создают энергетический профиль по карте рождения, свайпают анкеты, проверяют совместимость с кем угодно и получают советы от ИИ-ассистента.',
      'arr.f1': 'Свайп-подбор с кастомными жестами и анимациями',
      'arr.f2': 'Онбординг по карте рождения и энергетический профиль',
      'arr.f3': 'Совместимость: физическая, эмоциональная, ментальная, духовная',
      'arr.f4': 'Real-time чат и анимированный чат с ИИ-ассистентом',

      'gy.sub': 'Криптокошелёк · Ethereum и BEP20',
      'gy.desc': 'Мультикошелёк с балансами в реальном времени, управлением токенами и историей транзакций. Работает со смарт-контрактами Ethereum через web3dart и защищает пользователя сид-фразой и биометрическим подтверждением.',
      'gy.f1': 'Несколько кошельков, список токенов и живые балансы',
      'gy.f2': 'Графики цен за период от 1Д до 2Г',
      'gy.f3': 'Отправка и получение со статусом транзакций',
      'gy.f4': 'Сид-фраза, Face ID и отпечаток пальца',

      'pill.social': 'Соцсеть',
      'pill.personal': 'Личный проект',
      'store.code': 'Код на',

      'fo.sub': 'Нетворкинг-платформа для предпринимателей',
      'fo.desc': 'Социальная сеть, в которой предприниматели находят друг друга, налаживают профессиональные связи, управляют инвестициями и общаются в реальном времени. Пользователи ищут основателей по отраслям и интересам, отправляют запросы на партнёрство и следят за обновлениями инвестиций.',
      'fo.f1': 'Поиск основателей с тегами отраслей и фильтрами',
      'fo.f2': 'Чат в реальном времени через WebSocket',
      'fo.f3': 'Запросы на партнёрство с живыми уведомлениями',
      'fo.f4': 'Инвестиционные предложения и обновления',

      'sk2.sub': 'Приложение для ИИ-диагностики',
      'sk2.desc': 'Сфотографируйте пятно на коже или загрузите снимок из галереи — ML-модель определит, доброкачественное оно или злокачественное, и покажет уровень уверенности. Модель работает через Flask REST API, а приложение построено на Clean Architecture и Firebase.',
      'sk2.f1': 'Съёмка камерой или загрузка из галереи',
      'sk2.f2': 'Результат ML-модели с уровнем уверенности',
      'sk2.f3': 'Firebase Auth со входом через Google',
      'sk2.f4': 'Интерфейс на английском и русском',

      'more.skinPill': 'ИИ · Медицина',
      'more.skinTitle': 'Распознавание рака кожи',

      'skills.eyebrow': '04 — Инструменты',
      'skills.title': 'Навыки и <span class="grad">технологии.</span>',
      'sk.mobile': 'Мобильная разработка',
      'sk.arch': 'Архитектура и состояние',
      'sk.net': 'Сеть и бэкенд',
      'sk.pay': 'Платежи и карты',
      'sk.quality': 'Качество и инструменты',
      'sk.langs': 'Языки',
      'sk.iap': 'Встроенные покупки',
      'sk.unit': 'Unit-тесты',
      'sk.widget': 'Widget-тесты',
      'sk.perf': 'Производительность',
      'lang.ar': 'Арабский',
      'lang.ru': 'Русский',
      'lang.en': 'Английский',
      'lang.native': 'Родной',
      'lang.fluent': 'Свободно',

      'contact.eyebrow': '05 — Связаться',
      'contact.title': 'Есть идея приложения?<br/><span class="grad">Давайте создадим его вместе.</span>',
      'contact.lead': 'Открыт к полной занятости, контрактам и фриланс-проектам. Быстрее всего со мной можно связаться в Telegram или по почте.',
      'contact.copy': 'Скопировать email',
      'contact.phone': 'Телефон',
      'footer.tag': 'Сделано с вниманием к деталям · Россия',
    },
  };

  const SUPPORTED = ['en', 'ru'];
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const original = new Map(nodes.map(el => [el, el.innerHTML]));
  const originalByKey = {};
  nodes.forEach(el => { originalByKey[el.dataset.i18n] ??= el.innerHTML; });
  const links = [...document.querySelectorAll('[data-href-ru]')].map(el => [el, el.getAttribute('href')]);
  const metaDesc = document.querySelector('meta[name="description"]');
  let lang = 'en';

  const t = key => STRINGS[lang][key] ?? STRINGS.en[key] ?? originalByKey[key] ?? key;

  const apply = next => {
    lang = next;
    document.documentElement.lang = lang;
    nodes.forEach(el => {
      el.innerHTML = lang === 'en' ? original.get(el) : (STRINGS[lang][el.dataset.i18n] ?? original.get(el));
    });
    links.forEach(([el, href]) => el.setAttribute('href', lang === 'ru' ? el.dataset.hrefRu : href));
    document.title = t('title');
    metaDesc?.setAttribute('content', t('description'));
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  };

  const fromUrl = new URLSearchParams(location.search).get('lang');
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch {}
  const initial = [fromUrl, saved].find(l => SUPPORTED.includes(l)) || 'en';
  if (initial !== 'en') apply(initial);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
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
  }));

  window.i18n = { t, get lang() { return lang; } };
})();
