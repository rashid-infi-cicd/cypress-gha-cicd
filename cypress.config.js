const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: 'q5vq9a',
  e2e: {
    baseUrl: "https://example.cypress.io",
    specPattern: 'cypress/e2e/**/*.cy.js',
    // chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config
    },
    reporter: 'cypress-mochawesome-reporter',
    // experimentalRunAllSpecs: true,
    reporterOptions: {
      //reportTitle: 'Feather Cypress Mocha Report',
      //reportPageTitle: 'Feather Cypress Mocha Report',
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: false,
      reportFilename: 'mochawesome',//'Feather mocha full report',
      screenshotOnRunFailure: true,
      charts: true,
      inlineAssets: true,
      //saveAllAttempts: true,
      //saveOnlyFailures: false,
    },
    video: true,
    videoCompression: true,
    videoCompression: 15,
  
  },
});
