import { Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly url = 'https://www.myntra.com/login';
    constructor(page: Page) {
        this.page = page;
    }
    //Navigate to the Login Paage
    async goto() {
        try {
            await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        } catch (e) {
            //fallback: try with http or longer wait
            try {
                await this.page.goto(this.url.replace('https://', 'http://'), { waitUntil: 'domcontentloaded', timeout: 30000 });
            } catch (err) {
                //rethrow original error for visibility
                throw e;
            }
        }
    }
    //Login with invalid credentials
    async loginWithInvalidCredentials(email: string, password: string) {
        const mobileInput = this.page.locator('input[type="tel"]');
        await mobileInput.fill('8521207529');
        //verify test header
        await expect(this.page.locator('text=By continuing, I agree')).toBeVisible();
        //click on check box
        await this.page.locator('input[type="checkbox"]').check()
        const loginButton = this.page.locator('.submitBottomOption')
        // await loginButton.click();
    }

    //login with valid credentials
    async loginWithValidCredentials(mobileInput: string, otp: string) {
        const mobileInputField = this.page.locator('input[type="tel"]');
        await mobileInputField.fill(mobileInput);
        await this.page.waitForTimeout(2000);
        //click on check box
        await this.page.locator('input[type="checkbox"]').check()
        const loginButton = this.page.locator('.submitBottomOption')
        //enter otp
        const otpInputField = this.page.locator('input[type="number"]');
        await otpInputField.fill(otp);
        //verify test header
        await expect(this.page.locator('text=By continuing, I agree')).toBeVisible();


        // await loginButton.click();
    }
}