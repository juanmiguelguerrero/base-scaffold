var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	const file = 'src/vendor/descarga.html';
	res.download(file);
});

module.exports = router;
