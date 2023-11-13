describe("Element snapshot tests", () => {
  beforeEach(() => {
    cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo")
  })

  it("Should match the snapshot of the element", () => {
    // First snapshot
    cy.get("h1").toMatchSnapshot()

    // Second snapshot (Uncomment to see the test fail)
    // cy.get("h2")
    //   .first()
    //   .toMatchSnapshot()
  })
})
