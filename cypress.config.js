const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Record videos for Cypress run
  video: true,

  e2e: {
    // Default wait time for Cypress commands
    defaultCommandTimeout: 15000,

    // Maximum time to wait for a page to load
    pageLoadTimeout: 60000,

    // Maximum time for API requests
    requestTimeout: 30000,

    // Maximum time for API responses
    responseTimeout: 30000,

    // Browser window size
    viewportWidth: 1920,
    viewportHeight: 1080,

    setupNodeEvents(on, config) {
      
      // Maximize Chrome / Edge browser
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome" || browser.name === "edge") {
          launchOptions.args.push("--start-maximized");
        }

        return launchOptions;
      });

      return config;
    },
  },
});