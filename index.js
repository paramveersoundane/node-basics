// Step:3
var rect =require('./rectangle');

function solveRectangle(l,b){
  console.log("Solving rectangle");
  rect(l,b,(err,rectangle)=>{
      if(err){
          console.log("Error: " + err.message);
      }
      else{
          console.log("the are of rectangle is:  " + l+ " " + b + " " + rectangle.area());
      }
  });
  console.log("this statement is after the call to rect");

}

solveRectangle(-12,32);
solveRectangle(21,43);
solveRectangle(21,4);
solveRectangle(0,43);
  // Step 3 END 
   // Step2
// var rect =require('./rectangle');
   // Step 1
// // var rect= {
// //     perimeter:(x,y)=> 2*(x+y),
// //     area: (x,y)=>x*y
// // }
   // Step 1 End
// function solveRectangle(l,b){
//    if(l<=0 || b<=0){
//        console.log("rectangle dimensions are invalid");
//    }
//    else{
//        console.log("Perimeter is " + rect.perimeter(l,b));
//        console.log("Area is " + rect.area(l,b) + " ");
//    }

// }

// solveRectangle(-12,32);
// solveRectangle(21,43);
 //Step 2 End