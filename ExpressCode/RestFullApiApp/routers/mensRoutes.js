
const express = require('express');

const router = new express.Router();

require('../database/conn');
const menRanking = require('../models/mensSchema');

router.get('/',(req,res)=>{
    res.send('Express Router In RestAPI complete app');
});



// router.get('/', (req,res) => { res.send('hello from other side'); })

// create new student
// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save()
//     .then(()=>{ res.status(201).send(user) })
//     .catch((err)=>{ res.status(400).send(err) })
// })

// register new user document
router.post("/mens", async(req,res)=>{
    console.log(req.body);
    try{
        const user = new menRanking(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    }
    catch{ res.status(400).send(err); }    
})

// read data of registered users
router.get('/mens', async(req,res)=>{
    try{
        const menRankingData = await menRanking.find();
        res.send(menRankingData);
    }catch(err){ res.send(err) }
})

// get individual user data using id
router.get('/mens/:id', async(req,res)=>{
    console.log('req.params: ',req.params)
    try{
        const _id = req.params.id;
        const menData = await menRanking.findById(_id);
        console.log(menData);
        if(!menData){ return res.status(500).send() }
        else{ res.send(menData); }
    }
    catch(err){ res.send(err) }
})

// update user by it's id
// body -> raw -> json
router.patch('/mens/:id', async(req,res)=>{
    console.log('req.body: ',req.body)
    try{
        const _id = req.params.id;
        const updateMenData = await menRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(updateMenData);
        console.log(updateMenData)

    }
    catch(err){ res.status(500).send(err) }
})


// handling delete request
router.delete('/mens/:id', async(req,res)=>{
    try{
        const deleteMenData = await menRanking.findByIdAndDelete(req.params.id);
        if(!req.params.id){return res.status(400).send();}
        res.send(deleteMenData);
    }
    catch(err){ res.status(500).send(err) }
})



module.exports = router;






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


