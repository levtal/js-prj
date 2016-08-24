//http://www.newthinktank.com/2015/10/learn-jquery-one-video/

//https://www.youtube.com/watch?v=BWXggB-T1jQ

//https://developer.mozilla.org/en-US/docs/Web/CSS

$("document").ready(function() { // line 108

    // ADDING / REMOVING / CHANGING ELEMENTS
 
  // You can change CSS attributes like this
  // # targets ids and . targets classes
  $("#wrapper").css("width", 500);
  $("#wrapper").css("margin", "auto");
  $("#logo2").css("float", "left");
  $("#p_two").css("color", "red");
  
  // How to pass in multiple arguments
  $("#p_two").css({
	  "background" : "url('repeatBkgrnd.png') repeat-y"
	  });
 
   // line 122  6:58
  
   $("a").css("color", "blue"); // <a href...
 
  // Target tags only in other tags, classes, or ids
  // In this case only <a href ...>  inside <table id="tableData"> ....</table>
  $("#tableData a").css("color", "green");
 
  // Target every a element that comes after a em(<em>:  emphasized text)
  $("em + a").css("color", "orange");
 
  // Target children elements in elements(every <em> tag inside <p> tag)
  $("p > em").css("color", "gray");
 
  // Target the 3rd li in a list
  $("#oListIndent li:nth-child(3)").css("color", "red");
 
  // Change the text in an html element if the li has a
  // name attribute
  $("li[name]").html("'and the Goblet of Fire'");
 
  // Change the value in a text input element
  $("input[type='text']#yourName").val("Derek");
 
  // Target items that contain a value (*=)
  $("a[href*='google']").css("font-weight", "bolder");
 
  // Target an image with an alt that starts with (^=) NTT
  // and change the border
  $("img[alt^='NTT']").css({
	         "border-color": "black",
             "border-width":"1px",
             "border-style":"solid"
		});
 
  $("a[href^='http://g']").css("color", "cyan");
 
  $("a[href^='mailto:']").css("color", "yellow");
 
    // line 157  13:51
  
  
  
  
}); <!-- End of JQuery Code -->