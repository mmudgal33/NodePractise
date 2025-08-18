// html:5
// !
// node --watch ./EJSTemplateEngine.js 

var express = require('express');
var app = express();
const PORT = 3000;



app.set('view engine', 'ejs');

app.get('', (req, res) => { res.render('main', { name: 'mohit' }); });

app.get('/about', (req, res) => {
    let employee = {
        name:'ali',
        surname:'ansari',
        age:27
    }
    res.render('about', {emp:employee})
});
app.get('/contact',(req,res) => {
    let employee = {
        name:'ali',
        surname:'ansari',
        age:27,
        hobbies : ['mohit','rohit','radha']

    }
    let hobbies = ['mohit','rohit','radha'];
    res.render('contact', {hobbies, employee}) });

// // express 5 upgrade error '*' not work
// app.get('/*splat',(req,res) =>{ res.render('home') } );





app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});



// var path = require('path');
// var public = path.join(__dirname,'public');
// app.use(express.static(public));

// path doesn't allow views run, don't use path with common names home.html and home.ejs




// <% code here %>
// <%= print it %>
// <%# comment it %> 
// don't try to use html comment in ejs file