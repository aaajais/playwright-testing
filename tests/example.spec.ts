import { test } from '@playwright/test';
import { PlaywrightHome } from './pages/playwrightHome.page';

test('Playwright homepage has Playwright in title (POM)', async ({ page }) => {
  const home = new PlaywrightHome(page);
  await home.goto();
  await home.expectTitleContains('Playwright');
});
