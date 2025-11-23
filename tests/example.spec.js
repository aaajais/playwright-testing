const { test, expect } = require('@playwright/test');

test('Playwright homepage has Playwright in title', async ({ page }) => {
    // await page.goto('https://google.com');
    // await searchBox.fill('Playwright testing');
    // await page.keyboard.press('Enter');
    
    //NAVIGATE TO PLAYWRIGHT DEV PAGE AND VERIFY TITLE
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);

});
