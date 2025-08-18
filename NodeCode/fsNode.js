// node ./fs.js
// node --watch ./index.js   nodemon alternative

var fs = require("fs");
// fs.writeFileSync("data.txt","mohit");

// fs.writeFile("data.txt","mohit mudgal",(err)=>{
//     if(err){console.log(err);}
//     else{console.log("success")}
// })

// synchronous
// var data = fs.readFileSync('data.txt','utf-8');
// console.log(data);

// asynchronous
// var data = fs.readFile('data.txt','utf-8', (err,data) => { if(err){console.log(err);} else{console.log(data);} })

// var data = fs.readFile('data.txt','utf-8', (err,data) => { if(err)console.log(err); console.log(data); })

// var data = fs.readFileSync('data.txt','utf-8');
// console.log(data);

// fs.appendFileSync('data.txt','\n hi adil');

// fs.appendFile('data','\n hi mohita',(err)=>{
//     if(err)console.log(err); 
//     console.log('file append successful');
// })

// var data = fs.readFileSync('data.txt','utf-8');
// console.log(data);


// delete fs operation
// fs.unlinkSync('data');

// fs.unlink('data', (err)=>{
//     if(err)console.log(err); 
//     console.log('file delete successful');
// })

// fs.writeFile("data1.txt","mohit mudgal",(err)=>{
//     if(err){console.log(err);}
//     else{console.log("success")}
// })

// fs.renameSync('data1.txt', 'data2.txt');



var data = fs.readFile('data.txt','utf-8', (err,data) => { if(err)console.log(err); console.log(data); })
// var data = fs.readFileSync('data2.txt','utf-8');
console.log(data);

// move file using rename
// fs.rename('data2.txt', 'MyFolder/data2.txt', (err)=>{
//     if(err)console.log(err); 
//     console.log('file rename successful');
// })

// copying files using cp and cpSync
// fs.cpSync('data.txt','data3.txt');
fs.cp('data.txt','data3.txt', (err,data) => { if(err)console.log(err); console.log('file copied successfully'); });



var data = fs.readFile('data3.txt','utf-8', (err,data) => { if(err)console.log(err); console.log(data); })
// var data = fs.readFileSync('data2.txt','utf-8');
console.log(data);