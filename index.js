// node --watch ./index.js   nodemon alternative

// create new app
var express = require('express');
var app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('home page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/contact', (req, res) => {
    res.send('contact page');
});

// http://localhost:3000/search?name=Ali&Age=21
// in terminal result seen of console.log
app.get('/search',(req,res) =>{
    const name = req.query.name;
    const age = req.query.age;
    
    // const name = req.query.name;
    console.log('data from client...', req.query);
    // console.log('data from client...', req.query.name);
    // res.send('search results!!')
    // res.send(`<h3> req.query is '${qry}' age '${name}' </h3>`);

    if(!name || !age){
        res.send(`
    <h2> search page </h2>
    <a href='/'> go to home page </a> &nbsp;
    <a href='/about'> go to about page </a>
    `);
    }
    else{
        res.send(`
    <h2> search page </h2>
    <h3> req.query.name is '${name}' req.query.age is '${age}' </h3>
    <a href='/'> go to home page </a> &nbsp;
    <a href='/about'> go to about page </a>
    `);
    }

} );

// express 5 upgrade error '*' not work
app.get('/*splat',(req,res) =>{
    res.send('404 page not found');
} );

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>404! Page not found</h1>');
// });




app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
// port connection






// in node separate arguments with comma, use + less
// if string and object pass to console.log using +
// after seeing + sign automatically, abject apply toString method
// every object has list of methods with it. only these methods could be applied to it.
// node use google chrome v8 engine. object created on browser, ex req.query object don't have toString method.
// if we use + before it, error comes "Cannot convert object to primitive value"



{/* <h4>output1 {props.isMarried.toString()}</h4> */}
            {/* <h4>output2 {String(props.isMarried)}</h4> */}