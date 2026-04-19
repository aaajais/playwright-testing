import { Page } from '@playwright/test';

export class GenzPage {
   readonly page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   // Click on Gen Z link
   async clickOnGenzLink() {
      await this.page.locator('a:has-text("GENZ")').click();
   }
}