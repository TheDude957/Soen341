//Test to verify that the user interface of the homepage is responding properly

const { test, expect } = require("@playwright/test");
test('homepage_ui_test', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');
  // Click [placeholder="Search Products"]
  await page.locator('[placeholder="Search Products"]').click();
  // Click [aria-label="search"]
  await page.locator('[aria-label="search"]').click();
  // Click text=Group A Store
  await page.locator('text=Group A Store').click();
});