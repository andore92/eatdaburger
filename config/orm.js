var connection = require('./connection');

var orm = {
	selectAll: function(){
		connection.query('SELECT * FROM burgers', function (err, result) {
      	if (err) throw err;
     });
	},
	
	insertOne: function(){
		connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err, result) {
    		if (err) throw err;
    	});
	},
	
	updateOne: function(){
		connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, req.body.id], function(err, result) {
    		if (err) throw err;
    	});
	}
};

module.exports = orm;