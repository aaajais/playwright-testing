import { Page, expect } from '@playwright/test';

export class MyntraHome {
    readonly page: Page;
    readonly url = 'https://www.myntra.com/';

    constructor(page: Page) {
        this.page = page;
    }
    // Navigate to Myntra homepage
    async goto() {
    await this.page.goto(this.url, {
        waitUntil: 'load',
        timeout: 60000
    });

    await this.page.waitForLoadState('networkidle');
}

    ///Click on man tab from home page
    async getAllMenItems() {
        const menTab = this.page.locator('a[data-group="men"]');
        await menTab.hover();
        const items = this.page.locator('.desktop-pane a');
        const count = await items.count();
        console.log("Total items:", count);
        for (let i = 0; i < count; i++) {
            console.log(await items.nth(i).innerText());
        }
    }

    //verify fotter text
    async verifyFooterText(expectedText: string) {
        const footer = this.page.locator('footer');
        await expect(footer).toContainText(expectedText);
    }

   

}