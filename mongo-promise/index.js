const MongoClient = require('mongodb').MongoClient; // provides mongoclient which enables to connect to the server
const assert = require('assert');  // use to check values
const dboper = require('./operation');

const url = 'mongodb://localhost:27017/'; // ur lof the mongodb server
const dbname= 'conFusion'; // Db we created earlier in mongo command line interface

MongoClient.connect(url).then((client)=>{ // callback function has 2 param 1 eror and client
    //assert.equal(err,null); // check if error is null
    console.log('Connected correctly to the server');
    const db = client.db(dbname); // to  connect to the database

    //---------updated code---------//
    // Notice the structure of the methods implemented
    dboper.insertDocument(db,{"name": " Tefsg", "description":"fsf sfss"},'dishes')
    .then((result)=>{
        //callback receives result from callback- llok into operation.js
        console.log(" Insert Document: \n" , result.ops); // ops provide no. of insert operation
        return dboper.findDocuments(db,'dishes')
    })
    .then((docs)=>{
        console.log("Found Documents: \n ", docs);
        return dboper.updateDocument(db,{"name": " Tefsg"}, {"description" : "updated the info"}, 'dishes')
    })
    .then((result)=>{
        console.log("Uodated the document: \n", result.result); // it will pass the update obj again
        return dboper.findDocuments(db,'dishes')
    })
    .then((docs)=>{
        console.log("Found Documents: \n ", docs);
        return db.dropCollection('dishes')
    })
    .then((result)=> {
        //will drop the specified the collection and clean up the database(db) to again use it
        console.log("Dropped:\n", result);
        return client.close();// we will close the connection to the database at his point
    })
    .catch(err=>console.log(err));


})
.catch(err=>console.log(err));