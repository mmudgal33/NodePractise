
const mongoose = require("mongoose");


// mongoose.connect('mongodb://localhost:27017/olympics',
//     {  useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('connection successful'))
//     .catch((err) => console.log(err));



mongoose.connect('mongodb://localhost:27017/olympics')
    .then(() => console.log('connection successful'))
    .catch((err) => console.log(err));






