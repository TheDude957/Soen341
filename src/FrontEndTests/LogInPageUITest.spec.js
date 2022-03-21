//Test to verify that the user interface of the log in page is responding properly

const { test, expect } = require("@playwright/test");
test('loginpage_ui_test', async ({ page }) => {
  // Go to http://localhost:3000/login
  await page.goto('http://localhost:3000/login');
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  // Click text=Sign in
  await page.locator('text=Sign in').click();
  // Click text=Forgot password
  await page.locator('text=Forgot password').click();
  await expect(page).toHaveURL('http://localhost:3000/login');
  // Click text=New account
  await page.locator('text=New account').click();
  await expect(page).toHaveURL('http://localhost:3000/signup');
});