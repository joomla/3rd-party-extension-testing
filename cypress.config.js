const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  videosFolder: 'cypress/output/videos',
  screenshotsFolder: 'cypress/output/screenshots',
  viewportHeight: 1000,
  viewportWidth: 1200,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost/',
    specPattern: [
      '**/*.cy.{js,jsx,ts,tsx}'
    ],
    supportFile: 'cypress/support/index.js',
    scrollBehavior: 'center',
    browser: 'firefox',
    screenshotOnRunFailure: true,
    video: false
  },
  env: {
    sitename: 'extension-test',
    name: 'john',
    email: 'john@example.com',
    username: 'john-ext',
    password: 'lalalal123lalala',
    db_type: 'MySQLi',
    db_host: 'localhost',
    db_name: 'test_joomla',
    db_user: 'joomla_ut',
    db_password: 'joomla_ut',
    db_prefix: 'et4_',
  },
})
