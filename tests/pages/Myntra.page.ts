import { Page, expect } from '@playwright/test';

export class MyntraHome {
  readonly page: Page;
  readonly url = 'https://www.myntra.com/';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    try {
      await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    } catch (e) {
      // fallback: try with http or longer wait
      try {
        await this.page.goto(this.url.replace('https://', 'http://'), { waitUntil: 'domcontentloaded', timeout: 30000 });
      } catch (err) {
        // rethrow original error for visibility
        throw e;
      }
    }
  }

  async search(query: string) {
    const searchInput = this.page.locator('input[placeholder="Search for products, brands and more"]');
    await searchInput.fill(query);
    await searchInput.press('Enter');
  }

  async verifyResults() {
    const product = this.page.locator('li.product-base').first();
    await expect(product).toBeVisible({ timeout: 15_000 });
  }
}
