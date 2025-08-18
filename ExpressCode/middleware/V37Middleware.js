// log/logging function
var fs = require('fs');
const requestFilter = (req, res, next) => {
    const now = new Date();
    fs.appendFile('log.txt', `\n
    Date ${now.getDate()} / ${now.getMonth() + 1} / ${now.getFullYear()} Time ${now.getHours()} : ${now.getMinutes()} Request ${req.method} Route ${req.path}`, (err, data) => { next(); });
    // Date 14 / 8 / 2025 Time 17 : 28 Request GET Route /
}

const requestAge = (req, res, next) => {
    const name = req.query.name;
    const age = req.query.age;

    req.name = name;
    req.age = age;
    console.log('data from client...', req.query);
    if (!name || !age) { res.send(` <h1 style='color:red'> please enter name & age </h1> `) }
    else if (age < 18) {
        res.send(` 
           <h1 style='color:red'> you are not allowed to visit </h1>
           <h3> req.query.name is '${req.name}' req.query.age is '${req.age}' </h3>  `)
    }
    else { next(); }
}

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 'error';
    res.status(err.statusCode).json({
        statusCode : err.statusCode,
        status : err.status,
        message : err.message
    });

}

module.exports = { requestFilter, requestAge, errorHandler };


