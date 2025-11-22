import { test } from '@playwright/test';
test.use({ headless: false });
import { MyntraHome } from './pages/Myntra.page';

test('Search Bag on Myntra using POM', async ({ page }) => {
	const home = new MyntraHome(page);

	// Open Myntra
	await home.goto();

	// Search BAG
	await home.search('bag');

	// Verify results visible
	await home.verifyResults();
});
