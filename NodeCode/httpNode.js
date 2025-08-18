// node --watch httpNode.js

var http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/plain');
    res.write('response from server...');
    res.end();
    res.setHeader('content-Type','text/plain');
});

server.listen(3000,'localhost',()=>{
    console.log('server running at http://localhost:3000');
});