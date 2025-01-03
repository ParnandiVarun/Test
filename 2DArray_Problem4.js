let N = 5;

let value = "";

for (let i = 0; i < N; i++) {
  value += "*" + " ";
}
console.log(value);

for (let j = 0; j < N - 2; j++) {
  console.log("*");
}

console.log(value);
