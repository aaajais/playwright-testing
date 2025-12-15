import { Page, expect } from '@playwright/test';

export class MyntraHome {
    readonly page: Page;
    readonly url = 'https://www.myntra.com/';

    constructor(page: Page) {
        this.page = page;
    }
    // Navigate to Myntra homepage
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

    //verify under man tab all items
    
   

}