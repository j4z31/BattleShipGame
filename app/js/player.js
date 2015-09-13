var Player = function(name){
    this.name = name;
    this.score = 0;
    this.shots = 0;
};


Player.prototype._saveScore = function(timeUsed,shootUsed){


    this.score = timeUsed*100-shootUsed*10;
    var scorePlayer=this.score;
    var playerName="";
    playerName=this.name;
    var playerScore = { playerName:playerName,'Score':scorePlayer };

// Put the object into storage
    localStorage.setItem('playerScore', JSON.stringify(playerScore));
    this._showScore('playerScore');
// Retrieve the object from storage
};

Player.prototype._showScore=function(playerScore)
{
    var scoreGet = localStorage.getItem(playerScore);

    console.log( JSON.parse( localStorage.getItem( playerScore ) ) );
    console.log('The player :', JSON.parse(scoreGet).playerName,'have',JSON.parse(scoreGet).Score,
        'Points of Score');

};


