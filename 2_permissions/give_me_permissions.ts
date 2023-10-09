const text = await Deno.readTextFile("./readme.txt", "ascii");
console.log(text);