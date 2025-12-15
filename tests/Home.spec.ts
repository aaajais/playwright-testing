import { test } from '@playwright/test';
test.use({ headless: false });
import { MyntraHome } from './pages/Myntra.page';
import { LoginPage } from './pages/Login.page';


// Test to login with invalid credentials on Myntra
test('Login with invalid credentials on Myntra using POM', async ({ page }) => {
    const home = new MyntraHome(page);
    // Open Myntra
    await home.goto();
    await page.waitForTimeout(5000);
    await home.getAllMenItems();

   
    // await login.loginWithInvalidCredentials('    
})

