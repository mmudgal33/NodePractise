// node --watch ./V29RenderJSONandHTML.js 

var express = require('express');
var app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
    <h2> home page </h2>
    <a href='/about'> go to about page </a>
    `);
});

app.get('/about', (req, res) => {
    const name = req.query.name;
    if(!name){
        res.send(`
    <h2> about page </h2>
    <input type='text' placeholder='Enter Name' '/>
    <a href='/'> go to home page </a> &nbsp;
    <a href='/object'> go to object page </a>
    `);
    }
    else{
        res.send(`
    <h2> about page </h2>
    <input type='text' placeholder='Enter Name' value='${name}'/>
    <a href='/'> go to home page </a> &nbsp;
    <a href='/object'> go to object page </a>
    `);
    }
    
});

app.get('/object', (req, res) => {
    const obj = {name:'mohit', age: 31, height: 5.11};
    res.send(`
    <h2> object page </h2>
    <h3> name '${obj.name}' age '${obj.age}' height '${obj.height}' </h3>
    <a href='/'> go to home page </a> &nbsp;
    <a href='/about'> go to about page </a>  &nbsp;
    <a href='/array'> go to array page </a> </br></br>
    js object is {name:'mohit', age: 31, height: 5.11}
    
    
    `);
});

app.get('/array', (req, res) => {
    const arr = ['adil',32,5.11];
    res.send(`
    <h2> array page </h2>
    <h3> name '${arr[0]}' age '${arr[1]}' height '${arr[2]}' </h3>
    array is ['adil',32,5.11] </br></br>
    <a href='/'> go to home page </a> &nbsp;
    <a href='/about'> go to about page </a>  &nbsp;
    <a href='/object'> go to about page </a>  
    `);
});



















// express 5 upgrade error '*' not work
app.get('/*splat',(req,res) =>{
    res.send('404 page not found');
} );


app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
// port connection