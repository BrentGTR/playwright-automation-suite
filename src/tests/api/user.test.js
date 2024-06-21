
const { test, expect } = require('@playwright/test');
const testData = require('../data/testData.json');

test('Fetch user details', async ({ request }) => {
  // Arrange
  const { url, method, expectedStatus } = testData.api.endpoints.getUser;

  // Act
  const response = await request[method.toLowerCase()](url);

  // Assert
  expect(response.status()).toBe(expectedStatus);
  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
});
  