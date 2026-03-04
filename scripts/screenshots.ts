/**
 * Screenshot generation script — captures all pages at three breakpoints.
 *
 * Breakpoints:
 *   mobile  — 390px  (iPhone 14)
 *   tablet  — 768px  (iPad)
 *   desktop — 1280px (standard laptop)
 *
 * Usage:
 *   npx ts-node scripts/screenshots.ts
 *   (requires ng serve to be running on http://localhost:4200)
 *
 * Output: public/images/screenshots/<page>-<breakpoint>.png
 */

import { chromium } from '@playwright/test';
import path from 'path';

const BASE_URL = 'http://localhost:4200';
const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'screenshots');

const VIEWPORTS = [
  { name: 'mobile',  width: 390,  height: 844  },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'desktop', width: 1280, height: 800  },
];

const PAGES = [
  { name: 'home',        path: '/'           },
  { name: 'game-detail', path: '/game/ff7'   },
  { name: 'about',       path: '/about'      },
  { name: 'not-found',   path: '/does-not-exist' },
];

(async () => {
  const browser = await chromium.launch();

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    for (const route of PAGES) {
      await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
      const file = path.join(OUT_DIR, `${route.name}-${viewport.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`✓ ${route.name}-${viewport.name}.png`);
    }

    await context.close();
  }

  await browser.close();
  console.log('\nAll screenshots saved to public/images/screenshots/');
})();
