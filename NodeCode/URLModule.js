const url = require('url')


var adr = 'https://www.example.com/category/search?name=Ali&Age=21#section3'
const myURL = url.parse(adr,true);
console.log(myURL);

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.example.com',
//     port: null,
//     hostname: 'www.example.com',
//     hash: '#section3',
//     search: '?name=Ali&Age=21',
//     query: [Object: null prototype] { name: 'Ali', Age: '21' },
//     pathname: '/category/search',
//     path: '/category/search?name=Ali&Age=21',
//     href: 'https://www.example.com/category/search?name=Ali&Age=21#section3'
//   }

console.log(myURL.protocol);
console.log(myURL.href);





