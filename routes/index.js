var express = require('express');
var router = express.Router();

var items = require('../models/items');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {items: items});
});

module.exports = router;
