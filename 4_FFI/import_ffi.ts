// Open library and define exported symbols
const dylib = Deno.dlopen("./libadd.so", {
  add: { parameters: ["pointer", "f32"], result: "f32" },
} as const);

// Call the symbol `add`
const result = dylib.symbols.add("ciao", 0.9);
console.log(result);