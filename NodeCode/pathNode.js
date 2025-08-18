const path = require('path');

var filename = 'D:\\Tutorials\\NodeJS\\index.js';
console.log('path.basename(filename) ',path.basename(filename));
// path.basename(filename)  index.js

// absolute path
console.log('__filename ',__filename);
// __filename  D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\LearningNeverEndsWB\NodePractise\etc\pathNode.js

console.log('path.basename(__filename) ',path.basename(__filename));
// path.basename(__filename)  pathNode.js

console.log('path.extname(filename) ',path.extname(filename));
// path.extname(filename)  .js

console.log('path.dirname(filename) ',path.dirname(filename));
// path.dirname(filename)  D:\Tutorials\NodeJS

console.log('path.join() ',path.join(__dirname,'..','users','diagram'));
// path.join()  D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\LearningNeverEndsWB\NodePractise\users\diagram

var pathname = 'D:\\finacusjobhackathon\\Almabetter\\AlmabetterWeb3\\..\\LearningNeverEndsWB\\NodePractise\\..\\etc\\pathNode.js';
console.log('path.normalize() ',path.normalize(pathname))
// path.normalize()  D:\finacusjobhackathon\Almabetter\LearningNeverEndsWB\etc\pathNode.js

console.log('path.resolve() ',path.resolve('users','category','diagram','flowchart'))
// path.resolve()  D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\LearningNeverEndsWB\NodePractise\etc\users\category\diagram\flowchart

console.log('path.parse(filename) ',path.parse(filename));

// path.parse(filename)  
// {
//   root: 'D:\\',
//   dir: 'D:\\Tutorials\\NodeJS',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

// relative path etc\pathNode.js


var filename = 'D:\\Tutorials\\NodeJS\\index.js';
console.log(path.isAbsolute(filename)) // true

var relativePath = 'etc\pathNode.js';
console.log(path.isAbsolute(relativePath)) // false

console.log(__filename)
// D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\LearningNeverEndsWB\NodePractise\etc\pathNode.js

console.log(__dirname);
// D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\LearningNeverEndsWB\NodePractise\etc>

console.log('__filename = ', __dirname + path.basename(__filename))





