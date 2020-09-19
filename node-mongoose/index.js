const mongoose= require('mongoose');
const Dishes= require('./models/dishes');

const url= 'mongodb://localhost:27017/conFusion';
const connect= mongoose.connect(url);

connect.then((db)=>{
    console.log("Connected currently to the server");
   Dishes.create({  // create method takes new document as an argument which needs to be stored
        name:'Utthapazia',
        description:'The desc for test'
    })
    .then((dish)=>{
        console.log("Saving the dish:");
        console.log(dish);
        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log("Showing all the dishes:");
        console.log(dishes);
        return Dishes.remove({});
    })
    .then(()=>{
        console.log("Removed dishes");
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    })
})