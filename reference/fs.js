const fs = require('fs');
const path = require('path');

// Creating a folder.
fs.mkdir(path.join(__dirname,'/test'),{recursive:true},err=>{
    if(err) throw err;
    console.log("Folder Created !");
})

// Write to a file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),"Hello World!", err=>{
    if(err) throw err;
    console.log("File Created !");
})

// Append to a file
fs.appendFile(path.join(__dirname,'/test','hello.txt'),"I love node JS", err=>{
    if(err) throw err;
    console.log("File Appended !");
})

// Read File
fs.readFile(path.join(__dirname,'/test','hello.txt'),"utf8", (err,data)=>{
    if(err) throw err;
    console.log(data);
})

// Rename File
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloWorld.txt'), (err,data)=>{
    if(err) throw err;
    console.log("File renamed !");
})