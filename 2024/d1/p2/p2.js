const fs = require("fs");

const input = fs.readFileSync("../input.txt", "utf8").split("\n");

let left = [];
let right = {};

for (let line of input) {
  const numbers = line.split("   ");
  left.push(numbers[0]);
  right[numbers[1]] = right[numbers[1]] ? right[numbers[1]] + 1 : 1;
}

let sum = 0;

for (let i = 0; i < left.length; i++) {
  sum += left[i] * (right[left[i]] || 0);
}

console.log(sum);
