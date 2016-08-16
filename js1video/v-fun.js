//v-fun.js


// http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs
   
   

//34:41  line 308

// ---------- FUNCTIONS ----------
// Functions provide code reuse and eliminate repetitive code
// Define a function that checks if a value is in an array

function inArray(arrayToCheck, value){
  for(i = 0; i < arrayToCheck.length; i++){
    if(arrayToCheck[i] === value){
      return true;
    }
  }
  return false;
}
 
var randArray = [1,2,3,4,5];
 
document.write("In Array : ", inArray(randArray, 4), "<br />");
 

 // Local variables defined in functions can't be accessed outside of
// the function
 function times2(num){
  var var2 = 2;
  return num * var2;
}
 
// Causes Error : document.write("Val of var2 : ", var2, "<br />");
 
// Pass a function as a parameter
function times3(num){
  return num * 3;
}

 
function multiply(func, num){
  return func(num);
}
 
document.write("3 * 15 = ", multiply(times3, 15), "<br />");
 


