import { defineConfig } from "cypress"
// @ts-ignore
import { initPlugin } from "cypress-plugin-snapshots/plugin"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      initPlugin(on, config)
    },
    baseUrl: "https://www.lambdatest.com/selenium-playground/simple-form-demo",
  },
})
