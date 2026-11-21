# Zeyad Elshenhab — Portfolio

Personal portfolio of Zeyad Elshenhab, Flutter developer (Flutter & Dart, plus native Kotlin & Swift).

**Live:** https://portfolio-zeyad-elshenhab.vercel.app

A static site — plain HTML, CSS and JavaScript, no build step. Available in English, Russian, Spanish, German, French, Portuguese and Turkish (`?lang=ru`, `?lang=es`, …).

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

- `index.html` — page content (English is the source text)
- `i18n.js` — language engine and the language menu
- `lang/*.js` — one translation file per language (English is the source text in `index.html`)
- `script.js` — animations, galleries, lightbox
- `style.css` — styles
- `assets/` — app screenshots, icons and the CV
