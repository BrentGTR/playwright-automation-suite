
const { test, expect, devices } = require('@playwright/test');
const iPhone11 = devices['iPhone 11'];
const testData = require('../data/testData.json');

test.use({ ...iPhone11 });

test('Mobile login with valid credentials', async ({ page }) => {
  // Arrange
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  const { username, password } = testData.ui.login.validUser;

  // Act
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('input[type="submit"]');

  // Assert
  await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm');
  await expect(page.locator('#accountTable')).toBeVisible();
});
  