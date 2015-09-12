var Table = function(size){
    this.size = size;
    this.ships = [];
    this._field = [];
    this._createShips();
    this._initField();
    this._placeShips();

};

Table.prototype._createShips = function ()
{
    // TODO: Number of ships should be read from a constant
    for (var i = 0; i < numShips; i++)
    {
        var ship = new Ship(i,3);
        this.ships.push(ship);
    }
};

Table.prototype._initField = function ()
{
    for (var i = 0; i < this.size; i++)
    {
        this._field.push('-');
    }
}

Table.prototype._placeShips = function()
{
    var initPosition;
    initPosition = parseInt(Math.random()*(this.size-this.ships[0].getSize()));
    for (var i = 0; i < this.ships[0].getSize() ; i ++ )
    {
        this._field[initPosition+i] = this.ships[0].getID();
    };
};

