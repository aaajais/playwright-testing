import { test, expect } from '@playwright/test';

test('Playwright homepage has Playwright in title', async ({ page }) => {
  // Navigate to Playwright site and verify title
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
