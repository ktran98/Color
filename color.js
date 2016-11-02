//Declare the Color Object with our new keyword below here.
const color = newObject();
  this.red = R;
  this.blue = B;
  this.greed = G;

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[0] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[0] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){

};

//greenIntensity
Color.greenIntrnsity = function(rgb){


};

//blueIntensity
Color.blueIntensity = function(rgb){


};

//brightness


//complement
