var Game = function(name, tam){
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
    console.log('TMP: table', this.players[0].table._field );
    var pos = this.getUserShot();
    numShots++;
    //EVALUAR EL DISPARO
    this.players[0].table._field[pos] = 'x';
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
};