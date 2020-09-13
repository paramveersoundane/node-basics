const assert =require('assert'); // check the values 'err'
// look at params
exports.insertDocument = (db, document, collection, callback)=>{ 
    const coll= db.collection(collection); // get hold of collection 
    coll.insert(document, (err , result)=>{
        assert.strictEqual(err, null); 
        console.log("Inserted: " +  result.result.n + " documents in the collection "); 
         // result has result property which has n- which is the no. of document in the collection
         callback(result); 
         // when we will be implementing callback function in index.js
         //we will be providing the callback there which will be receiving this parameter

    })
};

exports.findDocuments = (db, collection, callback)=>{
    const coll= db.collection(collection); // get hold of collection 
    coll.find({}).toArray((err, docs)=>{  
        // we pass {} as a parameter in find to match all the collection 
        // and then converting to array of json object
        assert.strictEqual(err,null);
        callback(docs);
    })

};
exports.removeDocument = (db, document, collection, callback)=>{
    const coll= db.collection(collection); // get hold of collection 
    coll.deleteOne(document, (err, result )=>{
        assert.strictEqual(err, null);
        console.log("Removed the document" , document); // we use comma because this is the javascript object
        callback(result);
    })

};

exports.updateDocument = (db, document, update, collection, callback)=>{
    const coll= db.collection(collection); // get hold of collection 
    coll.updateOne(document,{$set: update}, null, (err, result)=>{
        // passing the fields that needs to be updated the way it is done is described or view in 2 parameter 
        assert.strictEqual(err,null);
        console.log("Updated the document with: " , update); // we use comma because this is the javascript object
        // console.log will not be used in production it is just for understanding
        callback(result);
    })   

};