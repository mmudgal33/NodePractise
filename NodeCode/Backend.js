// node -v, npm -v, node ./main.js
// ctrl + L clear node terminal
// ctrl + C exit node terminal

// const lib = require('./library.js')
const {Add, Substract, num, Power, Modulus, Multiply, Divide} = require('./library.js')

// const {Add, Substract} = require('./library')
// const { Multiply, Divide, num} = require('./library')

let a = 20;
let b = 30;
let res = a + b;
console.log(res);
function show(){ return 20;}

s = show();
console.log(s);

const add = Add(10, 5);
console.log(add);

const sub = Substract(10, 5);
console.log(sub);

console.log(Multiply(10, num))
console.log(Divide(10, num))

console.log(Power(10, num))
console.log(Modulus(10, num))