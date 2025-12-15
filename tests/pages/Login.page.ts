import { Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly url = 'https://www.myntra.com/login';
    constructor(page: Page) {
        this.page = page;
    }
    //Navigate to the Login Page
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

    // Login with valid mobile number + OTP
    async loginWithValidCredentials(mobileNumber: string, otp: string) {

        // 1. Mobile number input
        const mobileInput = this.page.locator('input[type="tel"]');
        await mobileInput.fill(mobileNumber);

        // 2. Verify T&C text
        await expect(
            this.page.locator('text=By continuing, I agree')
        ).toBeVisible();

        // 3. Accept checkbox
        await this.page.locator('input[type="checkbox"]').check();

        // 4. Click Continue / Send OTP
        const continueBtn = this.page.locator('.submitBottomOption');
        await expect(continueBtn).toBeEnabled();
        await continueBtn.click();

        // 5. Wait for OTP container
        const otpContainer = this.page.locator('.otpContainer');
        await expect(otpContainer).toBeVisible();

        // 6. Enter OTP (multiple inputs)
        const otpDigits = otp.split('');
        const otpInputs = this.page.locator('.otpContainer input');

        for (let i = 0; i < otpDigits.length; i++) {
            await otpInputs.nth(i).fill(otpDigits[i]);
        }

        // 7. Verify OTP
        const verifyBtn = this.page.locator('.submitBottomOption');
        await verifyBtn.click();
    }

}