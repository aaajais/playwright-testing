import {test} from '@playwright/test';
test.use({ headless: false });
import { MyntraHome } from './pages/Myntra.page';
import { LoginPage } from './pages/Login.page';

// Test to login with invalid credentials on Myntra
test('Login with invalid credentials on Myntra using POM', async ({ page }) => {
    const home = new MyntraHome(page);
    // Open Myntra
    await home.goto();
    const login = new LoginPage(page);
    await login.gote();
   // await login.loginWithInvalidCredentials('invalid@example.com', 'wrongpassword');
    await login.loginWithInvalidCredentials('9999999999', 'wrongpassword');
   
});
