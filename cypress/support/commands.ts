/// <reference types="cypress" />
// ***********************************************

import "cypress-plugin-snapshots/commands"

declare global {
  namespace Cypress {
    interface Chainable {
      toMatchImageSnapshot(args?: {
        imageConfig?: {
          createDiffImage?: boolean // Should a "diff image" be created, can be disabled for performance
          threshold?: number // Amount in pixels or percentage before snapshot image is invalid
          thresholdType?: "pixel" | "percent" // Can be either "pixel" or "percent"
        }
        name?: string // Naming resulting image file with a custom name rather than concatenating test titles
        separator?: string // Naming resulting image file with a custom separator rather than using the default ` #`
      }): Chainable<Element>

      toMatchSnapshot(args?: {
        ignoreExtraFields: boolean // Ignore fields that are not in snapshot
        ignoreExtraArrayItems: boolean // Ignore if there are extra array items in result
        normalizeJson: boolean // Alphabetically sort keys in JSON
        replace: {
          // Replace `${key}` in snapshot with `value`.
          [key: string]: string | number | boolean | null | undefined
        }
      }): Chainable<Element>
    }
  }
}
