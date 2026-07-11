import { describe, expect, test } from "bun:test"
import { getCliOptionsFromArgList } from "scripts/run-benchmark/getCliOptionsFromArgList"

describe("getCliOptionsFromArgList", () => {
  test("parses concurrency from separate arg", () => {
    expect(getCliOptionsFromArgList(["--concurrency", "4"]).concurrency).toBe(4)
  })

  test("parses concurrency from equals arg", () => {
    expect(getCliOptionsFromArgList(["--concurrency=3"]).concurrency).toBe(3)
  })

  test("ignores invalid concurrency values", () => {
    expect(getCliOptionsFromArgList(["--concurrency", "0"]).concurrency).toBe(
      null,
    )
  })
})
