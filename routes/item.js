var express = require('express');
var router = express.Router();

var items = require('../models/items');

const item = { item: {
				id: "1",
				nombre: "Gris",
				descripcion: "Lorem	ipsum para item 1",
				color: "ccc"
			}
		}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('item', item);
});

module.exports = router;
