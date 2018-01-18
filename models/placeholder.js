const https = require('https');
const axios = require('axios')


function cargarAPI(url){
	var data = axios.get(url)
	return data
}


module.exports = cargarAPI;

// Esquema del modelo de datos

// https://jsonplaceholder.typicode.com/photos


// {
//   "albumId": 1,
//   "id": 1,
//   "title": "accusamus beatae ad facilis cum similique qui sunt",
//   "url": "http://placehold.it/600/92c952",
//   "thumbnailUrl": "http://placehold.it/150/92c952"
// }
