var connection = require('./connection');

var orm = {
	selectAll: function(cb){
		connection.query('SELECT * FROM burgers', function (err, result) {
      	if (err) throw err;
      	cb(result);
     });
	},
	
	insertOne: function(burger_name, cb){
		var queryString="INSERT INTO burgers (burger_name) VALUES ?";
		console.log(queryString);
		connection.query(queryString, [burger_name], function(err, result) {
    		cb(result);
    	});
	},
	
	updateOne: function(burgerID, cb){
		connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [burgerID], function(err, result) {
    		if (err) throw err;
    		cb(result);
    	});
	}
};

module.exports = orm;


