var Game = function(name, tam){
  this.name = name;
  // TODO: Number of shots should be retrieved from a constant
  var maxNumShots = 10;
  this.getMaxNumShots = function(){return maxNumShots};

  var players = [];
  this.getPlayers = function(){return players};
  
  var table;
  this.getTable = function(){return table};
};

Game.prototype.start = function(){
  console.log(this.name, ' Started!!!');
  this._setGame();
  
  // DISPARO
  var numShots = 0;
  do{
    console.log('TMP: Table', this.getTable().display());    
    numShots++;

    //EVALUAR EL DISPARO
    
  }while(numShots < this.getMaxNumShots());
};

Game.prototype._setGame = function(){
  //TODO: Number of players should bn retrieved from a constant
  var name = window.prompt('What is your name');
  var tamTable = window.prompt('Size of your table');
  this.players.push(new Player(name));
  var table = this.getTable();
  table = new Table (tamTable);
};