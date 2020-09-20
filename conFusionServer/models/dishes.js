const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// require('mongoose-currency').loadType(mongoose);
// const Currency= mongoose.type.Currency;

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
// expanded dish schema
const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:String
    },
    label:{
        type:String,
        default:""
    },
    // price:{
    //     type:Currency,
    //     required:true,
    //     min:0
    // },
    feature:{
        type:Boolean,
        default:false
    }
    ,
    comments: [commentSchema]
},{
    timestamps: true
});

var Dishes= mongoose.model('Dish', dishSchema);
module.exports= Dishes;