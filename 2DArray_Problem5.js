let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var value = "";
let n = 3;
let m = 3;
for (let i = n - 1; i >= 0; i--) {
  value += arr[i][0] + " ";
}
for (let j = 1; j < m; j++) {
  value += arr[0][j] + " ";
}
for (let k = 1; k < n; k++) {
  value += arr[k][2] + " ";
}
value += arr[n - 1][n - 2] + " ";

console.log(value);
