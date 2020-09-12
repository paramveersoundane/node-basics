//Step 3
 // https://nodejs.org/api/errors.html#errors_class_error
module.exports=(x,y,callback) =>{  // callback function pass as the third parameter
    // simulating with help of settimeout instead of delay caused by mongoDB
    if(x<=0 || y<=0){
        setTimeout(()=> 
            callback(new Error("rectangle dimensions are invalid"),
                 null),
            2000); // here second parameter will be ignored when callback was just received
        console.log("rectangle dimensions are invalid");
    }
    else{
        setTimeout(()=> 
            callback(null,{
                perimeter :(x,y)=> 2*(x+y),
                area: (x,y)=> (x*y)
            }
                 ), // first param to null cause no error
            2000); // here second parameter will be ignored when callback was just received
    }
}
// callback is function when supplied in when module is called (first class functions)
// callback create new Error object

// Step 3 END


// Step 2
// exports.perimeter = (x,y)=> 2*(x+y);
// exports.area= (x,y)=> (x*y);  // module.exports can also be written
// Step 2 End