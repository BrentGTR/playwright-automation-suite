
const { test, expect } = require('@playwright/test');
const PageFactory = require('../../core/ui/pageFactory');
const testData = require('../data/testData.json');
const { assertElementVisible, assertURL } = require('../../core/ui/uiHelpers');
const logger = require('../../utils/logger');

test.describe('Login Tests', () => {
  let pageFactory;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    pageFactory = new PageFactory(page);
    loginPage = pageFactory.getPage('login');
    await loginPage.navigateTo('https://parabank.parasoft.com/parabank/index.htm');
  });

  test('Login with valid credentials', async ({ page }) => {
    // Arrange
    const { username, password } = testData.ui.login.validUser;
    logger.info('Starting login with valid credentials test.');

    // Act
    await loginPage.fillLoginForm(username, password);
    await loginPage.submitLoginForm();

    // Assert
    await assertURL(page, 'https://parabank.parasoft.com/parabank/overview.htm');
    await assertElementVisible(page, '#accountTable');
    logger.info('Login with valid credentials test passed.');
  });
});
  