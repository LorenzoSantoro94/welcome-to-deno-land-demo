import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";
import { delay } from "https://deno.land/std@0.202.0/async/delay.ts";

Deno.test("a test", () => {
  assertEquals("jest", "mocha");
});


Deno.test("delay", async () => {
  const d = 1000;
  await delay(d);
  assertEquals(d, 1000);
});