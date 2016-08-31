//jq-animation.js
//http://www.newthinktank.com/2015/10/learn-jquery-one-video/

//https://www.youtube.com/watch?v=BWXggB-T1jQ

//https://developer.mozilla.org/en-US/docs/Web/CSS
// 40:0  line 362
$("document").ready(function() { // 

  // Animation  IN JQUERY
 
  
   // hide an element on click
  $("#p_one").click(function() {
    $(this).hide();
  });


// slowly fade out an element over 2000 ms
  // You can also use fast, normal, and slow
  $("#p_two").click(function() {
    $(this).fadeOut(2000);
 
    // Redisplay the hidden element
    // You can also use .toggle(), .show() and .fadeIn()
    $("#p_one").fadeToggle(2000);
  });
 

  // Fade an image to a given opacity
  $("#logo2").click(function() {
    $(this).fadeTo('slow', .50);
  });
 
  // Target td that contains 'Bonds'
  $("td:contains('Bonds')").click(function() {
 
    // Hide row that contains a td that contains 'Bonds'
    $("tr:has(td:contains('Bonds'))").slideUp(1000);
  });
 
  // Make the Bonds row reappear
  // You can also use slideToggle()
  $("td:contains('Hall')").click(function() {
    $("tr:has(td:contains('Bonds'))").slideDown(1000);
  });
 // 44:0  line 398
}); <!-- End of JQuery Code -->