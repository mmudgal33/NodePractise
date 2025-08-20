// cd ExpressCode/RestAPI
// node --watch ./V64RestAPIThapa.js

// npm i validator

const Student = require('./models/students');

const express = require('express');
const app = express();
app.use(express.json())

const port = process.env.PORT || 8000;

require('./database/conn');

// app.get('/', (req,res) => { res.send('hello from other side'); })

// create new student
// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save()
//     .then(()=>{ res.status(201).send(user) })
//     .catch((err)=>{ res.status(400).send(err) })
// })

// register new student document
app.post("/students", async(req,res)=>{
    console.log(req.body);
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    }
    catch{ res.status(400).send(err); }    
})

// read data of registered students
app.get('/students', async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){ res.send(err) }
})

// get individual student data using id
app.get('/students/:id', async(req,res)=>{
    console.log('req.params: ',req.params)
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData);
        if(!studentData){ return res.status(500).send() }
        else{ res.send(studentData); }
    }
    catch(err){ res.send(err) }
})

// update student by it's id
// body -> raw -> json
app.patch('/students/:id', async(req,res)=>{
    console.log('req.body: ',req.body)
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(updateStudent);
        console.log(updateStudent)

    }
    catch(err){ res.status(500).send(err) }
})


// handling delete request
app.delete('/students/:id', async(req,res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){return res.status(400).send();}
        res.send(deleteStudent);
    }
    catch(err){ res.status(500).send(err) }
})



app.listen(port,()=>console.log(`connection setup at ${port}`))











// {
//     "name":"vinod thapa",
//     "email":"mmudgal33@gmail.com",
//     "phone":8860828435,
//     "address":"pune"
// }

// body -> raw -> json

// UNDERSTAND PLAYLISTS IN DB BUT PLAYLIST HERE

// ctrl c
// cmd -> mongosh

// mongosh
// show dbs -> ttchannel db created
// use ttchannel
// show collections -> playlists created
// db.playlists.find()
// .exit

// ttchannel> 