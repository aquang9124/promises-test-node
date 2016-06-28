var chai = require('chai');
var router = require('../server/routes/router');
var should = chai.should();

describe('MyAPI', function() {
	it('should make a request for a single card', function(done) {
		var promise = router.getOneCard('ysera')
						.then(function(res) {
							res.should.be.a('array');
							res[0].should.be.a('object');
							return res;
						})
						.catch(function(err) {
							console.error(err);
						});

		promise.then(function(res) {
			console.log(res);
			done();
		});
	});
});