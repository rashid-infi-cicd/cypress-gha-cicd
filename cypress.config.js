const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q5vq9a',
  e2e: {
    baseUrl: "https://example.cypress.io",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    experimentalRunAllSpecs: true,
    reporterOptions: {
      reportTitle: 'Feather Cypress Mocha Report',
      //reportPageTitle: 'Feather Cypress Mocha Report',
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: true,
      json: false,
      //For single spec files, use the base name of the spec file
      //reportFilename: 'report-[name]-[datetime]',
      //For all specs, use "Combined Report"
      reportDir: 'cypress/reports/mocha',
      reportFilename: 'mochawesome',
      screenshotOnRunFailure: true,
      charts: true,
      inlineAssets: true,
      saveAllAttempts: true,
      //saveOnlyFailures: false,
    },
    video: true,
    videoCompression: true,
    videoCompression: 15,
    video: true,
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,
    resultsFolder: 'cypress/results',
  },
});
