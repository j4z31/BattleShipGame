var Ship = function(id, size)
{
    var _id = id;
    var _size = size;
    this.getSize = function()
    {
        return _size
    }

    this.getID = function()
    {
        return _id;
    };


};
