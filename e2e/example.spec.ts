import { test, expect } from '@playwright/test';

// -------------------------------------------------------
// Home Page
// -------------------------------------------------------
test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the GT_Gaming Hub heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('GT_Gaming Hub');
  });

  test('should display game cards', async ({ page }) => {
    const cards = page.locator('app-home .grid > div');
    await expect(cards).toHaveCount(6);
  });

  test('should filter to Let\'s Play games only', async ({ page }) => {
    await page.getByRole('button', { name: "Let's Play" }).click();
    const cards = page.locator('app-home .grid > div');
    await expect(cards).toHaveCount(4);
  });

  test('should filter to Chill games only', async ({ page }) => {
    await page.getByRole('button', { name: 'Chill' }).click();
    const cards = page.locator('app-home .grid > div');
    await expect(cards).toHaveCount(2);
  });

  test('should filter games by search query', async ({ page }) => {
    await page.getByPlaceholder('Search games...').fill('chrono');
    const cards = page.locator('app-home .grid > div');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Chrono Trigger');
  });

  test('should show empty state when search finds nothing', async ({ page }) => {
    await page.getByPlaceholder('Search games...').fill('zzznomatch');
    await expect(page.getByText('No games match your search.')).toBeVisible();
  });

  test('should navigate to game detail on View Details click', async ({ page }) => {
    await page.getByRole('button', { name: 'View Details' }).first().click();
    await expect(page).toHaveURL(/\/game\//);
  });
});

// -------------------------------------------------------
// Game Detail Page
// -------------------------------------------------------
test.describe('Game Detail Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/game/chrono');
  });

  test('should display the game title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Chrono Trigger');
  });

  test('should display the stream type badge', async ({ page }) => {
    await expect(page.getByText("Let's Play", { exact: true })).toBeVisible();
  });

  test('should display stream sessions', async ({ page }) => {
    await expect(page.getByText("Let's Play Chrono Trigger #1")).toBeVisible();
    await expect(page.getByText("Let's Play Chrono Trigger #2")).toBeVisible();
  });

  test('should increment upvote count on click', async ({ page }) => {
    const upvoteButton = page.getByRole('button', { name: /▲/ });
    const initialText = await upvoteButton.innerText();
    const initialCount = parseInt(initialText.replace('▲', '').trim());

    await upvoteButton.click();
    await expect(upvoteButton).toContainText(String(initialCount + 1));
  });

  test('should increment downvote count on click', async ({ page }) => {
    const downvoteButton = page.getByRole('button', { name: /▼/ });
    const initialText = await downvoteButton.innerText();
    const initialCount = parseInt(initialText.replace('▼', '').trim());

    await downvoteButton.click();
    await expect(downvoteButton).toContainText(String(initialCount + 1));
  });

  test('should open subscribe modal on session Subscribe click', async ({ page }) => {
    await page.getByRole('button', { name: 'Subscribe' }).first().click();
    await expect(page.getByText('Subscribe to session')).toBeVisible();
  });

  test('should close subscribe modal on Cancel', async ({ page }) => {
    await page.getByRole('button', { name: 'Subscribe' }).first().click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByText('Subscribe to session')).not.toBeVisible();
  });

  test('should close subscribe modal on backdrop click', async ({ page }) => {
    await page.getByRole('button', { name: 'Subscribe' }).first().click();
    await page.locator('.fixed.inset-0').click({ position: { x: 10, y: 10 } });
    await expect(page.getByText('Subscribe to session')).not.toBeVisible();
  });

  test('should navigate back to home on Back to Library click', async ({ page }) => {
    await page.getByRole('button', { name: /Back to Library/ }).click();
    await expect(page).toHaveURL('/');
  });
});

// -------------------------------------------------------
// About Page
// -------------------------------------------------------
test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should display the streamer name', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('GT_Gaming');
  });

  test('should display the avatar image', async ({ page }) => {
    const avatar = page.locator('img[alt="GT_Gaming Avatar"]');
    await expect(avatar).toBeVisible();
  });

  test('should display all platform links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'YouTube' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Twitch' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Kick' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Rumble' })).toBeVisible();
  });

  test('should display both stream type cards', async ({ page }) => {
    await expect(page.getByText("Let's Play")).toBeVisible();
    await expect(page.getByText('Chill Stream')).toBeVisible();
  });
});

// -------------------------------------------------------
// Navigation
// -------------------------------------------------------
test.describe('Navigation', () => {
  test('should navigate to About page from navbar', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
  });

  test('should navigate home from navbar brand link', async ({ page }) => {
    await page.goto('/about');
    await page.getByRole('link', { name: 'GT_Gaming Hub' }).click();
    await expect(page).toHaveURL('/');
  });

  test('should show 404 page for unknown routes', async ({ page }) => {
    await page.goto('/this-does-not-exist');
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Back to Hub' })).toBeVisible();
  });

  test('should navigate home from 404 Back to Hub button', async ({ page }) => {
    await page.goto('/this-does-not-exist');
    await page.getByRole('button', { name: 'Back to Hub' }).click();
    await expect(page).toHaveURL('/');
  });
});
