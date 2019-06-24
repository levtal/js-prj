//conway-filter.js
/*
 *     v0.0.2
 */

// Conway's Game of Life
//------------------------------------------

var Lubfilt = {};

Lubfilt.invert = function(pixels) {

  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = 255 - pixels.data[i]
    pixels.data[i+1] = 255 - pixels.data[i+1]
    pixels.data[i+2] = 255 - pixels.data[i+2]
  }

  return pixels
}


Lubfilt.getPix = function(pixels,x,y){
  var src = pixels.data;
  var   canvasWidth = pixels.width;
  var dstOff = (y * canvasWidth + x) * 4;

  return [pixels.data[dstOff],pixels.data[dstOff+1],pixels.data[dstOff+2], pixels.data[dstOff+3]];
}





 function Create2DArray(rows,columns) {
    var arr = [];
    for(var x = 0; x <= rows; x++){
         arr[x] = [];
         for(var y = 0; y <=columns; y++){
         arr[x][y] = DEAD;
     }
 }
 return arr;
}


 Lubfilt.calculateLife = function(pixels,x,y){

  var  canvasWidth = pixels.width;
  var dstOff;

  dstOff = (x * canvasWidth +y) * 4;

  sumColor = pixels.data[dstOff] + pixels.data[dstOff+1] + pixels.data[dstOff+2];
 return sumColor;
}

Lubfilt.countNeig = function(pixels,x,y){
  var src = pixels.data;
  var ht = pixels.height,  wt = pixels.width;
  //var dstOff;
  var neig_counter =0,life_value=0;

   for (var i = x-1; i <= x+1; i++) {
       for (var j = y-1; j <= y+1; j++) {
          if  (!(i == x  &&  j == y) &&  !(j < 0 ||  i <  0)&&  !(j >wt-1 ||  i > ht-1))   {
            life_value =  Lubfilt.calculateLife( pixels,i,j);
              if (life_value > LIFE_VALUE) {
                 neig_counter++
             }
         }
     }
  }
  return  neig_counter;
}





Lubfilt.calculateColor = function(pixels,x,y,type){

 var  canvasWidth = pixels.width;
 var dst;

 dst = (x * canvasWidth +y) * 4;
 if (type == DEAD){

    return [pixels.data[dst]-45, pixels.data[dst+1]-45 , pixels.data[dst+2]-45];
  }
 if (type == LIVE){
   //return [0,0,0];
    return [pixels.data[dst]+45, pixels.data[dst+1]+45 , pixels.data[dst+2]+45];
  }
}//calculateColor

Lubfilt.changePix = function  (pixels,x,y,ncolor){
 var src = pixels.data
 var   canvasWidth = pixels.width;
 var dstOff = (x * canvasWidth + y) * 4;
   src[dstOff] =  ncolor[0] ;
   src[dstOff+1]= ncolor[1];
   src[dstOff+2]= ncolor[2];
 return pixels;
 }

//const LIFE_VALUE = 350;
const LIFE_VALUE = 310;
const DEAD=0,LIVE=1 ;

 Lubfilt.conway = function(imgObj) {
     var canvas = document.createElement('canvas');
     var canvasContext = canvas.getContext('2d');

     var imgW = imgObj.width;
     var imgH = imgObj.height;
     canvas.width = imgW;
     canvas.height = imgH;
     var  temp_image_pixels = Create2DArray(imgH,imgW);
     canvasContext.drawImage(imgObj, 0, 0);
     var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);


     for(var y = 0; y <  imgPixels.width; y++){
         for(var x = 0; x <  imgPixels.height; x++){


                   neig_counter =  Lubfilt.countNeig( imgPixels,x, y);
                   life_value =  Lubfilt.calculateLife( imgPixels,x, y);
                   if (life_value >= LIFE_VALUE && neig_counter <=1){
                     temp_image_pixels[x][y] = DEAD ;
                     }
                   // the cell   alive and      neig > 3
                  else if (life_value >= LIFE_VALUE && neig_counter>3){
                         temp_image_pixels[x][y] = DEAD ;
                    }
                    // the cell   dead  and      neig = 3

                  if (life_value < LIFE_VALUE && neig_counter ==3){
                       temp_image_pixels[x][y] = LIVE ;

                }
           }
     }

     for(var y = 0; y < 2*imgPixels.width; y++){
         for(var x = 0; x < imgPixels.height; x++){
          var i = (x * 4) * imgPixels.width + y * 4;

        if (temp_image_pixels[x][y] == DEAD)
         {

           color = Lubfilt.calculateColor (imgPixels,x,y,DEAD);
           Lubfilt.changePix (imgPixels,x,y,color)
         }
        else
         {
             color = Lubfilt.calculateColor (imgPixels,x,y,LIVE);
           Lubfilt.changePix (imgPixels,x,y,color)
         }
      }
      }
     canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
     return canvas.toDataURL();
 }
