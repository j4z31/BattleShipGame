var Player = function(name){
    this.name = name;
    this.score = 0;
    this.shots = 0;
};

Player.prototype._setTable = function(size){
   this.table=new Table(size);
};



