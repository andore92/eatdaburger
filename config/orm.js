var connection = require('./connection');

var orm = {
	selectAll: function(callback){
		connection.query('SELECT * FROM burgers', function (err, result) {
      	if (err) throw err;
     });
	},
	
	insertOne: function(burger_name, callback){
		connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burger_name], function(err, result) {
    		if (err) throw err;
    	});
	},
	
	updateOne: function(burgerID, callback){
		connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, burgerID], function(err, result) {
    		if (err) throw err;
    	});
	}
};

module.exports = orm;