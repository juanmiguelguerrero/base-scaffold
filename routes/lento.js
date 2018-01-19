var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	const seconds = 10

	var waitTill = new Date(new Date().getTime() + seconds * 1000)
	while(waitTill > new Date()){}

	res.render('lento')
});

module.exports = router;
