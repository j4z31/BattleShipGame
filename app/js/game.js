var Game = function(name, tam){
  this.name = name;
  // TODO: Number of shots should be retrieved from a constant
  var maxNumShots = 10;
  getMaxNumShots = function(){return maxNumShots};

  var players = [];
  getPlayers = function(){return players};
  
  var table;
  setTable = function(){
    var tamTable = window.prompt('Size of your table');
    table = new Table(tamTable);
  };

  getTable = function(){
    return table;
  };
};

Game.prototype.start = function(){
  console.log(this.name, ' Started!!!');
  this._setGame();  
  
  // DISPARO
  var numShots = 0;
  do{
    getTable().display();
    
    numShots++;

    //EVALUAR EL DISPARO
    
  }while(numShots < getMaxNumShots());
};

Game.prototype._setGame = function(){
  //TODO: Number of players should bn retrieved from a constant
  var name = window.prompt('What is your name');
  //var tamTable = window.prompt('Size of your table');
  getPlayers().push(new Player(name));
  setTable();
  this.createShips();
};

//Type1 - Cruise, Type2 - Submarine and Type3 - Aircraft Carrier
Game.prototype.createShips = function(){
  var ships = [];
  var id = 0;

  //Metodo aumentado en table.size()
  //Table.prototype.getSize = function(){
    //return getSize() * getSize();
  //};
  var tam = getTable().getSize() / 2;

  // Cruise
  for (var i = 0; i < Math.round((tam *0.31)/2); i++) {
    ship = new Ship(id, 2);
    ships.push(ship);
    id ++;    
  };  

  //Submarine
  for (var i = 0; i < Math.round((tam *0.37)/3); i++) {
    ship = new Ship(id, 3);
    ships.push(ship);
    id ++;
  };

  //Aircraft Carrier
  for (var i = 0; i < Math.round((tam *0.31)/5); i++) {
    ship = new Ship(id, 5);
    ships.push(ship);
    id ++;
  };

  return ships;
};