import { test } from '@playwright/test';
test.use({ headless: false });
import { MyntraHome } from './pages/Myntra.page';

// Test to search for Bag and Phone on Myntra
test('Search Bag on Myntra using POM', async ({ page }) => {
	const home = new MyntraHome(page);

	// Open Myntra
	await home.goto();
	// Search BAG
	await home.search('bag');
	// Verify results visible
	await home.verifyResults();
	//wait for some time
	await page.waitForTimeout(5000);
	//clear search box
	const searchInput = page.locator('input[placeholder="Search for products, brands and more"]');
	await searchInput.fill('');
	//Enter phone in search box
	await home.search('phone');
	// Verify results visible
	await home.verifyResults();
});

//click on Man tab on Myntra
test('Click	 on Man	tab on Myntra', async ({ page }) => {
	const home = new MyntraHome(page);	
	// Open Myntra
	await home.goto();
	await home.clickOnManTab();
});