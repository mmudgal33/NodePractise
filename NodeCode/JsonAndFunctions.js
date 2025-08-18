const data = require('./JsonData.json');
console.log(data);

console.log(data.id);
console.log(data.name);
console.log(data.hobbies[1]);
console.log(data.address.city);
console.log(data.address.postcode);

// 101
// john doe
// writing
// anytown
// 12345

let numbers = [1,2,3,4,5,6,7,8,9];
console.log('Ascending ',numbers.sort((a,b)=>a-b));
console.log('Descending ',numbers.sort((a,b)=>b-a));
console.log(numbers.filter(n => n%2 === 0));
console.log(numbers.map(n => n/2));

Ascending  [
    1, 2, 3, 4, 5,
    6, 7, 8, 9
  ]
  Descending  [
    9, 8, 7, 6, 5,
    4, 3, 2, 1
  ]
  [ 8, 6, 4, 2 ]
  [
    4.5,   4, 3.5,   3, 2.5,
      2, 1.5,   1, 0.5
  ]

// When you sort an array with .sort(), it assumes that you are sorting strings. When sorting numbers, 
// the default behavior will not sort them properly.

// The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent 
// any two elements from the array. How the elements will be sorted depends on the function’s return value:

// if it returns a negative value, the value in a will be ordered before b.
// if it returns 0, the ordering of a and b won’t change.
// if it returns a positive value, the value in b will be ordered before a.
// When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.