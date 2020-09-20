const express = require('express');
const bodyParser= require('body-parser');
// importing mongoose
const mongoose=require('mongoose');
const Dishes=require('../models/dishes');

const dishRouter = express.Router();  // declare as express router
dishRouter.use(bodyParser.json());
// implementing express router
dishRouter.route('/')   // in index.js we will mount this express router- concept
// //specify the endpoint and then method(get post put) will simply chained one grp of method implementation 
// //-express router=> for different endpoint
// .all((req,res,next)=>{ // when req comes all the request(get,post etc) this code will execute by default first
//     res.statusCode=200;
//     res.setHeader('Content-type','text/plain');
//     next(); // it will continue to look  for addtional specification to match /dishes endpoint
//     // this next will cause it to pass on
// })
// this is how we handle response
.get((req,res,next)=>{ // modification of res will be carried in here because of next
    //res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
    Dishes.find({}) // perform find operation on db// it will return promise so handling in then
    .then((dishes)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes); // will take parameter and send it as json response
    },(err)=>next(err))
    .catch((err)=>next(err));

})
.post( (req,res,next)=>{  // modification of res will be carried in here because of next
    // res.statusCode=403;
    // res.end('POST operation not supported on /dishes/'+ req.params.dishId);
    // constructing the reply message in this way we are confirming the details are receiving
    Dishes.create(req.body) // body parse already parse it 
    .then((dish) => {
        console.log('Dish Created ', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.put((req,res,next)=>{  // modification of res will be carried in here because of next
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
//dangerous operation for users -delete
.delete((req,res,next)=>{  // modification of res will be carried in here because of next
    res.end('Deleting dish: ' + req.params.dishId);
    Dishes.remove({})
    .then((resp)=>{
        console.log(resp);
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
// operations By ID
dishRouter.route('/:dishId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true }) // this method will return updated value
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Dishes.findByIdAndRemove(req.params.dishId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');//return response
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


// we need to export the router

module.exports = dishRouter;