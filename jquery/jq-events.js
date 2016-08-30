//http://www.newthinktank.com/2015/10/learn-jquery-one-video/

//https://www.youtube.com/watch?v=BWXggB-T1jQ

//https://developer.mozilla.org/en-US/docs/Web/CSS
// 28:34  line 258  
$("document").ready(function() { // 

  // EVENTS IN JQUERY
 
  // Trigger events on mouseover
  $("#logo2").mouseover(function() {
    $("#logo2").attr("src", "ntt-logo-horz.png");
  });

   // Trigger events on mouseout
  $("#logo2").mouseout(function() {
    $("#logo2").attr("src", "ntt-logo.png");
  });


  // Handle mouseover and mouseout with hover
  $("h2").hover(function() {
    // mouseover
    $("h2").css("color", "green");
  }, function() {
    // mouseout
    $("h2").css("color", "black");
  });

    // Perform an action on double click
  $("#logo2").dblclick(function() {
    $("#logo2").attr("src", "ntt-logo-plastic.png");
  });

  // Get the document x and y position on click
  $(document).click(function(e) {
    $("#mClickXPos").val(e.pageX);
    $("#mClickYPos").val(e.pageY);
  });
 
  // Get the x and y as the mouse moves
  // Use screenX and screenY to get x and y for the screen
  $(document).mousemove(function(e) {
    $("#mMoveXPos").val(e.screenX);
    $("#mMoveYPos").val(e.screenY);
  });
 // 33:0  line 295  
}); <!-- End of JQuery Code -->