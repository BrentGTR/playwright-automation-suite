
const { expect } = require('@playwright/test');

async function assertElementVisible(page, selector) {
  await expect(page.locator(selector)).toBeVisible();
}

async function assertURL(page, expectedURL) {
  await expect(page).toHaveURL(expectedURL);
}

module.exports = { assertElementVisible, assertURL };
  