var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var burgersObj = { 
      burgers: data 
    };
    res.render('index', burgersObj);
  });
});

router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});


router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

module.exports = router;