var Table = function(sizeX){
  var size = sizeX;
  this.ships = [];
  this.shipsLeftToKilled=0;
  var water = "  ~  ";
  var inco = "  ?  ";
  var _field = new Array(size);
  var _gamerField = new Array(size);
  var _initField = function(){

    for (var i = 0; i < size; i++) {
      _field[i] = new Array(size); // define cada elemento como una matriz
      _gamerField[i] = new Array(size);
      for (var j = 0; j < size; j++) {
        _field[i][j] = water; // asigna a cada elemento de la matriz bidimensional
        _gamerField[i][j] = inco; // adignar una incognita a cada celda del gamer

      };


    };

    this.getSize = function()
    {
      return size;
    };

    getField = function(){
      return _field;
    };
    setField = function(newField){
      _field = newField;
    };

    getGamerField = function(){
      return _gamerField;
    };
    setGamerField = function(newField){
      _gamerField = newField;
    };

    getWater = function(){
      return water;
    };




    /*for (var i = 0; i < this.size; i++) {
     this._field.push('-');
     }*/
  };
  _initField();
  //console.log(this.shipsLeftToKilled);
  //console.clear();




  //this._createShips();
  //this._placeShips();

  //this.display(_field);
  //this.display(_gamerField);
};

Table.prototype.getshipsLeftToKilled = function(){
  return this.shipsLeftToKilled;
};

Table.prototype.getSize = function(){
  return getSize();
};

Table.prototype.shot = function(posY,posX){

  console.clear();
  var gamerField = getGamerField();
  var field = getField();
  if(posX >= this.getSize() || posX < 0 || posY >= this.getSize() || posY <0)
  {
    console.log("disparo Incorrecto");

  }
  else {
    if (gamerField[posX][posY] == "  ?  ") {

      if(field[posX][posY] != "  ~  " )
      {
        var hitShip = this.findShip(field[posX][posY])
        hitShip.hit();
        gamerField[posX][posY]="  *  ";
        if(hitShip.getLife()==0)
        {
          this.killShip(hitShip);
        };
      }
      else{
        gamerField[posX][posY] = "  ~  ";
      }
    }
    else{
      console.log("ya disparaste ahi antes");
    };
  }

  //this.display(getGamerField());

};

Table.prototype.findShip = function(ID){

  for(var i = 0; i<this.ships.length;i++ )
  {
    if(this.ships[i].getID()== ID)
    {
      return this.ships[i];
    }
  };
};

Table.prototype.killShip = function(killedShip){

  var gamerField = getGamerField();
  if(killedShip.getDirection()=="x")
  {
    this.shipsLeftToKilled--;
    var x = killedShip.getPositionX();
    var y = killedShip.getPositionY();
    for(var i=0; i<killedShip.getSize();i++)
    {
      gamerField[x][y+i] = "  X  "
    }

  }
  else{
    this.shipsLeftToKilled--;
    var x = killedShip.getPositionX();
    var y = killedShip.getPositionY();
    for(var i=0; i<killedShip.getSize();i++)
    {
      gamerField[x+i][y] = "  X  "
    }

  }

  //setGamerField(gamerField);
};

Table.prototype.display = function(actual){

  //check this clear! should be moved to other class
  //console.clear(); se limpia la pantalla
  var tam =  getSize();
  if(actual == "solution")
  {
    var field = getField();
  }
  else
  {
    var field = getGamerField();
  }


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
  };

  console.log("%c" + delimiter, "color:red;font-weight:bold;");

  //console.log(delimiter);

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
  //console.log(delimiter);
  console.log("%c" + delimiter, "color:" + 'red' + ";font-weight:bold;");


};
//Table.prototype._initField

Table.prototype._createShips = function(shipsA){
  //TODO: Number of shipe should be retrieved from a constant
    /*this.ships = newShips;
    this._placeShips(); Habilitar estas lineas cuando este metodo ya reciba un arreglo de barcos
    */
    this.ships =  shipsA;
    this.shipsLeftToKilled = shipsA.length;
    this._placeShips();
  /*var numShips = 8;
  var ship = new Ship(1, 5);
  this.ships.push(ship);
  var ship1 = new Ship(2, 4);
  this.ships.push(ship1);
  var ship2 = new Ship(3, 3);
  this.ships.push(ship2);
  var ship3 = new Ship(4, 2);
  this.ships.push(ship3);
  var ship4 = new Ship(5, 1);
  this.ships.push(ship4);
  var ship5 = new Ship(6, 5);
  this.ships.push(ship5);
  var ship6 = new Ship(7, 4);
  this.ships.push(ship6);
  var ship7 = new Ship(8, 3);
  this.ships.push(ship7);
  this._placeShips();*/

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

