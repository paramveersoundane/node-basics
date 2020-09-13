// copied from dishRouter

const express = require('express');
const bodyParser= require('body-parser');

const promoRouter = express.Router();  // declare as express router
promoRouter.use(bodyParser.json());
// implementing express router
promoRouter.route('/:promoId')   // in index.js we will mount this express router- concept
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
    res.end('Will send details of the promotion: ' + req.params.promoId +' to you!');

})
.post( (req,res,next)=>{  // modification of res will be carried in here because of next
    res.statusCode=403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
    // constructing the reply message in this way we are confirming the details are receiving
})

.put((req,res,next)=>{  // modification of res will be carried in here because of next
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
    ' with details: ' + req.body.description);
})
//dangerous operation for users -delete
.delete((req,res,next)=>{  // modification of res will be carried in here because of next
    res.end('Deleting promotion: ' + req.params.promoId);
});

// we need to export the router

module.exports = promoRouter;