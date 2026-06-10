import { test, expect } from '@playwright/test'

//open application//
test('open application', async ({ page }) => {
    await page.goto('https://demoqa.com/');
})
//clikc on from//
test('clikc on form', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    // Verify Forms is visible
    await expect(
        page.getByText('Forms')
    ).toBeVisible();
    // Click Forms
    await page.getByText('Forms').click();
})
//clik on Practice Form//
test('Practice Form', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    // Verify Forms is visible
    await expect(
        page.getByText('Forms')
    ).toBeVisible();
    // Click Forms
    await page.getByText('Forms').click();
    await expect(page.getByText('Practice Form')).toBeVisible()
    await page.getByText('Practice Form').click();

})
//fill formm//
test('fill from', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    // Verify Forms is visible
    await expect(
        page.getByText('Forms')
    ).toBeVisible();
    // Click Forms
    await page.getByText('Forms').click();
    await expect(page.getByText('Practice Form')).toBeVisible()
    await page.getByText('Practice Form').click();
    
    await page.locator('#subjectsInput').type('English');
    await page.locator('#subjectsInput').press('Enter');

    await page.locator('#state').click();
    await page.locator('#react-select-3-input').type('NCR');
    await page.locator('#react-select-3-input').press('Enter');

    await page.locator('#city').click();
    await page.locator('#react-select-4-input').type('Delhi');
    await page.locator('#react-select-4-input').press('Enter');
})

//open element//
test('open element',async({page})=>{
    await page.goto('https://demoqa.com/');
    // Verify Elements is visible
    await expect(
        page.getByText('Elements')
    ).toBeVisible();
    // Click Elements
    await page.getByText('Elements').click();
})




