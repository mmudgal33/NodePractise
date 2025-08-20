// cd ExpressCode/RestAPI
// node --watch ./V64RestAPIThapa.js
// npm i validator


const express = require('express');
const port = process.env.PORT || 8000;



const app = express();

// getting data of json format
app.use(express.json());

// getting data from form on html file
app.use(express.urlencoded({extended:false}));

const mensRouter = require('./routers/mensRoutes');
app.use(mensRouter)



app.listen(port,()=>console.log(`connection setup at ${port}`))