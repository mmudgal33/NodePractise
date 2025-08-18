// cd ExpressCode/Mongoose
// node --watch ./V50ThapaMongoose.js
// npm i mongoose

// mongodb --version
// mongosh
// .exit  ctrl+c ctrl+d to exit
// show dbs
// show databases
// cls
// use students
// show dbs // create collection otherwise new db not seen
// db.createCollection('data')
// show collections
// show dbs // created collection now new db seen
// db.data.drop()
// show collections
// db.dropDatabase() // current database dropped

// use students
// db.data.insertOne({'name':'vinod','age':29})
// db.data.insertMany( [{'name':'vinod','age':29}, {'name':'mohit','age':25}, {'name':'rohit','age':23}, {'name':'radha','age':26}] )

// db.data.find()
// db.data.find().limit(2)
// if special characters, space present quotes necessary
// db.data.insertMany( [{'name':'vinod','age':29}, {'name':'mohit','age':25}, {'name':'rohit','age':23}, {'name':'radha','age':26}], {ordered:false} )
// {ordered:false} means unordered, it won't stop if one document out of many has error

// debugger.data v/s debugger.Data case sensitivity present in mongodb

// operations in mongodb 1)read 2)comparison 3)logical 4)cursor 5)Elements

// db.data.find()
// db.data.find({'name':'vinod'})
// db.data.findOne({'name':'vinod'})

// MONGOIMPORT WORKS OUTSISE MONGOSH
// WE CREATE SHOP DATABASE AND PUT ALL JSON FILES INSIDE IT

// mongosh
// show dbs
// show collections
// use students
// db.dropDatabase() 
// .exit

// D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\LearningNeverEndsWB\NodePractise>mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\sales.json --db=shop --collection=sales


// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\products.json -d shop -c products
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\sales.json --db=shop --collection=sales --jsonArray
// CHECK DIFFERENCE BETWEEN PRODUCTS AND SALES DATA ------>>>>>>>>  SALES DOCUMENTS ARE INSIDE [] DOCUMENTS INSIDE ARRAYS

// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\categories.json --db=shop --collection=categories
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\col.json --db=shop --collection=col
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\comments.json --db=shop --collection=comments
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\companies.json --db=shop --collection=companies
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\companies.json --db=shop --collection=companies
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles\salestest.json --db=shop --collection=salestest


// WE IMPORT ONE JSON FILE, SIMILARLY EXPORT ONE JSON FILE ONLY TOO
// --db=shop --collection=sales  --out=path//db_exported.json

// work on both local server
// mongoexport --db=shop --collection=sales --jsonArray --out=D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/sales_exported.json

// mongoexport --db=shop --collection=sales --out=D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/db_exported.json

// mongoexport --db=shop --collection=sales --out=D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\LearningNeverEndsWB\NodePractise\ExpressCode\Mongoose\ThapaTechnicalMongoDBExportFile/db_exported.json



//               COMPARISON OPERATORS

// use shop
// db.products.find({'price':{$eq:699}});

// db.products.find({'price':{$in:[249,129,39]}});

// db.products.find({'price':{$gt:699}});
// db.products.find({'price':{$gte:699}});
// db.products.find({'price':{$lt:699}});
// db.products.find({'price':{$eq:699}});

//              CURSOR METHODS see limited documents

// db.products.find({'price':{$gt:250}}).count()
// db.products.find({'price':{$gt:250}}).limit(5)
// db.products.find({'price':{$gt:250}}).limit(5).skip(2)
// db.products.find({'price':{$gt:250}}).limit(5).sort({price:1})

//              LOGICAL OPERATOR

db.products.find({ $and:[ {'price':{$gt:250}}, {'name':'Diamond Ring'}] })

db.products.find({ $and: [{'price':{$not:{$eq:100}}}] }).count()

db.products.find({'price':{$ne:100} }).count()

//               COMPLEX EXPRESSION

// find document price greater than 1340 
db.products.find({$expr:{$gt:['$price',1340]}})

// find sales where ( quantity*price ) is greater than targetPrice
db.sales.find({$expr:{$gt:[{multiply:['$quantity','price']},'$targetPrice']}})

db.sales.find({$expr:{$gt:[{add:['$quantity','price']},'$targetPrice']}})

//               ELEMENTS OPERATOR

db.products.find({price:{$exists:true}}).count()

db.products.find({price:{$gt:1250}}).count()

db.products.find({price:{$type:'number'}}).count()
db.products.find({price:{$type:'string'}}).count()
db.products.find({price:{$type:'bool'}}).count()
db.products.find({price:{$type:'object'}}).count()
db.products.find({price:{$type:'double'}}).count()
db.products.find({price:{$type:'array'}}).count()

db.comments.find({'comments':{$size:4}})

//              PROJECTION

// INCLUDE FIELD PROJECTION 1, EXCLUDE FIELD PROJECTION 0
// CAN'T INCLUDE AND EXCLUDE SAME FIELD 0 0 ALLOWED, 1 1 ALLOWED, 0 1 NOT ALLOWED, {_id:0,comments:1} ALLOWED

// only comments seen
db.comments.find({'comments':{$size:4}},{_id:0,comments:1})

// author and title seen
db.comments.find({'comments':{$size:4}},{_id:0,author:1,title:1})

// allowed author:0,title:0
db.comments.find({'comments':{$size:4}},{_id:0,author:0,title:0})

// not allowed author:1,title:0
db.comments.find({'comments':{$size:4}},{_id:0,author:1,title:0})




// shop> db.comments.find({'comments':{$size:4}},{_id:0,author:1,title:1})
// [ { title: 'Introduction to MongoDB', author: 'John Doe' } ]

// shop> db.comments.find({'comments':{$size:4}},{_id:0,author:0,title:0})
// [
//   {
//     content: 'MongoDB is a popular NoSQL database...',
//     comments: [
//       { user: 'Alice', text: 'Great article!' },
//       { user: 'Bob', text: 'Thanks for sharing.' },
//       { user: 'Eva', text: 'Its beatifull!' },
//       { user: 'jessy' }
//     ],
//     metadata: { views: 1000, likes: 50 }
//   }
// ]



//                       EMBEDDED DOCUMENTS QUERY

db.comments.find({'comments.user':'Lily'})
db.comments.find({'metadata.views':{$gt:1200}})

db.comments.find({'comments.user':'Henry','metadata.likes':{$gt:50}})

// [
//     {
//       _id: 4,
//       title: 'Advanced Queries in MongoDB',
//       content: 'Learn how to write complex queries...',
//       author: 'Michael Johnson',
//       comments: [
//         { user: 'Grace', text: 'Mind-blowing content!' },
//         { user: 'Henry', text: 'Impressive examples.' }
//       ],
//       metadata: { views: 1500, likes: 60 }
//     }
//   ]


db.comments.find({'comments.user':{$all:['Alice','Vinod']}})

// [
//     {
//       _id: 7,
//       title: 'Introduction to MongoDB',
//       content: 'MongoDB is a popular NoSQL database...',
//       author: 'Vinod Thapa',
//       comments: [
//         { user: 'Alice', text: 'Awesome article!' },
//         { user: 'Vinod', text: 'Thanks for sharing.' }
//       ],
//       metadata: { views: 1000, likes: 70 }
//     }
//   ]

// where comments.user is 'Vinod' comments.test is 'Thanks for sharing'

db.comments.find({'comments':{$elemMatch:{'user':'Alice','text':'Awesome article!'}}})

// [
//     {
//       _id: 7,
//       title: 'Introduction to MongoDB',
//       content: 'MongoDB is a popular NoSQL database...',
//       author: 'Vinod Thapa',
//       comments: [
//         { user: 'Alice', text: 'Awesome article!' },
//         { user: 'Vinod', text: 'Thanks for sharing.' }
//       ],
//       metadata: { views: 1000, likes: 70 }
//     }
//   ]

db.comments.find({'comments.user':'Alice','comments.text':'Awesome article!'})

// [
//     {
//       _id: 7,
//       title: 'Introduction to MongoDB',
//       content: 'MongoDB is a popular NoSQL database...',
//       author: 'Vinod Thapa',
//       comments: [
//         { user: 'Alice', text: 'Awesome article!' },
//         { user: 'Vinod', text: 'Thanks for sharing.' }
//       ],
//       metadata: { views: 1000, likes: 70 }
//     }
//   ]

//                    CRUD OPERATIONS
//                    UPDATE
db.comments.updateOne({_id:5},{$set:{'user':'Jessy'}})
db.comments.find({_id:5}).limit(1)

db.comments.find({_id:4}).limit(1)

// [
//     {
//       _id: 4,
//       title: 'Advanced Queries in MongoDB',
//       content: 'Learn how to write complex queries...',
//       author: 'Michael Johnson',
//       comments: [
//         { user: 'Grace', text: 'Mind-blowing content!' },
//         { user: 'Henry', text: 'Impressive examples.' }
//       ],
//       metadata: { views: 1500, likes: 60 }
//     }
//   ]

db.comments.updateOne({_id:4},{$set:{'user':'Jessy', 'text':'bad content'}})

db.comments.find({_id:4}).limit(1)

// [
//     {
//       _id: 4,
//       title: 'Advanced Queries in MongoDB',
//       content: 'Learn how to write complex queries...',
//       author: 'Michael Johnson',
//       comments: [
//         { user: 'Grace', text: 'Mind-blowing content!' },
//         { user: 'Henry', text: 'Impressive examples.' }
//       ],
//       metadata: { views: 1500, likes: 60 },
//       text: 'bad content',
//       user: 'Jessy'
//     }
//   ]

db.comments.find({_id:6}).limit(1)

// [
//     {
//       _id: 6,
//       title: 'Schema Design Best Practices',
//       content: 'Designing schemas for optimal performance...',
//       author: 'Emily Brown',
//       comments: [
//         { user: 'Kevin', text: 'Invaluable insights!' },
//         { user: 'Lily', text: 'Well-structured explanations.' }
//       ],
//       metadata: { views: 700, likes: 65 }
//     }
//   ]

db.comments.updateOne({_id:6},{$unset:{'user':1}})

db.products.find().limit(1)

// [
//     {
//       _id: ObjectId("64c23601e32f4a51b19b9262"),
//       name: 'Smartphone Model X',
//       company: '64c23350e32f4a51b19b9230',
//       price: 699,
//       colors: [ '#000000', '#ffffff', '#ff0000' ],
//       image: '/images/product-smartphone.png',
//       category: '64c2342de32f4a51b19b924e',
//       isFeatured: false
//     }
//   ]

db.products.updateOne({_id: ObjectId("64c23601e32f4a51b19b9262")},{$set:{'price':45}})

db.products.find({_id: ObjectId("64c23601e32f4a51b19b9262")}).limit(1)

// [
//     {
//       _id: ObjectId("64c23601e32f4a51b19b9262"),
//       name: 'Smartphone Model X',
//       company: '64c23350e32f4a51b19b9230',
//       price: 45,
//       colors: [ '#000000', '#ffffff', '#ff0000' ],
//       image: '/images/product-smartphone.png',
//       category: '64c2342de32f4a51b19b924e',
//       isFeatured: false
//     }
//   ]


db.products.find({name: 'Designer Handbag'}).limit(1)

// [
//     {
//       _id: ObjectId("64c23601e32f4a51b19b926c"),
//       name: 'Designer Handbag',
//       company: '64c23350e32f4a51b19b923a',
//       price: 349,
//       colors: [ '#000000', '#cc6600', '#663300' ],
//       image: '/images/product-handbag.png',
//       category: '64c2342de32f4a51b19b9250',
//       isFeatured: true
//     }
//   ]

db.products.updateOne({name: 'Designer Handbag'},{$set:{isFeatured: false}})

db.products.find({name: 'Designer Handbag'}).limit(1)

// [
//     {
//       _id: ObjectId("64c23601e32f4a51b19b926c"),
//       name: 'Designer Handbag',
//       company: '64c23350e32f4a51b19b923a',
//       price: 349,
//       colors: [ '#000000', '#cc6600', '#663300' ],
//       image: '/images/product-handbag.png',
//       category: '64c2342de32f4a51b19b9250',
//       isFeatured: false
//     }
//   ]

db.products.find({price: 120},{isFeatured: false}).limit(5)

// [
//     {
//       _id: ObjectId("64c23edf9dc1fb2f85602168"),
//       company: ObjectId("64c23350e32f4a51b19b9240"),
//        name: 'Ergonomic Granite Sausages',
//      price: 120,
//       colors: [ '#641e3b' ],
//       image: '/images/product-Luxurious.png',
//       category: ObjectId("64c2342de32f4a51b19b925f"),
//       __v: 0
//     },
//     {
//       _id: ObjectId("64c23edf9dc1fb2f85602c38"),
//       name: 'Unbranded Frozen Chicken',
//       company: ObjectId("64c23350e32f4a51b19b9234"),
//       price: 120,
//       colors: [ '#146d77' ],
//       image: '/images/product-Tasty.png',
//       category: ObjectId("64c2342de32f4a51b19b9261"),
//       __v: 0
//     },
//     {
//       _id: ObjectId("64c23f13f8ffc4957dc4f16e"),
//       name: 'Electronic Concrete Bacon',
//       company: ObjectId("64c23350e32f4a51b19b923f"),
//       price: 120,
//       colors: [ '#383d3d' ],
//       image: '/images/product-Fantastic.png',
//       category: ObjectId("64c2342de32f4a51b19b9258"),
//       __v: 0
//     },
//     {
//       _id: ObjectId("64c23f13f8ffc4957dc4fe9e"),
//       name: 'Practical Concrete Ball',
//       company: ObjectId("64c23350e32f4a51b19b9230"),
//       price: 120,
//       colors: [ '#34221e' ],
//       image: '/images/product-Sleek.png',
//       category: ObjectId("64c2342de32f4a51b19b9250"),
//       __v: 0
//     },
//     {
//       _id: ObjectId("64c23f13f8ffc4957dc4ff92"),
//       name: 'Incredible Plastic Sausages',
//       company: ObjectId("64c23350e32f4a51b19b9242"),
//       price: 120,
//       colors: [ '#332648' ],
//       image: '/images/product-Ergonomic.png',
//       category: ObjectId("64c2342de32f4a51b19b9256"),
//       __v: 0
//     }
//   ]

db.products.updateMany({price: 120},{$set:{isFeatured: true}})

db.products.find().limit(10)

db.products.find({price: 120},{isFeatured: false}).limit(5)

db.products.updateMany({price: 120},{$rename:{'isFeatured': 'isFeature'}})



//                        UPDATE EMBEDDED DOCUMENTS

db.comments.find({_id:5}).limit(1)

// [
//     {
//       _id: 5,
//       title: 'Optimizing MongoDB Performance',
//       content: 'Tips and tricks to improve MongoDB performance...',
//       author: 'Alex Turner',
//       comments: [
//         { user: 'Ivy', text: 'Very practical advice!' },
//         { user: 'Jack', text: 'Helped me a lot.' }
//       ],
//       metadata: { views: 900, likes: 55 },
//       user: 'Jessy'
//     }
//   ]

db.comments.updateOne({_id:5},{$push:{comments:{user:'Eva',text:'subscribe to my channel'}}})

db.comments.find({_id:5}).limit(1)

// [
//     {
//       _id: 5,
//       title: 'Optimizing MongoDB Performance',
//       content: 'Tips and tricks to improve MongoDB performance...',
//       author: 'Alex Turner',
//       comments: [
//         { user: 'Ivy', text: 'Very practical advice!' },
//         { user: 'Jack', text: 'Helped me a lot.' },
//         { user: 'Eva', text: 'subscribe to my channel' }
//       ],
//       metadata: { views: 900, likes: 55 },
//       user: 'Jessy'
//     }
//   ]

db.comments.updateOne({_id:5},{$pop:{comments:1}})

db.comments.find({_id:5}).limit(1)

// [
//     {
//       _id: 5,
//       title: 'Optimizing MongoDB Performance',
//       content: 'Tips and tricks to improve MongoDB performance...',
//       author: 'Alex Turner',
//       comments: [
//         { user: 'Ivy', text: 'Very practical advice!' },
//         { user: 'Jack', text: 'Helped me a lot.' }
//       ],
//       metadata: { views: 900, likes: 55 },
//       user: 'Jessy'
//     }
//   ]

db.comments.find({_id:7,'comments.user':'Alice'}).limit(1)

// [
//     {
//       _id: 7,
//       title: 'Introduction to MongoDB',
//       content: 'MongoDB is a popular NoSQL database...',
//       author: 'Vinod Thapa',
//       comments: [
//         { user: 'Alice', text: 'Awesome article!' },
//         { user: 'Vinod', text: 'Thanks for sharing.' }
//       ],
//       metadata: { views: 1000, likes: 70 }
//     }
//   ]

db.comments.updateOne({_id:7,'comments.user':'Alice'},{$set:{'comments.$.text':'Awesome Thapa'}})

db.comments.find({_id:7,'comments.user':'Alice'}).limit(1)

// [
//     {
//       _id: 7,
//       title: 'Introduction to MongoDB',
//       content: 'MongoDB is a popular NoSQL database...',
//       author: 'Vinod Thapa',
//       comments: [
//         { user: 'Alice', text: 'Awesome Thapa' },
//         { user: 'Vinod', text: 'Thanks for sharing.' }
//       ],
//       metadata: { views: 1000, likes: 70 }
//     }
//   ]

db.sales.deleteMany({price:55})

db.comments.find({_id:1})

// [
//     {
//       _id: 1,
//       title: 'Introduction to MongoDB',
//       content: 'MongoDB is a popular NoSQL database...',
//       author: 'John Doe',
//       comments: [
//         { user: 'Alice', text: 'Great article!' },
//         { user: 'Bob', text: 'Thanks for sharing.' },
//         { user: 'Eva', text: 'Its beatifull!' },
//         { user: 'jessy' }
//       ],
//       metadata: { views: 1000, likes: 50 }
//     }
//   ]

db.comments.deleteOne({_id:1})

db.comments.find({_id:2})

// [
//     {
//       _id: 2,
//       title: 'Deep Dive into Aggregation Framework',
//       content: 'The aggregation framework in MongoDB...',
//       author: 'Jane Smith',
//       comments: [
//         { user: 'Charlie', text: 'Very informative!' },
//         { user: 'David', text: 'Well explained.' }
//       ],
//       metadata: { views: 800, likes: 70 }
//     }
//   ]

db.comments.updateOne({_id:1},{$unset:{metadata:1}})


// ctrl c
// .exit

