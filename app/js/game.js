var Game = function(name, tam){
  this.name = name;
  // TODO: Number of shots should be retrieved from a constant
  var maxNumShots = 100;
  getMaxNumShots = function(){return maxNumShots};

  var players = [];
  getPlayers = function(){return players};

  var tab;
  setTable = function(){
    var tamTableFalse=true;
    var warning = 0;
    do {
      var tamTable = parseInt(window.prompt('Size of your table (more or equal to 4)'));
      if(!isNaN(tamTable) && tamTable>=4 )
      {
        tamTableFalse=false;
        warning = 6;
      }
      warning++;



    }while(tamTableFalse || warning<6)

    tab = new Table(tamTable);


  };

  getTable = function(){
    return tab;
  };
};

Game.prototype.start = function(){
  console.log(this.name, ' Started!!!');
  this._setGame();

  // DISPARO
  var numShots = 0;
  var numberOftries = 0;
  list: do{
    if(numberOftries >4)
      break list;
    getTable().display("gamer");
    var shot = prompt("Enter a shot (eg 3,5)");

    if(shot!=null && shot!="") {
      shot = shot.split(",");
      getTable().shot(parseInt(shot[0]), parseInt(shot[1]));
      numShots++;
      numberOftries = 0;
    }
    else
    {
      numberOftries = numberOftries +1;
      console.log("el shot no fue ingresado o es incorrecto");

    }
    //console.log("numero", numberOftries);
    //EVALUAR EL DISPARO

    if(getTable().getshipsLeftToKilled() ==0)
    {
      getTable().display("gamer");
      getTable().display("solution");
      console.log("YOU WIN!!!!")
      //arreglar esto
      numShots = 102;
    }
    console.log("left to Killed",getTable().getshipsLeftToKilled());


  }while(numShots < getMaxNumShots() );

};

Game.prototype._setGame = function(){
  //TODO: Number of players should bn retrieved from a constant
  var name = window.prompt('What is your name');
  //var tamTable = window.prompt('Size of your table');
  getPlayers().push(new Player(name));
  setTable();
  this.createShipss();
};

//Type1 - Cruise, Type2 - Submarine and Type3 - Aircraft Carrier
Game.prototype.createShipss = function(){
  var ships = [];
  var id = 0;

  //Metodo aumentado en table.size()
  //Table.prototype.getSize = function(){
  //return getSize() * getSize();
  //};
  var tam = (getTable().getSize()*getTable().getSize()) / 2;

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

  getTable()._createShips(ships);
};







/*var Game = function(name, tam){
  this.name = name;
  // TODO: Number of shots should be retrieved from a constant
  this.maxNumShots = 10;
  //this.tamTable = tam;
  this.players = [];
  this._createPlayers();
};

Game.prototype.start = function(){
  console.log(this.name, ' game started');
  console.log('Here should start the game logic');


  // DISPARO
  var numShots = 0;
  do{
    //this.players[0].table.display();
    var pos = this.getUserShot();
    numShots++;
    //EVALUAR EL DISPARO
    this.players[0].table.shot(0,0);
  }while(numShots < 3);
};

Game.prototype._createPlayers = function(){
  //TODO: Number of players should bn retrieved from a constant
  var _numPlayers = 5;
  for (var i = 0; i < _numPlayers; i++) {
    var player = new Player('Player' + i);
    this.players.push(player);
  }
};


Game.prototype.getUserShot = function(){
  return parseInt(window.prompt('Shot? (x)'));
};*/