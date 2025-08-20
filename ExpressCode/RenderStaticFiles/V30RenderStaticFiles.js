// html:5
// !
// node --watch ./V30RenderStaticFiles.js 
var express = require('express');
var app = express();
const PORT = 3000;

// console.log(__dirname)
var path = require('path');
var public = path.join(__dirname,'public');
// console.log(public);

app.use(express.static(public));
// app instance created from express. use is method of express excessible by instances of it
// express.static call static method of express module directly
// what it does? all static files present in public folder excessible by app without giving path of them
// register static files to app using middleware methods. mapping done

// app.use define middleware that executes on every request, regardless http methods (Get,Post,Put,Delete)

app.get('',(req,res) => { res.sendFile(`${public}/index.html`) });
app.get('/about',(req,res) => { res.sendFile(`${public}/about.html`) });
app.get('/contact',(req,res) => { res.sendFile(`${public}/contact.html`) });

// express 5 upgrade error '*' not work
app.get('/*splat',(req,res) =>{ res.send(`${public}/notfound.html`); } );




app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});