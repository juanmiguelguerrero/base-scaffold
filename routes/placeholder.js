var express = require('express');
var router = express.Router();

// const axios = require('axios')
// router.get('/', (req, res, next) => {
// 	axios.get('https://jsonplaceholder.typicode.com/photos')
// 	.then(data => {
// 		const items = data.data;
// 		console.log(items)
// 		res.render('placeholder', { items: items });
// 	})
// 	.catch(next)
// })

const datos = require('../models/placeholder');
router.get('/', (req, res, next) => {
	 datos('https://jsonplaceholder.typicode.com/albums/1/photos')
	.then(data => {
		const items = data.data;
		// console.log(items)
		res.render('placeholder', { items: items });
	})
	.catch(next)
})

module.exports = router;