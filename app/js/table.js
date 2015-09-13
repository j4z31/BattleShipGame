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
  var water = "  ~  ";
  var _field = new Array(size);
  var _initField = function(){

    for (var i = 0; i < size; i++) {
      _field[i] = new Array(size); // define cada elemento como una matriz
      for (var j = 0; j < size; j++) {
        _field[i][j] = water; // asigna a cada elemento de la matriz bidimensional


      };


    };

    getSize = function()
    {
      return size;
    };

    getField = function(){
      return _field;
    };
    getWater = function(){
      return water;
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

  //check this clear! should be moved to other class
  console.clear();
  var tam =  getSize();
  var field = getField();

  var col = "-    ";
  var delimiter = "======";
  for(var x = 0; x< tam; x++) {
    delimiter += "=====";

    if (x < 10) {
      col += x + "    ";

    }
    else {
      col += x + "   ";

    }
  }
  console.log(delimiter);
  console.log(col);

  for (var i = 0; i < tam; i++) {
    var str = i + " ";
    if(i<10)
    { str +=" ";}
    for (var j = 0; j < tam; j++) {

      str += field[i][j]; // añade a la cadena el contenido de la matriz bidimensional
    }
    console.log("");
    console.log(str);
  };
  console.log(delimiter);


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

Table.prototype.thereIsSpace = function(direction,row,spaceSize){
  var field = getField();
  var size = field.length;
  var res = -1;
  var countFreeSpace = 0;

  if(direction == "x") {
    for (var i = 0; i < size; i++) {
      //console.log(field[row][i]);
      if (field[row][i] == getWater()) {
        countFreeSpace++;
        if (countFreeSpace == spaceSize) {
          res = (i - spaceSize) + 1;
          return res;
        }
      }
    }

  }
  else
  {
    for (var i = 0; i < size; i++) {
      //console.log(field[row][i]);
      if (field[i][row] == getWater()) {
        countFreeSpace++;
        if (countFreeSpace == spaceSize) {
          res = (i - spaceSize) + 1;
          return res;
        }
      }
    }
  };

  return res;

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
