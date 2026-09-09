# Hossien Habka — Portfolio

Personal site for **Hossien Habka**, Full-Stack Web & Application Developer (Al Ain / Abu Dhabi, UAE).

Live: https://h-habka.github.io/myPortfolio/

## Homepage

`hero → about → experience → skills → projects → contact`

Primary CTAs: [WhatsApp](https://wa.me/971588930130) and [LinkedIn](https://www.linkedin.com/in/hossien-habka-b67069229).

## Signature 3D

Hero product stack (dashboard, EasyChat phone, editor, Shopify storefront, stack tokens) built with Three.js and React Three Fiber. Camera and layout scrub with GSAP ScrollTrigger on the existing Lenis scroll. `prefers-reduced-motion`, Save-Data, or missing WebGL fall back to the 2D stack field. The WebGL canvas is decorative (`pointer-events: none`) so hero and chrome CTAs stay tappable.

## Scripts

- `npm start` — local dev server
- `npm run build` — production build (GitHub Pages project site; `homepage` is set)
- `npm run deploy` — publish the `build/` folder to the `gh-pages` branch

Create React App prefixes assets with `PUBLIC_URL` (`/myPortfolio`). Use `src/utils/publicUrl.js` for files served from `public/`.
