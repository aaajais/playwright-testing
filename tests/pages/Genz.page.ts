import { Page } from '@playwright/test';

export class GenzPage {
   readonly page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   // Click on Gen Z link in the desktop header
   async clickOnGenzLink() {
      await this.page.locator('#desktop-header-cnt').getByRole('link', { name: 'Genz' }).click();
   }
}