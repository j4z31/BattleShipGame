/*var Table = new function(size){
  this.size = size;
  this.direction = false;
  //this.id =
  this.ships = [];
  this._createShips();
};

Game.prototype.start = function(){
  var _ship = new Ship(pos, tam, dir);
  this.ships.push(_ship);
};*/

//Trainner

var Table = function(size){
  this.size = size;
  this.ships = [];
  this._field = [];
  this._initField();
  this._createShips();
  this._placeShips();
};

Table.prototype._initField = function(){
  for (var i = 0; i < this.size; i++) {
    this._field.push('-');
  }
};

Table.prototype._createShips = function(){
  //TODO: Number of shipe should be retrieved from a constant
  var numShips = 2;
  var ship;
  for (var i = 0; i < numShips; i++) {
    ship = new Ship(i, 3);
    this.ships.push(ship);
  }
};

Table.prototype._placeShips = function(){
  for (var i = 0; i < this.ships.length; i++) {
    var ship = this.ships[i];
    var initPos = parseInt(Math.random() * (this.size - ship.size));
    for (var j = initPos; j <(initPos+ship.size); j++) {
      this._field[j] = ship.id;
    }
  }
};



  /*Table.prototype._placeShips = function(){
    var pos = parseInt(Math.random() * this.size);

    for (var i = 0; i < this.size; i++) {
      for (var i = 0; i < this.ships.length; i++) {
        if (pos + ships[i]._getTam() < this.size &&
          notColision(pos, ships[i]) ) {
            drawShip(ships[i]);
        }
      }
    }
  };

  Table.prototype._notColision = function(pos, ship){
    var res = false;
    for (var i = 0; i < field.length; i++) {
      if (field[i] !== '-') {
        res = true
      }
    }
  };*/
