const express= require('express');
const http=require('http');
const hostname='localhost';
const port=4000;
const app = express();

app.use( (req,res,next)=> {  // 3 parameter is an optional parameter
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>This is express example</h1></body></html>');
});

const server= http.createServer(app);

server.listen(port, hostname, ()=> {
    console.log(`Server running at: http//:${hostname}:${port}`);
})