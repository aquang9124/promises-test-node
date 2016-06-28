var express = require('express');
var router = express.Router();
var rp = require('request-promise');

// API routes //
router.post('/api/single', getOneCard);

// getJSON
function getJSON(url) {
	var options = {
		uri: url,
		headers: {
			"X-Mashape-Key": "INSERT API KEY HERE",
			"Accept": "application/json",
			'User-Agent': 'Request-Promise'
		},
		json: true
	};

	var promise = rp(options);
		
	return promise;
}

// getOneCard
function getOneCard(req, res) {
	var promise = getJSON("https://omgvamp-hearthstone-v1.p.mashape.com/cards/" + req.body.cardName);

	promise
		.then(function(response) {
			res.send(response);
		})
		.catch(function(error) {
			console.error(error);
			res.send(Error('There was a problem retrieving the card!'));
		});
}


module.exports = {
	router: router,
	getOneCard: getOneCard
};