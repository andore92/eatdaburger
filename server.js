var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
var PORT = 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require('./controllers/burger_controller.js');
app.use('/', router);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

