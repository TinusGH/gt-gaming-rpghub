# GT_Gaming Hub — Session Memory

## Project
Angular 21 + Tailwind CSS 3 streaming hub. Personal RPG game showcase for GT_Gaming (YouTube/Twitch/Kick/Rumble). Interview prep project.

## Key File Paths
- Design tokens: `tailwind.config.js`
- Global styles + font-face: `src/styles.css`
- Routes (lazy loaded): `src/app/app.routes.ts`
- Game data (single source of truth): `src/app/core/services/game.service.ts`
- Checklist + implementation log: `claude.md`
- E2E tests: `e2e/example.spec.ts`
- Custom font: `public/fonts/tarrgetacadital.ttf` → token `font-tarrget`
- Avatar: `public/images/avatars/AvatarGaming-400.png`
- Covers: `public/images/covers/`

## Standing Instructions
- Always reference `claude.md` checklist when making changes
- Always update the Implementation Status table in `claude.md` after applying any checklist rule
- Use `[CL-X.Y]` annotation format in code comments

## Architecture
- Standalone components (no NgModule)
- Angular signals for reactive state
- Dark mode via `class="dark"` on `<html>` — dark is default
- CSS `@keyframes pageEnter` for route transitions (not Angular animations — caused blank page bugs)
- `*ngFor` + trackBy in home/game-detail; `@for` in about (both patterns present intentionally)

## Known Issues / Decisions
- `@angular/animations` is installed but Angular animation triggers on router outlet caused blank page issues → replaced with CSS keyframes
- Avatar uses `scale-150` zoom class to fill the circular frame
- Chill stream badge: `bg-blue-600 text-white` (not `bg-surface` — was invisible)
- Playwright test for "Let's Play" badge requires `{ exact: true }` to avoid matching session titles

## Checklist Progress (see claude.md for full table)
Implemented: CL-1.2, 1.5, 3.4, 4.1, 4.2, 4.3, 4.4, 5.3, 5.4, 6.1, 6.2, 6.3, 7.2, 7.3, 7.4, 8.4, 9.1, 9.2, 10.1, 11.1
Pending: CL-1.1, 1.3, 2.x, 3.1, 4.5, 4.6, 5.1, 5.2, 8.1, 8.2, 8.5, 11.2, 11.3, 11.4, 12.2, 12.3, 12.4
