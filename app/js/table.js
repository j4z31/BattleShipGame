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

var Table = function(sizeX){
  var size = sizeX;
  this.ships = [];
  var _field = new Array(size);
  var _initField = function(){

    for (var i = 0; i < size; i++) {
      _field[i] = new Array(size); // define cada elemento como una matriz
      for (var j = 0; j < size; j++) {
        _field[i][j] = "[-]"; // asigna a cada elemento de la matriz bidimensional

      };


    };

    getSize = function()
    {
      return size;
    };

    getField = function(){
      return _field;
    };


    /*for (var i = 0; i < this.size; i++) {
     this._field.push('-');
     }*/
  };
  _initField();
  //this.display();


  //this._createShips();
  //this._placeShips();
};
Table.prototype.shot = function(){


};

Table.prototype.display = function(){

  var tam =  getSize();
  var field = getField();
  for (var i = 0; i < tam; i++) {
    var str = "Fila " + i + ":";
    for (var j = 0; j < tam; j++) {
      str += field[i][j]; // añade a la cadena el contenido de la matriz bidimensional
    }
    console.log(str);
  };


};
//Table.prototype._initField

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
