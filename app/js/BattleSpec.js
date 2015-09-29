
var Table = require('./table.js');
var tab = new Table(4); 

describe('table',function(){
	it('verify that the table is created with the correct size 7',function(){
		var size = 7;
		table = new Table(size);
		console.log(size,'  ', table.getSize());
		expect(size).toEqual(table.getSize());
	});
	
	it('verify that the ships left to killed are the same of the numbers of ships at the beginning of the game',function(){
		
			
		
	});
	
	
	
	
});