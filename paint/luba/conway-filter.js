//conway-filter.js
/*
 *     v0.0.2
 */

// Conway's Game of Life
//------------------------------------------


 const LIFE_VALUE = 450;
 const DEAD=0,LIVE=1 ;
var Lubfilt = {};
var color_arr = Array.from(Array(9), () => new Array(2));
color_arr[0][DEAD] = [ 0,0,220];
color_arr[1][DEAD] = [ 0,0,220];
color_arr[2][DEAD] = [ 0,0,220];
color_arr[3][DEAD] = [ 0,0,220];
color_arr[4][DEAD] = [ 0,0,220];
color_arr[5][DEAD] = [ 0,0,220];
color_arr[6][DEAD] = [ 0,0,220];
color_arr[7][DEAD] = [ 0,0,220];
color_arr[8][DEAD] = [ 0,0,220];
color_arr[0][LIVE] = [ 220,0,0];
color_arr[1][LIVE] = [ 220,0,0];
color_arr[2][LIVE] = [ 220,0,0];
color_arr[3][LIVE] = [ 220,0,0];
color_arr[4][LIVE] = [ 220,0,0];
color_arr[5][LIVE] = [ 220,0,0];
color_arr[6][LIVE] = [ 220,0,0];;
color_arr[6][LIVE] = [ 220,0,0];
color_arr[7][LIVE] = [ 220,0,0];
color_arr[8][LIVE] = [ 220,0,0];
//console.info(arr);

function Create2DArray(rows,columns) {
   var arr = [];
   columns = 2*columns;
   for(var x = 0; x <= rows; x++){
        arr[x] = [];
        for(var y = 0; y <=columns; y++){
           arr[x][y] = [ 0,0,220];
    }
}
return arr;
}






Lubfilt.getPix = function(pixels,x,y){
  var src = pixels.data;
  var   canvasWidth = pixels.width;
  var dstOff = (y * canvasWidth + x) * 4;

  return [pixels.data[dstOff],pixels.data[dstOff+1],pixels.data[dstOff+2], pixels.data[dstOff+3]];
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









 Lubfilt.changeLiveingCell = function(neig_counter,color) {
   // this cell is alive (life_value >= LIFE_VALUE)
   //change it acording to neig number
    switch (neig_counter) {
        case 0:
        case 1: //return color;  break;
        case 2:
        case 3:return color;  break;
        case 4:return (color_arr[neig_counter][LIVE]);   break;
        case 5:return color;  break;

  	    case 6:
        case 7: return color;  break;
        case 8:   return [150,150,150];   break;

    }
 }//changeLiveingCell

 Lubfilt.changeDeadCell = function(neig_counter,color) {
       // this cell is dead (life_value< LIFE_VALUE)
       //change it acording to neig number
     switch (neig_counter) {
         case 0:return color;   break;
         case 1:
         case 3: //return [40,80,0];   break;
         case 2:
         case 3:
         case 4:return (color_arr[neig_counter][DEAD]);   break;
         case 5:
         case 6: //return [120,200,0];   break;

         case 7:
         case 8: return [0,180,0];   break;
            //return [0,0,255];  break;
        //default: return [250,250,250];   break;
     }
  }//changeDeadCell


  Lubfilt.changePix = function  (pixels,x,y,ncolor){

     var src = pixels.data
     var   canvasWidth = pixels.width;
     var dstOff = (x * canvasWidth + y) * 4;

     src[dstOff] =  ncolor[0] ;
     src[dstOff+1]= ncolor[1];
     src[dstOff+2]= ncolor[2];

     return pixels;
   }

   Lubfilt.calculateColor = function(pixels,x,y){

    var  canvasWidth = pixels.width;
    var dst;
    dst = (x * canvasWidth +y) * 4;
     return [pixels.data[dst], pixels.data[dst+1], pixels.data[dst+2]];
   }//calculateColor

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
        color = Lubfilt.calculateColor (imgPixels,x,y);

        if (life_value >= LIFE_VALUE){
           temp_image_pixels[x][y] =  Lubfilt.changeLiveingCell(neig_counter,color);
            //  temp_image_pixels[x][y] =  color_arr[neig_counter][LIVE]
          }else{
             temp_image_pixels[x][y] =  Lubfilt.changeDeadCell(neig_counter,color);
            //temp_image_pixels[x][y] =  color_arr[neig_counter][DEAD]
           }

       /*kill alive
       if (life_value >= LIFE_VALUE && neig_counter <=1){
       if (life_value >= LIFE_VALUE && neig_counter>3){
        living the DEAD
       if (life_value < LIFE_VALUE && neig_counter ==3){
       */

     }
  }

     for(var y = 0; y < imgPixels.width; y++){
       for(var x = 0; x < imgPixels.height; x++){
          color=temp_image_pixels[x][y];
          Lubfilt.changePix (imgPixels,x,y,color)
       }
     }
     canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
     return canvas.toDataURL();
 }
