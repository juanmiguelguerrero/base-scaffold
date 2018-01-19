var express = require('express');
var router = express.Router();

var items = require('../controlers/items');

/* GET home page. */
// router.get('/:language(es|en)', function(req, res, next) {
router.get('/', function(req, res, next) {
	res.locals.pepe = 'hola pepe'
	res.render('index', {items: items});
});

module.exports = router;
