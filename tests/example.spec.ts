import { test } from '@playwright/test';
import { PlaywrightHome } from './pages/playwrightHome.page';

test('Playwright homepage has Playwright in title (POM)', async ({ page }) => {
  const home = new PlaywrightHome(page);
  // Navigate to Playwright site and verify title
  await home.goto();
  // Verify the title contains "Playwright test"
  await home.expectTitleContains('Playwright');
});

