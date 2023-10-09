import _ from "lodash";
import { multiply } from "https://x.nest.land/ramda@0.27.0/source/index.js";
import { emojify } from "npm:node-emoji@2";
import { readFileSync } from "fs";

console.log(readFileSync("deno.lock", { encoding: "ascii" }));
console.log(_.add(11, 11));
console.log(multiply(11, 2));
console.log(emojify(":t-rex: :heart:  NPM"));
