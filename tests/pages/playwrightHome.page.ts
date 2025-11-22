import { Page, expect } from '@playwright/test';

export class PlaywrightHome {
  readonly page: Page;
  readonly url = 'https://playwright.dev';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async expectTitleContains(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text));
  }
  async expectTitleIsExact(text: string) {
    await expect(this.page).toHaveTitle(text);
  }
}
