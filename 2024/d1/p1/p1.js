const fs = require("fs");

const input = fs.readFileSync("../input.txt", "utf8").split("\n");

let left = [];
let right = [];

for (const line of input) {
  const [l, r] = line.split("   ").map((x) => x.trim());
  left.push(l);
  right.push(r);
}

left.sort();
right.sort();

let sum = 0;

for (let i = 0; i < left.length; i++) {
  sum += Math.abs(left[i] - right[i]);
}

console.log(sum);
