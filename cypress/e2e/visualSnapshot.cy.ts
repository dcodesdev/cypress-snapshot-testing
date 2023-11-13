describe("Snapshot testing", () => {
  beforeEach(() => {
    cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo")
  })

  it("should match the snapshot", () => {
    // First snapshot
    cy.get("input#user-message").type(
      "Lambdatest is a cloud-based platform enhancing testing with its scalable, reliable, and secure global infrastructure. It offers cross-browser testing capabilities and continuous integration tools."
    )

    // Second snapshot (Uncomment to see the test fail)
    // cy.get("input#user-message").type(
    //   "Another website is a cloud-based platform enhancing testing with its scalable, reliable, and secure global infrastructure. It offers cross-browser testing capabilities and continuous integration tools."
    // )

    cy.get("button#showInput").click()

    cy.get("div.mt-30.rounded")
      .first()
      .toMatchImageSnapshot({
        name: "User message",
        imageConfig: {
          threshold: 0.01,
          thresholdType: "percent",
        },
      })
  })
})
