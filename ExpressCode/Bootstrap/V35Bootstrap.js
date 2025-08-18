// npm i bootstrap

// node --watch ./V35Bootstrap.js 
var express = require('express');
var app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// console.log(__dirname)
var path = require('path');

var cssLoc = path.join(__dirname,'..','..','node_modules','bootstrap','dist','css');
console.log(cssLoc);

app.use('/css' ,express.static(cssLoc));

var jsLoc = path.join(__dirname,'..','..','node_modules','bootstrap','dist','js');
// console.log(public);

app.use('/js' ,express.static(jsLoc));


app.get('', (req, res) => { res.render('home', { name: 'mohit' }); });


app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});