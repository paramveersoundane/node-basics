//var rect =require('./rectangle');
var rect= {
    perimeter:(x,y)=> 2*(x+y),
    area: (x,y)=>x*y
}

function solveRectangle(l,b){
   if(l<=0 || b<=0){
       console.log("rectangle dimensions are invalid");
   }
   else{
       console.log("Perimeter is " + rect.perimeter(l,b));
       console.log("Area is " + rect.area(l,b) + " ");
   }

}

solveRectangle(-12,32);
solveRectangle(21,43);