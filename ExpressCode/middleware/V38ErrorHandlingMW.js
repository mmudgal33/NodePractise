// node --watch ./V38ErrorHandlingMW.js
// http://localhost:3000/?name=Ali&age=17

var express = require('express');

var app = express();
const PORT = 3000;

const router = express.Router();

const { requestFilter, requestAge, errorHandler } = require('./V37Middleware')
// app.use(requestFilter, requestAge);
app.use('/',router);


app.get('/',requestAge, requestFilter, (req, res, next) => { 
    
    console.log('get route functions', req.name)
    res.send(` 
    <h1 style='color:red'> index page </h1>
    <h3> req.query.name is '${req.name}' req.query.age is '${req.age}' </h3> ` )});

app.get('/about', (req, res) => { 
    console.log('about page')
    res.send(` 
    <h1 style='color:red'> about page </h1> ` )});

// page not found with error middleware
app.get('/*splat', (req, res, next) => { 
    const error = new Error("Error");
    error.statusCode = 404;
    error.status = 'failed';
    // res.send(` 
    // <h1 style='color:red'> 404 not found </h1> ` )
    next(error);
});

app.use(errorHandler);
// to run errorHandler


app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});