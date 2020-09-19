// Removing all the call back function and returning promises//
/* Callback Hell And Promises */
const assert =require('assert'); // check the values 'err'
// look at params
exports.insertDocument = (db, document, collection, callback)=>{ 
    const coll= db.collection(collection); // get hold of collection 
    return coll.insert(document);
};

exports.findDocuments = (db, collection, callback)=>{
    const coll= db.collection(collection); // get hold of collection 
    //******** removing callback and returning promise */
    // coll.find({}).toArray((err, docs)=>{  
    //     // we pass {} as a parameter in find to match all the collection 
    //     // and then converting to array of json object
    //     assert.strictEqual(err,null);
    //     callback(docs);
    // })
    return coll.find({}).toArray();

};
exports.removeDocument = (db, document, collection, callback)=>{
    const coll= db.collection(collection); // get hold of collection 
    return coll.deleteOne(document);

};

exports.updateDocument = (db, document, update, collection, callback)=>{
    const coll= db.collection(collection); // get hold of collection 
    return coll.updateOne(document,{$set: update}, null);   

};