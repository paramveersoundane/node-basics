// copied from dishRouter

const express = require('express');
const bodyParser= require('body-parser');

const leaderRouter = express.Router();  // declare as express router
leaderRouter.use(bodyParser.json());
// implementing express router
leaderRouter.route('/:leaderId')   // in index.js we will mount this express router- concept
//specify the endpoint and then method(get post put) will simply chained one grp of method implementation 
//-express router=> for different endpoint
.all((req,res,next)=>{ // when req comes all the request(get,post etc) this code will execute by default first
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next(); // it will continue to look  for addtional specification to match /dishes endpoint
    // this next will cause it to pass on
})
// this is how we handle response
.get((req,res,next)=>{ // modification of res will be carried in here because of next
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');

})
.post( (req,res,next)=>{  // modification of res will be carried in here because of next
    res.statusCode=403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
    // constructing the reply message in this way we are confirming the details are receiving
})

.put((req,res,next)=>{  // modification of res will be carried in here because of next
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + 
    ' with details: ' + req.body.description);
})
//dangerous operation for users -delete
.delete((req,res,next)=>{  // modification of res will be carried in here because of next
    res.end('Deleting leader: ' + req.params.leaderId);
});

// we need to export the router

module.exports = leaderRouter;