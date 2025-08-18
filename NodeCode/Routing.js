// node ./Routing
// node --watch Routing.js

var fs = require("fs");
const http = require('http');


// const server = http.createServer((req,res)=>{
//     if(req.url ==='/'){
//         res.write('<h1> index page </h1>');
//         res.end();
//     }
//     if(req.url ==='/About'){
//         res.write('<h1> about page </h1>');
//         res.end();
//     }

// })

// server.listen(3000,'localhost',()=>{
//     console.log('server running at http://localhost:3000');
// });





const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./public/index.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }

    else if (req.url === '/About') {
        fs.readFile('./public/about.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }

    else if (req.url === '/contact') {
        fs.readFile('./public/contact.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }

    else {
        res.write('<h1> 404 not found </h1>');
        res.end();
    }

})

server.listen(3000, 'localhost', () => {
    console.log('server running at http://localhost:3000');
});