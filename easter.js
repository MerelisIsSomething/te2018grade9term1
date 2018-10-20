// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// Write your program below!
// First line should get user input (year) and store it in variable y.
let y = READLINE.question("What's the year for easter?")

let a = y % 19;
let b = Math.floor(y / 100);
let c = y % 100;
let d = Math.floor(b / 4);
let e = Math.floor(b % 4);
let f = Math.floor((b+ 8)/3);
let g = Math.floor((b - f + 1) / 3);
let h = Math.floor((19 * a + b - d - g + 15) % 30);
let i = Math.floor(c / 4);
let k =c % 4;
let r = Math.floor((32 + 2 * e + 2 * i - h - k) % 7);
let m = Math.floor((a + 11 * h + 22 * r) / 451);
let n = Math.floor((h + r - 7 * m + 114) / 31); 
let p = Math.floor((h + r - 7 * m + 114) % 31); 


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(k);
console.log(r);
console.log(m);
console.log(n);
console.log(p);

console.log(`On year ${y}, Easter fell on ${n}/${p + 1}`);


