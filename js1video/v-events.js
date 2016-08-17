//v-events.js


// http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs
   

 
 
//44:01  line 394    
 
 
document.write("<b>EVENT HANDLING </b>  <br />");
 
  
// ---------- EVENT HANDLING ----------
function openAlert(mess){
  alert(mess);
}
 
 
// ---------- DATE ----------
// Get a Date object
var curDate = new Date();
 
document.write("Date : ", curDate.getDate(), "<br />");
document.write("Month : ", curDate.getMonth(), "<br />");
document.write("Day : ", curDate.getDay(), "<br />");
document.write("Year : ", curDate.getFullYear(), "<br />");
document.write("Time : ", curDate.getHours(), ":", curDate.getMinutes(),
  ":", curDate.getSeconds(), ":", curDate.getMilliseconds(), "<br />");
// Create a Date object for my birthday
var myBD = new Date("December 21, 2015");
 
var msForBD = myBD.getTime();
var timeNow = curDate.getTime();
var tilMyBD = msForBD - timeNow;
 
document.write("Days til Birthday : ", tilMyBD / (1000 * 60 * 60 * 24), "<br />");
 
  
 
 
 
 //51:40  line 463
 
 
 
 
 
 
 
 
 
 
 

