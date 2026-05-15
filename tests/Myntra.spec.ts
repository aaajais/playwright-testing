import { test } from '@playwright/test';
test.use({ headless: false });
import { MyntraHome } from './pages/Myntra.page';
import * as XLSX from 'xlsx';

// Function to read Excel file
function readExcelFile(filePath: string, sheetName?: string) {
    const workbook = XLSX.readFile(filePath);
    const sheet = sheetName ? workbook.Sheets[sheetName] : workbook.Sheets[workbook.SheetNames[0]];
    return XLSX.utils.sheet_to_json(sheet);
}

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


//click on Every tab on Myntra
test('Click	 on Man	tab on Myntra', async ({ page }) => {
	const home = new MyntraHome(page);
	// Open Myntra
	await home.goto();
	await home.getAllMenItems();
	//wait for some time
	await page.waitForTimeout(5000);
});

//click on Womem tab on Myntra
test('click on women tab on Myntra', async ({ page }) => {
	const home = new MyntraHome(page);
	// Open Myntra
	await home.goto();
	await home.clickOnWomenTab();
});

//click on Kids tab on Myntra
test('click on kids tab on Myntra', async ({ page }) => {
	const home = new MyntraHome(page);
	// Open Myntra
	await home.goto();
	await home.clickOnKidstab();
});

// Example test to read data from Excel file
test('Read data from Excel file', async ({ page }) => {
    // Assuming you have an Excel file named 'testdata.xlsx' in the root directory
    const data = readExcelFile('./testdata.xlsx');
    console.log('Excel data:', data);
    // You can use the data in your tests
    // For example, if the Excel has search terms:
    // const searchTerms = data.map(row => row.searchTerm);
    // Then loop through them
});

//click on man t-shirts tab on Myntra
test('click on man t-shirts tab on Myntra', async ({ page }) => {
	const home = new MyntraHome(page);
	// Open Myntra
	await home.goto();
	await page.waitForTimeout(5000);
	await home.clickOnManTshirtTab();
});

//click on recommended tab and select low to high on Myntra
test('click on recommended tab and select low to high on Myntra', async ({ page }) => {
	const home = new MyntraHome(page);
	//open myntra
	await home.goto();
	await page.waitForTimeout(5000);
	await home.clickOnManTshirtTab();
	await page.waitForTimeout(5000);
	await home.selectPriceLowToHigh();
	await page.waitForTimeout(5000);

});

//select loesst price product
test('select lowest price product', async ({ page }) => {
	const home = new MyntraHome(page);
	//open myntra
	await home.goto();
	await page.waitForTimeout(5000);
	await home.clickOnManTshirtTab();
	await page.waitForTimeout(5000);
	await home.selectPriceLowToHigh();
	await page.waitForTimeout(5000);
	await home.selectMostDiscounted();
	await page.waitForTimeout(5000);
});

//add to product to bag
test('add to product to bag', async ({ page }) => {
	const home = new MyntraHome(page);	
	//open myntra
	await home.goto();
	await page.waitForTimeout(5000);	
	await home.clickOnManTshirtTab();
	await page.waitForTimeout(5000);
	await home.selectPriceLowToHigh();
	await page.waitForTimeout(5000);
	await home.selectMostDiscounted();
	await page.waitForTimeout(5000);
	await home.checkPincodeAndAddToCart('123456');
	await page.waitForTimeout(5000);
});

//read excel file//



