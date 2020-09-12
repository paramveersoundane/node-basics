// Code-1
const http =require('http'); // accessinh http core module

const hostname="localhost";
const port=3000;

const server = http.createServer((req,res)=> { // req incoming request from any browser or anywhere
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>'); // res sent to client
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);  // use back quote to use variables as shown
})

// Code-1 END