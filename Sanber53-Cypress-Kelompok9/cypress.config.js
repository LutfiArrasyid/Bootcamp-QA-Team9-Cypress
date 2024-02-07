const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 1234567,
  viewportHeight: 636,
  viewportWidth: 989,
  execTimeout: 12345,
  taskTimeout: 12345,
  pageLoadTimeout: 112345,
  requestTimeout: 1111,
  responseTimeout: 54321,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    env: {
      email: "sanbercode53@gmail.com"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ['**/cypress/e2e/1-getting-started', '**/cypress/e2e/2-advanced-examples']
  },
});