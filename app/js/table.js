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
//<<<<<<< HEAD
//=======
  var water = "  ~  ";
//>>>>>>> JeanCarlo
  var _field = new Array(size);
  var _initField = function(){

    for (var i = 0; i < size; i++) {
      _field[i] = new Array(size); // define cada elemento como una matriz
      for (var j = 0; j < size; j++) {
//<<<<<<< HEAD
        _field[i][j] = "[-]"; // asigna a cada elemento de la matriz bidimensional
//=======
        _field[i][j] = water; // asigna a cada elemento de la matriz bidimensional

//>>>>>>> JeanCarlo

      };


    };

//<<<<<<< HEAD
    getSize = function()
//=======
    this.getSize = function()
//>>>>>>> JeanCarlo
    {
      return size;
    };

    getField = function(){
      return _field;
    };
//<<<<<<< HEAD
//=======
    setField = function(newField){
      _field = newField;
    };

    getWater = function(){
      return water;
    };

//>>>>>>> JeanCarlo


    /*for (var i = 0; i < this.size; i++) {
     this._field.push('-');
     }*/
  };
  _initField();
  //this.display();


//<<<<<<< HEAD
  //this._createShips();
  //this._placeShips();
//=======
  this._createShips();
  this._placeShips();
//>>>>>>> JeanCarlo
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


//<<<<<<< HEAD
//=======
Table.prototype.getSize = function(){
  return getSize();
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


//>>>>>>> JeanCarlo
};
//Table.prototype._initField

Table.prototype._createShips = function(){
  //TODO: Number of shipe should be retrieved from a constant
  var numShips = 8;
  var ship;
  for (var i = 0; i < numShips; i++) {
    ship = new Ship(i, 6);
    this.ships.push(ship);
  }
};

Table.prototype._placeShips = function(){

  var field = getField();
/*
  for (var i = 0; i < this.ships.length; i++) {
    var ship = this.ships[i];
    var initPos = parseInt(Math.random() * (getSize() - ship.getSize()));
    for (var j = initPos; j <(initPos+ship.getSize()); j++) {
      field[i][j] = "  "+ship.getID()+"  ";
    }
  }
*/


  for (var i = 0; i < this.ships.length; i++) {
    var ship = this.ships[i];
    var direction = getRandomDirection();
    var index = generateRandom(0,getSize()-1);

    var arrFreeSpace = this.thereIsSpace(direction,index,ship.getSize());
    if(arrFreeSpace[0]==-1)
    {
      var newIndex = this.findAvailableIndex(direction,index,ship.getSize());
      if(newIndex!=-1)
      {
        arrFreeSpace = this.thereIsSpace(direction,newIndex,ship.getSize());
        ship.setDirection(direction);
        if(direction == "x")
        {
          ship.setPositionX(newIndex);
          var posY = generateRandom(arrFreeSpace[0],(arrFreeSpace[0]+arrFreeSpace[1])-ship.getSize());
          ship.setPositionY(posY);

        }else{
          ship.setPositionY(newIndex);
          var posX = generateRandom(arrFreeSpace[0],(arrFreeSpace[0]+arrFreeSpace[1])-ship.getSize());
          ship.setPositionX(posX);
        }
        this.drawShip(ship);


      }
      else
      {
        console.log("there is not enough space to draw the ship");
      }

    }
    else{
      ship.setDirection(direction);
      if(direction == "x")
      {
        ship.setPositionX(index);
        var posY = generateRandom(arrFreeSpace[0],(arrFreeSpace[0]+arrFreeSpace[1])-ship.getSize());
        ship.setPositionY(posY);

      }else{
        ship.setPositionY(index);
        var posX = generateRandom(arrFreeSpace[0],(arrFreeSpace[0]+arrFreeSpace[1])-ship.getSize());
        ship.setPositionX(posX);
      }

      this.drawShip(ship);
    }

  }



  setField(field);
};

Table.prototype.findAvailableIndex = function(direction,index,shipSize)
{
  var pos= index;
  var res = -1;
  for(var i = 1; i< getSize();i++){
    if(pos>=getSize()-1)
    {
      pos = 0;
    }
    var arrFreeSpace = this.thereIsSpace(direction,pos,shipSize);
    if(arrFreeSpace[0]!=-1)
    {
      return res = pos;
    }
    pos++;

  };

  return res;


};


Table.prototype.drawShip = function(ship){
  if(ship.getPositionX()!=-1 && ship.getPositionY() !=-1)
  {
    var field = getField();
    var posX = ship.getPositionX();
    var posY = ship.getPositionY();
    if(ship.getDirection()=="x")
    {
      field[posX][posY] = "  "+ship.getID()+"  ";
      for(var i=1; i<ship.getSize();i++)
      {
        field[posX][posY+i] = "  "+ship.getID()+"  ";
      };

    }else{
      field[posX][posY] = "  "+ship.getID()+"  "
      for(var i=1; i<ship.getSize();i++)
      {
        field[posX+i][posY] = "  "+ship.getID()+"  ";
      };
    };

    setField(field);

  }else
  {
    console.log("the position of the ship is incorrect!!!!");
  }




};



Table.prototype.thereIsSpace = function(direction,index,spaceSize){
  var field = getField();
  var size = field.length;
  var res = [];
  res[0] = -1;
  res[1] = -1;
  var countFreeSpace = 0;

  if(direction == "x") {
    for (var i = 0; i < size; i++) {
      //console.log(field[row][i]);
      if(field[index][i] != getWater() && countFreeSpace >= spaceSize){
        res[0] = (i - countFreeSpace);
        res[1] = countFreeSpace;
        return res;
      }else{
        if (field[index][i] == getWater()) {
          countFreeSpace++;

          if(i==size-1 && countFreeSpace>= spaceSize)
          {
            res[0] = (i - countFreeSpace)+1;
            res[1] = countFreeSpace;
            return res;
          }

        }else {
          countFreeSpace = 0;
        }
      }




    }

  }
  else
  {
    for (var i = 0; i < size; i++) {
      //console.log(field[row][i]);
      if(field[i][index] != getWater() && countFreeSpace >= spaceSize){
        res[0] = (i - countFreeSpace);
        res[1] = countFreeSpace;
        return res;
      }else{
        if (field[i][index] == getWater()) {
          countFreeSpace++;

          if(i==size-1 && countFreeSpace>= spaceSize)
          {
            res[0] = (i - countFreeSpace)+1;
            res[1] = countFreeSpace;
            return res;
          }

        }else {
          countFreeSpace = 0;
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
