//Declare the Color Object with our new keyword below here.
const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255)
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255)

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let redIntensity = rgb[0]/255*100
  redIntensity = Math.round(redIntensity)
    return redIntensity
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let greenIntensity = rgb[1]/255*100
  greenIntensity = Math.round(greenIntensity)
    return greenIntensity
}

//blueIntensity
Color.blueIntensity = function(rgb){
  let blueIntensity = rgb[2]/255*100
  blueIntensity = Math.round(blueIntensity)
    return blueIntensity
}

//brightness
Color.function(){
let bright = (Color.redIntensity(rgb)+Color.greenIntensity(rgb)+Color.blueIntensity(rgb))/3;
  return bright;
}

//complement
let comp = []
  for(let c=0;c<3;c++){
  comp.push()
}
return comp;
