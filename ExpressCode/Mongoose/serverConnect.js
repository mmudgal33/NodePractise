// cd ExpressCode/Mongoose
// node --watch ./serverConnect.js
// npm i mongoose

// connection created with mongoDB localhost server

const mongoose = require("mongoose");

// , useCreateIndex:true

mongoose.connect('mongodb://localhost:27017/ttchannel',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected'))
    .catch((err) => console.log(err));

// schema
// mongoose schema defines structure of document, default values, validations etc
const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength: [2, 'minimum two letters'], maxlength: 30 },
    ctype: { type: String, enum: ['Frontend', 'Backend', 'Database'],required: true, lowercase: true},
    videos: {type: Number, enum: [10,20,30,40], min:10, max:40, 
        validate(value){ if(value<0){ throw new Error("videoes can't be negative") }  }
        // validate:{ validator: function(value){ return value.length<0; }, message:"videoes can't be negative" }
    },
    author: {type: String, enum:['Thapa Technical']},
    active: {type: Boolean},
    date: { type: Date, default: Date.now },
    email: {
        type: String, required: true, unique: true, lowercase: true,
        validate(value){ if(!validator.isEmail(value)){ throw new Error("Email is Invalid") }  }
    }
})

// collection creation
const Playlist = new mongoose.model('Playlist', playlistSchema);

//                     INSERT ONE DOCUMENTS

// const createDocument = async () => {
//     try{
//         const reactPlaylist = new Playlist({
//             name:'Node JS',
//             ctype:'Backend',
//             videos:50,
//             author:'Thapa Technical',
//             active:true
//         })
//         const result = await reactPlaylist.save();
//         console.log(result)

//     }
//     catch(err){console.log(err);}
// }

// // function defination
// createDocument() 

// //                     INSERT MULTIPLE DOCUMENTS

// const createMultipleDocument = async () => {
//     try{
//         const JSPlaylist = new Playlist({
//             name:'Javascript',
//             ctype:'Frontend',
//             videos:58,
//             author:'Thapa Technical',
//             active:true
//         })


//         const mongoDBPlaylist = new Playlist({
//             name:'MongoDB',
//             ctype:'Backend',
//             videos:20,
//             author:'Thapa Technical',
//             active:true
//         })


//         const ExpressPlaylist = new Playlist({
//             name:'Express JS',
//             ctype:'Backend',
//             videos:25,
//             author:'Thapa Technical',
//             active:true
//         })
//         const result = await Playlist.insertMany( [JSPlaylist, mongoDBPlaylist, ExpressPlaylist] );
//         console.log(result)

//     }
//     catch(err){console.log(err);}
// }

// createMultipleDocument();



// const getDocument = async () => {
//     // const result = await Playlist.find();
//     const result1 = await Playlist.find({ctype:'Frontend'}).select({_id:0, name:1}).limit(1);
//     const result2 = await Playlist.find({ctype:'Frontend'}).select({_id:0, name:0}).limit(1);

//     console.log(result1);
//     console.log(result2)
// }

// getDocument();



// .select({name:1}) -> show name only, other way of projection
// db.playlists.find()
// db -> ttchannel
// collection -> playlists
// document -> playlist





// const getDocument = async () => {
//     try {
//         // const result = await Playlist.find();
//         const result1 = await Playlist.find({ ctype: 'Frontend' }).select({ _id: 0, name: 1 }).limit(1);
//         const result2 = await Playlist.find({ ctype: 'Frontend' }).select({ _id: 0, name: 0 }).limit(1);

//         const result3 = await Playlist.find({ videos: {$lt:40} }).select({ _id: 0, name: 0 }).limit(1);
//         // $eq $ne $gt $lt $gte $lte $in $nin

//         const result4 = await Playlist.find({ ctype: {$nin:'Backend'} }).select({ _id: 0, name: 0 }).limit(1);

//         // $and $not $or $nor
//         const result5 = await Playlist.find({ $and: [{ctype:'Backend'},{videos: {$lt:40}}] }).countDocuments();
//         const result6 = await Playlist.find({ $and: [{ctype:'Backend'},{videos: {$lt:40}}] }).estimatedDocumentCount();

//         const result7 = await Playlist.find({ $and: [{ctype:'Backend'},{videos: {$lt:40}}] }).sort({name:1});  // dictionary sorting
//         const result8 = await Playlist.find({ $and: [{ctype:'Backend'},{videos: {$lt:40}}] }).sort({name:-1});  // non dictionary sorting

//         console.log('result1 ',result1);
//         console.log('result2 ',result2);
//         console.log('result3 ',result3);
//         console.log('result4 ',result4);
//         console.log('result5 ',result5,'result6 ',result6)
//         console.log('result7 ',result7);
//         console.log('result8 ',result8);
//     }
//     catch(err) {console.log(err)}
// }

// getDocument();





//                     CRUD OPERATIONS
// UPDATE OPERATION ON DOCUMENT

// const updateDocument = async (_id) => {
//     try{
//         const result = await Playlist.updateOne({_id},{$set:{name:'ExpressJS'}})
//         console.log(result)
//     }
//     catch(err){console.log(err)}
// }

// updateDocument('68a30b42250b7057d08a17fc')



const updateDocument = async (_id) => {
    try{
        const result = await Playlist.findByIdAndUpdate({_id},{$set:{name:'ExpressJS external module'}},{useFindAndModify:false, new:true})
        console.log('result ',result)
    }
    catch(err){console.log(err)}
}

updateDocument('68a30b42250b7057d08a17fc')


// {useFindAndModify:false, new:true}
// findByIdAndUpdate require useFindAndModify:false
// new:true shows updated output otherwise old document return



// DELETE OPERATION ON DOCUMENT

// const deleteDocument = async (_id) => {
//     try{
//         const result = await Playlist.deleteOne({_id})
//         console.log(result)
//     }
//     catch(err){console.log(err)}
// }

// deleteDocument('68a30b42250b7057d08a17fc')




// ,{$set:{name:'ExpressJS external module'}},{useFindAndModify:false, new:true}

const deleteDocument = async (_id) => {
    try{
        const result = await Playlist.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){console.log(err)}
}

deleteDocument('68a307d7d0b0759d5915880d')







// UNDERSTAND PLAYLISTS IN DB BUT PLAYLIST HERE

// ctrl c
// cmd -> mongosh

// mongosh
// show dbs -> ttchannel db created
// use ttchannel
// show collections -> playlists created
// db.playlists.find()
// .exit

// ttchannel> db.playlists.find()
// [
//   {
//     _id: ObjectId("68a303feee04360b285580e8"),
//     name: 'Node JS',
//     ctype: 'Backend',
//     videos: 50,
//     author: 'Thapa Technical',
//     active: true,
//     date: ISODate("2025-08-18T10:44:14.034Z"),
//     __v: 0
//   },
//   {
//     _id: ObjectId("68a307d7d0b0759d5915880b"),
//     name: 'Javascript',
//     ctype: 'Frontend',
//     videos: 58,
//     author: 'Thapa Technical',
//     active: true,
//     date: ISODate("2025-08-18T11:00:39.353Z"),
//     __v: 0
//   },
//   {
//     _id: ObjectId("68a307d7d0b0759d5915880c"),
//     name: 'MongoDB',
//     ctype: 'Backend',
//     videos: 20,
//     author: 'Thapa Technical',
//     active: true,
//     date: ISODate("2025-08-18T11:00:39.354Z"),
//     __v: 0
//   },
//   {
//     _id: ObjectId("68a307d7d0b0759d5915880d"),
//     name: 'Express JS',
//     ctype: 'Backend',
//     videos: 25,
//     author: 'Thapa Technical',
//     active: true,
//     date: ISODate("2025-08-18T11:00:39.354Z"),
//     __v: 0
//   }
// ]