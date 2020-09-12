
// Code-1
const http =require('http'); // accessinh http core module
const fs =require('fs'); // allows to read and write files
const path = require('path'); // allow to specify the path of files
const { callbackify } = require('util');
const hostname="localhost";
const port=3000;

const server = http.createServer((req,res)=> { // req incoming request from any browser or anywhere
    //console.log(req.headers);
    console.log("Request for: " + req.url + " by method: " + req.method);
    // res.statusCode=200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<html><body><h1>Hello World!</h1></body></html>'); // res sent to client
    if(req.method == "GET"){
        var fileUrl;
        if(req.url == '/') fileUrl='/index.html';
        else fileUrl =req.url;

        var filePath= path.resolve('./public' + fileUrl); // this will  give the full path of the file
        const fileExt= path.extname(filePath); // examine the extension
        if(fileExt == '.html'){
            fs.exists(filePath, (exists)=>{ // callback function
                if(!exists){
                    res.statusCode=404;
                    res.setHeader('Constent-type','text/html');
                    res.end('<html><body><h1>Error 404 '+  fileUrl + ' not found </h1></body></html>');
                    return;
                }
                res.statusCode=200;
                res.setHeader('Constent-type','text/html');
                fs.createReadStream(filePath).pipe(res); //will read the file from filePath
                // made a mistke=>  fs.createReadStream(filePath); was not responding
            })  // check if file exists
        }
        else{
            res.statusCode=404;
            res.setHeader('Constent-type','text/html');
            res.end('<html><body><h1>Error 404 '+  fileUrl + ' not a HTML file </h1></body></html>');
            return;
        }

    }
    else{
        res.statusCode=404;
            res.setHeader('Constent-type','text/html');
            res.end('<html><body><h1>Error 404 '+  req.method + ' not supported by this server </h1></body></html>');
            return;
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);  // use back quote to use variables as shown
})

// Code-1 END