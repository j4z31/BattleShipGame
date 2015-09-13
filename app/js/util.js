/**
 * Created by BrayanRosas on 9/13/2015.
 */
// generate a number between min and max
var generateRandom=function (min,max){
    var maxAux = max + 1;
    if(min==0) {

        // console.log(Math.floor((Math.random() * maxAux) + min));
        return Math.floor((Math.random() * maxAux) + min);
    }
    // console.log(Math.floor((Math.random() * max) + min));
    return Math.floor((Math.random() * max) + min);
};
