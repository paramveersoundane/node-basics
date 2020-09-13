const MongoClient = require('mongodb').MongoClient; // provides mongoclient which enables to connect to the server
const assert = require('assert');  // use to check values

const url = 'mongodb://localhost:27017/'; // ur lof the mongodb server
const dbname= 'conFusion'; // Db we created earlier in mongo command line interface

MongoClient.connect(url, (err,client)=>{ // callback function has 2 param 1 eror and client
    assert.equal(err,null); // check if error is null
    console.log('Connected correctly to the server');
    const db = client.db(dbname); // to  connect to the database
    const collection = db.collection('dishes'); // try to access the dishes collection
    collection.insertOne({"name":"Tefhkdhks", "description": "second desc" },(err,result)=>{ //inserting one document- 1 param is the document 2 param is the callback function
        assert.strictEqual(err,null); // instead of equal
        console.log(result.ops); // result provide ops property which provide how many operations are performed successfully
        collection.find({}).toArray((err,docs)=>{ 
            // find it will search for everything that is there in the collection
            // and then this can be converted to an array of json object
            // and this toArray take callback function as a parameter
            assert.strictEqual(err,null); // instead of equal  //check if error is null
            console.log("Found: \n");
            console.log(docs);
            db.dropCollection('dishes', (err,result)=>{  //will drop the specified the collection and clean up the database(db) to again use it
                // second parameter is a callback function
                assert.strictEqual(err,null); // instead of equal  //check if error is null
                client.close(); // we will close the connection to the database at his point

            });
        })

    }); 
})