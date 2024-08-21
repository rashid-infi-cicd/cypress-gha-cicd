const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q5vq9a',
  e2e: {
    baseUrl: "https://example.cypress.io",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,
    resultsFolder: 'cypress/results',
  },
});
