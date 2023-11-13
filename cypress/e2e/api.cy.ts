import axios from "axios"

describe("API response snapshot tests", () => {
  beforeEach(() => {
    cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo")
  })

  it("should match the snapshot", async () => {
    // First API Call
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    )

    // Second API Call (Uncomment to see the test fail)
    // const { data } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // )

    cy.wrap(data).toMatchSnapshot()
  })
})
