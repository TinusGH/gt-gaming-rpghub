# GT_Gaming Hub — CLAUDE.md

This file provides project context, coding standards, and a front-end implementation
checklist for Claude Code sessions working on this project.

---

## Project Overview

GT_Gaming Hub is a personal streaming hub and RPG game showcase for a multi-platform
streamer (YouTube, Twitch, Kick, Rumble). Built with Angular 21 and Tailwind CSS 3.

**Primary goals of this codebase:**
- Angular 21 skills practice (standalone components, signals, lazy loading, routing)
- Tailwind CSS 3 utility-first styling with a custom design token system
- Interview preparation for a front-end developer role focused on Figma-to-code delivery
- Real personal brand site for the GT_Gaming streaming identity

**Stack:** Angular 21 · Tailwind CSS 3 · TypeScript 5.9 · @angular/animations · Playwright (e2e)

---

## Code Annotation Format

Every time a checklist rule below is applied in code, add a comment in this format:

**HTML:**
```html
<!-- [CL-X.Y] Category: What was applied and why -->
```

**TypeScript:**
```typescript
// [CL-X.Y] Category: What was applied and why
```

**CSS:**
```css
/* [CL-X.Y] Category: What was applied and why */
```

Where `X` is the section number (1–12) and `Y` is the sub-item from the checklist below.
This allows any developer or future Claude session to trace exactly which concern drove
each implementation decision.

---

## Front-End Implementation Checklist

### 1. Layout & Responsiveness

- [ ] 1.1 Test the layout at all breakpoints: mobile (< 640px), tablet (640–1024px), desktop (> 1024px), large monitors (> 1280px).
- [ ] 1.2 Use CSS Flexbox or Grid for all layouts; avoid fixed widths for main content areas.
- [ ] 1.3 Test orientation changes (portrait ↔ landscape) on mobile and tablet.
- [ ] 1.4 Check padding and margin consistency across all components.
- [ ] 1.5 Ensure all touch targets are at least 44×44px on mobile (WCAG 2.5.5).

### 2. Text & Internationalization (i18n)

- [ ] 2.1 Test with long text strings to simulate German, French, Spanish content (avg. 30% longer than English).
- [ ] 2.2 Check RTL language support if the platform will target Arabic, Hebrew, etc.
- [ ] 2.3 Ensure containers resize dynamically; no text clipping or overflow without ellipsis.
- [ ] 2.4 Use Angular i18n attributes and translate pipes where multi-language support is required.
- [ ] 2.5 Verify date, time, number, and currency formatting across locales using Angular's built-in pipes.

### 3. Cross-Browser Compatibility

- [ ] 3.1 Test in Chrome, Firefox, Edge, and Safari — both desktop and mobile.
- [ ] 3.2 Verify CSS Grid and Flexbox render consistently across all target browsers.
- [ ] 3.3 Confirm form elements, buttons, and inputs look consistent without browser-default styles bleeding in.
- [ ] 3.4 Use Autoprefixer (already configured via PostCSS) and verify new CSS properties on caniuse.com.

### 4. Accessibility (a11y)

- [ ] 4.1 Ensure all interactive elements (buttons, links, inputs) are fully keyboard-navigable.
- [ ] 4.2 Provide visible :focus-visible states on all interactive elements — never suppress outline without a replacement.
- [ ] 4.3 Use semantic HTML elements: nav, main, section, header, button, a — not div for everything.
- [ ] 4.4 Add ARIA attributes for dynamic content: role="dialog", aria-modal, aria-labelledby, aria-live where appropriate.
- [ ] 4.5 Verify all text/background color combinations meet WCAG AA contrast ratio (4.5:1 normal text, 3:1 large text).
- [ ] 4.6 Test with a screen reader: VoiceOver (macOS/iOS), NVDA (Windows), or TalkBack (Android).

### 5. Images, Icons & Media

- [ ] 5.1 Use srcset and sizes attributes on images displayed at multiple resolutions.
- [ ] 5.2 Optimise image files — target < 200KB for covers, < 100KB for avatars. Use WebP where possible.
- [ ] 5.3 Ensure all images have meaningful alt text; decorative images use alt="".
- [ ] 5.4 Implement fallback content for broken images using Angular's (error) event handler.
- [ ] 5.5 Ensure video/audio elements include fallback text and captions where applicable.

### 6. Dynamic & Real-World Content

- [ ] 6.1 Test worst-case content: very long game titles, missing covers, zero hours, empty session lists.
- [ ] 6.2 Verify components degrade gracefully when data is null, undefined, or malformed.
- [ ] 6.3 Apply text-overflow ellipsis (Tailwind: truncate) and min/max-width constraints for long text.

### 7. Performance & Animations

- [ ] 7.1 Monitor initial page load time — target < 3s on a simulated 3G connection.
- [ ] 7.2 Use CSS transform and opacity for animations only — GPU-accelerated, no layout recalculation.
- [ ] 7.3 Apply lazy loading to feature routes (loadComponent) so only required code is downloaded on navigation.
- [ ] 7.4 Use trackBy with *ngFor to prevent Angular from destroying and re-creating unchanged DOM nodes.

### 8. Testing & Verification

- [ ] 8.1 Use Chrome DevTools device mode to simulate mobile viewports and touch interactions.
- [ ] 8.2 Use DevTools Network tab to simulate throttled connections (Slow 3G, Fast 3G).
- [ ] 8.3 Ensure error states are handled — broken images, not-found routes, empty data.
- [ ] 8.4 Write Playwright e2e tests for all critical user flows.
- [ ] 8.5 Test on at least one real physical device per platform before shipping.

### 9. Maintainability

- [ ] 9.1 Reuse components — shared layout in core/layout, shared data in core/services.
- [ ] 9.2 Keep styling consistent using Tailwind design tokens in tailwind.config.js — avoid magic values.
- [ ] 9.3 Document non-obvious choices with [CL-X.Y] annotations.
- [ ] 9.4 Ensure new features can be added without restructuring existing layouts.

### 10. Security (addition)

- [ ] 10.1 All external links must include rel="noopener noreferrer" to prevent tab-napping via window.opener.
- [ ] 10.2 Use Angular property binding ([src], [href]) not string interpolation for dynamic URLs.
- [ ] 10.3 Never store API keys or credentials in client-side code committed to source control.
- [ ] 10.4 Use Angular's DomSanitizer if user-generated HTML must be rendered — never use innerHTML directly.

### 11. SEO & Metadata (addition)

- [ ] 11.1 Set a meaningful, unique page title per route using Angular's Title service.
- [ ] 11.2 Maintain a consistent heading hierarchy on every page: one h1, followed by h2, then h3.
- [ ] 11.3 Add meta description tags per page using Angular's Meta service.
- [ ] 11.4 Add Open Graph tags (og:title, og:description, og:image) for social media link previews.

### 12. Progressive Enhancement (addition)

- [ ] 12.1 The app should never show a blank screen — always handle missing routes and data with fallbacks.
- [ ] 12.2 Show meaningful loading states or skeleton placeholders for async data.
- [ ] 12.3 Consider adding @angular/pwa for offline capability and device installability.
- [ ] 12.4 Test Core Web Vitals (LCP, CLS, FID) using Lighthouse — aim for green scores.

---

## Current Implementation Status

| Rule | Status | Applied In |
|---|---|---|
| CL-1.2 | ✅ | `home.html` — CSS Grid with sm/md/lg breakpoints for card layout |
| CL-1.2 | ✅ | `game-detail.html` — flex-col md:flex-row for responsive header panel |
| CL-1.2 | ✅ | `about.html` — sm:grid-cols-2 for stream type cards |
| CL-1.2 | ✅ | `navbar.html` — hamburger menu on mobile (hidden sm:flex for desktop links) |
| CL-1.5 | ✅ | All buttons — px-4 py-2 minimum sizing meets 44px touch target |
| CL-3.4 | ✅ | `postcss.config.js` — Autoprefixer configured |
| CL-4.1 | ✅ | All interactive elements use button and a — natively keyboard focusable |
| CL-4.2 | ✅ | `styles.css` — global :focus-visible ring using brand red |
| CL-4.3 | ✅ | `navbar.html` — nav landmark; `layout.html` — main; pages use section |
| CL-4.4 | ✅ | `game-detail.html` — modal uses role="dialog", aria-modal, aria-labelledby |
| CL-4.4 | ✅ | `navbar.html` — hamburger button uses aria-expanded + aria-label |
| CL-5.3 | ✅ | All images — descriptive alt attributes present |
| CL-5.4 | ✅ | `home.ts` / `game-detail.ts` — onCoverError() hides broken cover images |
| CL-6.1 | ✅ | `home.html` — empty state shown when search returns no results |
| CL-6.2 | ✅ | `game-detail.html` — "Game not found" fallback for invalid route IDs |
| CL-7.2 | ✅ | `styles.css` — page transition uses opacity + transform (GPU-accelerated) |
| CL-7.3 | ✅ | `app.routes.ts` — all feature routes use loadComponent for lazy loading |
| CL-7.4 | ✅ | `home.html` / `game-detail.html` — trackBy on all *ngFor loops |
| CL-8.4 | ✅ | `e2e/example.spec.ts` — Playwright tests for all major user flows |
| CL-9.1 | ✅ | core/layout wraps all pages; core/services/game.service.ts is single data source |
| CL-9.2 | ✅ | `tailwind.config.js` — all colours and fonts defined as named design tokens |
| CL-10.1 | ✅ | All external links — rel="noopener noreferrer" applied |
| CL-11.1 | ✅ | `app.routes.ts` — static `title` on Home, About, 404 routes; `game-detail.ts` — dynamic title via `Title` service |
