var Ship = function(id, size)
{
    var _id = id;
    var _size = size;
    var direction = "";
    var positionX = -1;
    var positionY = -1;
    var life= size;

    this.getSize = function()
    {
        return _size
    }

    this.getID = function()
    {
        return _id;
    };

    this.getDirection = function () {
        return direction;
    };
    this.setDirection = function(newDirection){
        direction = newDirection;
    };

    this.getPositionX = function () {
        return positionX;
    };
    this.getPositionY = function () {
        return positionY;
    };

    this.setPositionX = function (newPositionX) {
        positionX = newPositionX;
    };
    this.setPositionY = function (newPositionY) {
        positionY = newPositionY;
    };

    this.getLife = function(){
        return life;
    };

    this.hit = function(){
        life--;
    };







};
