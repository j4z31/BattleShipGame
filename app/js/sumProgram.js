
module.export = function (){
	var sum = 0;
	for(var i=2;i<arguments.length;i++)
	{
		sum = sum+parseInt(arguments[i]);
	}
	console.log('suma: '+sum);
}

