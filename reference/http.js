const http = require('http');

http.createServer((req,res)=>{

    res.write("Hi");
    res.end();

}).listen(4000,()=>{ console.log('Server Running !') });















































