// node ./URL_HTTP_Together

const url = require('url')
const http = require('http')

const server = http.createServer((req,res)=>{
    //res.setHeader('content-Type','text/plain');
    // console.log(req);
    // console.log(req.url)
    const myURL = url.parse(req.url,true);

    res.write('response from server...');
    console.log(myURL.search);
    // console.log(myURL.pathname)
    res.end();
    
    // res.setHeader('content-Type','text/plain');
});

server.listen(3000,'localhost',()=>{
    console.log('server running at http://localhost:3000');
});