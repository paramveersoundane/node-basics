const mongoose= require('mongoose');
const Dishes= require('./models/dishes');

const url= 'mongodb://localhost:27017/conFusion';
const connect= mongoose.connect(url);

connect.then((db)=>{
    console.log("Connected currently to the server");
    var newDish = new Dishes({
        name:'Utthapazia',
        description:'The desc for test'
    });
    newDish.save()
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