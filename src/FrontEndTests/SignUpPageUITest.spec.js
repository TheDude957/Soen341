//Test to verify that the user interface of the sign up page is responding properly

const { test, expect } = require("@playwright/test");
test('signuppage_ui_test', async ({ page }) => {
  // Go to http://localhost:3000/signup
  await page.goto('http://localhost:3000/signup');
  // Click [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').click();
  // Click [placeholder="Last Name"]
  await page.locator('[placeholder="Last Name"]').click();
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  // Click [placeholder="Confirm Passowrd"]
  await page.locator('[placeholder="Confirm Passowrd"]').click();
  // Click div[role="button"]:has-text("​")
  await page.locator('div[role="button"]:has-text("​")').click();
  // Click text=Customer
  await page.locator('text=Customer').click();
  // Click div[role="button"]:has-text("​")
  await page.locator('div[role="button"]:has-text("​")').click();
  // Click text=Seller
  await page.locator('text=Seller').click();
  // Click div[role="button"]:has-text("​")
  await page.locator('div[role="button"]:has-text("​")').click();
  // Click text=Admin
  await page.locator('text=Admin').click();
  // Click button:has-text("Create Account")
  await page.locator('button:has-text("Create Account")').click();
  // Click text=Already have an account ?
  await page.locator('text=Already have an account ?').click();
  await expect(page).toHaveURL('http://localhost:3000/login');
});