
function Add(a,b){ return a + b};

function Substract(a,b){ return a - b};

let num = 2;

Power = function(a,b){ return a ^ b};

Modulus = function(a,b){ return a % b};

function Multiply(a,b){ return a * b};

function Divide(a,b){ return a / b};

module.exports = {Add, Substract, num, Power, Modulus, Multiply, Divide};


// its exports, not export

// module.exports = {
//     Multiply: function(a,b){ return a * b;},
//     Divide: function(a,b){ return a / b;},
//     num : 2,

// };

// module.exports.Power = function(a,b){ return a ^ b};
// module.exports.Modulus = function(a,b){ return a % b};
// module.exports.num = 2;
