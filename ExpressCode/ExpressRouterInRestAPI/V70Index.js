// cd ExpressCode/RestFullApiApp
// node --watch ./V70Index.js
// npm i validator


const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

const studentRouter = require('./routers/student');
app.use(studentRouter)



app.listen(port,()=>console.log(`connection setup at ${port}`))