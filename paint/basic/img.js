//Using_images
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images


  var canvas;
  var ctx;
    window.onload = function draw() {
        ctx = document.getElementById('tutorial').getContext('2d');
	   lne();
	   //transparent();
	   //arcs(); 
	   //rects();
		
  }
  
 function lne() {
    var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = 'https://bandedbrewing.com/wp-content/uploads/2018/05/bb_diamond_black_big.png';
 
  
} 
  
  
   