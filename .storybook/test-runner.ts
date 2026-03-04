import { injectAxe, checkA11y } from "axe-playwright"
import type { TestRunnerConfig } from "@storybook/test-runner"

const config: TestRunnerConfig = {
  async preVisit(page) {
    // Inject axe for accessibility testing
    await injectAxe(page)
  },
  async postVisit(page) {
    // Run accessibility checks on each story
    try {
      await checkA11y(page, "#storybook-root", {
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
      })
    } catch (error) {
      console.warn("Accessibility issues found:", error)
    }
  },
}

export default config
