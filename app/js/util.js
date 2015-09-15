/**
 * Created by BrayanRosas on 9/13/2015.
 */
// generate a number between min and max
var generateRandom=function (min,max){

     if(min==max)
     return max;
    return Math.round(Math.random()*(max-min)+min);
};

var getRandomDirection = function() {

    if(generateRandom(0,1)== 0)
        return "x";
    else
        return "y";
};
