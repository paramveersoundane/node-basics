const express= require('express');
const http=require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { json } = require('body-parser');



const hostname='localhost';
const port=4000;
const app = express();
app.use(morgan('dev')); // as this development version it will display additional info as require
app.use(bodyParser.json());// this allows parse the body of req message to format in json
// 1 param endpoint 2 param callback function
app.all('/dishes',(req,res,next)=>{ // when req comes all the request(get,post etc) this code will execute by default first
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next(); // it will continue to look  for addtional specification to match /dishes endpoint
    // this next will cause it to pass on
});
// this is how we handle response
app.get('/dishes',(req,res,next)=>{ // modification of res will be carried in here because of next
    res.end('Will send all the dishes to you!');

});
app.post('/dishes', (req,res,next)=>{  // modification of res will be carried in here because of next
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    // constructing the reply message in this way we are confirming the details are receiving
});

app.put('/dishes', (req,res,next)=>{  // modification of res will be carried in here because of next
    res.statusCode=403;
    res.end('Put operation not supported on /dishes ');
});
//dangerous operation for users -delete
app.delete('/dishes', (req,res,next)=>{  // modification of res will be carried in here because of next
    res.end('Deleting all the details!');
});
// =========START=======//
app.get('/dishes/:dishId',(req,res,next)=>{ // modification of res will be carried in here because of next
    res.end('Will send  the detail of the dish :' + req.params.dishId + " to you!");
    // above param should match

});
app.post('/dishes/:dishId', (req,res,next)=>{  // modification of res will be carried in here because of next
    res.end('Post operation not supported for :' + req.params.dishId );
    // constructing the reply message in this way we are confirming the details are receiving
});

app.put('/dishes/:dishId', (req,res,next)=>{  // modification of res will be carried in here because of next
    res.write("Updating the dish" + req.params.dishId);
    res.end('Will update the dish: ' + req.body.name + " with details " + req.body.description);
});
//dangerous operation for users -delete
app.delete('/dishes/:dishId', (req,res,next)=>{  // modification of res will be carried in here because of next
    res.end('Deleting the dish' + req.params.dishId);
});

// ========END========//
app.use(express.static(__dirname + '/public')); // this tells to serve up the static files from __dirname
// this particular folder in the root folder of this project and inside the public folder.

//We have set up our server to serve up static files from the public folder,
// and if we just say localhost:3000 by default, it'll serve up the index.html file.
app.use( (req,res,next)=> {  // 3 parameter is an optional parameter
   
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>This is express example</h1></body></html>');
     //http://localhost:4000/e it will serve the below response
});

const server= http.createServer(app);

server.listen(port, hostname, ()=> {
    console.log(`Server running at: http//:${hostname}:${port}`);
})