var express = require('express');
var router = express.Router();

const items = require('../models/items');


router.get('/', function(req, res, next) {
	res.send('No hay nada aquí');
});

router.get('/:id', function(req, res, next) {
	// console.log(req.params)
	// console.log(req.query)

	const id = req.params.id

	let item = items.find(element => { return element.id == id })
	res.render('item', {item: item});
});

// Podría seguir creando rutas
router.get('/:id/:nombre', function(req, res, next) {
	console.log(req.params)
});


module.exports = router;
