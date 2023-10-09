import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";

Deno.test("Test suite", async (t) => {
  await t.step("one", () => {
    assertEquals(true, true);
  });

  await t.step("two", async (t) => {
    t.step("inner step", () => {
      assertEquals(true, false);
    });
  });
});