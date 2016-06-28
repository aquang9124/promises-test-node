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
function getOneCard(cardName) {
	var promise = getJSON("https://omgvamp-hearthstone-v1.p.mashape.com/cards/" + cardName);

	return promise;
}


module.exports = {
	router: router,
	getOneCard: getOneCard
};