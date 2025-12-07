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
  // Search for a product
  async search(query: string) {
    const searchInput = this.page.locator('input[placeholder="Search for products, brands and more"]');
    await searchInput.fill(query);
    await searchInput.press('Enter');
  }
  // Verify that search results are visible
  async verifyResults() {
    const product = this.page.locator('li.product-base').first();
    await expect(product).toBeVisible({ timeout: 15_000 });
  }
  // New method to clear the search box
  async clearSearch() {
    const searchInput = this.page.locator('input[placeholder="Search for products, brands and more"]');
    await searchInput.fill('');
  }
  // Click on Mam tab on Myntra
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

  //click on Women tab on Myntra
  async clickOnWomenTab() {
    const WomenTab = this.page.locator('a[data-group="women"]');
    await WomenTab.hover();

    const items = this.page.locator('.desktop-pane a');

    const count = await items.count();
    console.log("Total items:", count);
    for (let i = 0; i < count; i++) {
      console.log(await items.nth(i).innerText());
    }
  };

  //click on Kids tab on Myntra
  async clickOnKidstab() {
    const KidsTab = this.page.locator('a[data-group="kids"]');
    await KidsTab.hover();
    const items = this.page.locator('.desktop-pane a');

    const count = await items.count();
    console.log("Total items:", count);

    for (let i = 0; i < count; i++) {
      console.log(await items.nth(i).innerText());
    }

  }


  // click on men → t-shirts tab under myntra
  async clickOnManTshirtTab() {
    // Hover on MEN tab
    const menTab = this.page.locator('a[data-group="men"]');
    await menTab.hover();
    // Wait for submenu to appear
    await this.page.waitForSelector('a[href="/men-tshirts"], a[href="/men/tshirts"]', {
      state: 'visible'
    });
    // sometimes Myntra uses this path: /men-tshirts. 
    // fallback to both locators
    const tshirtTab = this.page.locator('a[href="/men-tshirts"], a[href="/men/tshirts"]');
    // Click T-Shirts
    await tshirtTab.click();
  }

  //click recommended tab on Myntra and select low to high
  async selectPriceLowToHigh() {
    await this.page.locator('.sort-sortBy').click();
    await this.page.locator('li', { hasText: 'Price: Low to High' }).click();
  }


  //if lower to high is selected select most discounted
  async selectMostDiscounted() {
    const recommendedTab = this.page.locator('div.sort-sortBy');
    await recommendedTab.click();
    // const mostDiscountedOption = this.page.locator('label[for="discount_desc"]');
    // await mostDiscountedOption.click();
    // Select the first product from the sorted list
    const firstProduct = this.page.locator('li.product-base').first();
    await firstProduct.click();
  }

  //add to product cart first check pin code availability
  async checkPincodeAndAddToCart(pincode: string) {
    // Correct input field
    const pincodeInput = this.page.locator('input[placeholder="Enter pincode"]');

    // Wait for pincode input
    await pincodeInput.waitFor({ state: 'visible', timeout: 10000 });

    // Fill pincode
    await pincodeInput.fill(pincode);

    // Click "Check"
    const checkButton = this.page.locator('button:has-text("Check")');
    await checkButton.click();

    // Wait for availability message (Available / Delivery by...)
    const availabilityMessage = this.page.locator("div:has-text('Available')");
    await availabilityMessage.waitFor({ state: 'visible', timeout: 15000 });

    // Click "Add to Bag"
    const addToBagButton = this.page.locator("button:has-text('Add to Bag')");
    await addToBagButton.click();
  }

  
  










}
