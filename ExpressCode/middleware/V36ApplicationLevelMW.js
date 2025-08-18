// npm i bootstrap

// node --watch ./V36ApplicationLevelMW.js 
var express = require('express');

var app = express();
const PORT = 3000;

// log/logging function
var fs = require('fs');
app.use((req, res, next) => {
    const now = new Date();
    fs.appendFile('log.txt', `\n
    Date ${now.getDate()} / ${now.getMonth()+1} / ${now.getFullYear()} Time ${now.getHours()} : ${now.getMinutes()} Request ${req.method} Route ${req.path}` ,(err, data)=>{ next(); });
    // Date 14 / 8 / 2025 Time 17 : 28 Request GET Route /
})

// console.log('middleware1');  ----->>>>>  output on terminal not on browser console
// next() points to next middleware, when we create that chain we uncomment next() function too
// res.end('stopped');  stops route servise here
// req.name will persist on further middleware functions and route

// app.use( (req, res, next) => { 
//     req.name='mohita';
//     console.log('middleware 1');
//     next();
//     // return res.json({data:'Response Middleware1'});
//     // res.end('stopped');
// });

// app.use( (req, res, next) => { 
//     console.log('middleware 2', req.name);
//     next();
//     // return res.json({data:'Response Middleware1'});
//     // res.end('stopped');
// });



app.get('', (req, res) => { 
    console.log('get route functions', req.name)
    res.send(` <h1 style='color:red'> home page </h1> ` )});




app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});