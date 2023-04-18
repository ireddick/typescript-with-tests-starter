import { describe, it, test, expect } from "@jest/globals"
import { Model } from "../model"

test("test setup", () => {
  expect(true).toBeTruthy()
})

describe("greetings", () => {
  it("says hello", () => {
    const subject = new Model()

    const greeting = subject.greet()

    expect(greeting).toEqual("hello")
  })
})
