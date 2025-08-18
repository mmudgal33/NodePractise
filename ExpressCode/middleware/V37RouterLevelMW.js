// node --watch ./V37RouterLevelMW.js 

var express = require('express');

var app = express();
const PORT = 3000;

const router = express.Router();

const { requestFilter, requestAge } = require('./V37Middleware')
app.use(requestFilter, requestAge);

app.get('/search', (req, res) => { 
    console.log('get route functions', req.name)
    res.send(` 
    <h1 style='color:red'> search page </h1>
    <h3> req.query.name is '${req.name}' req.query.age is '${req.age}' </h3> ` )});



app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});









// app.use((req, res) => {})
// Application level MW bind to instance of app object as shown above, that's why called Application level MW
// Application level MW bind with app, so bind with all routes automatically
// Router-level binds to some routers only, other routes not bind


// Application level middleware
// Router-level level middleware
// Error-handling level middleware
// Built-in level middleware
// Third-party level middleware