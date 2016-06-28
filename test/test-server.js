var chai = require('chai');
var chaiHttp = require('chai-http');
var router = require('../server/routes/router');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);

describe('MyAPI', function() {
	it('should make a request for a single card', function(done) {
		chai.request(server)
			.post('/api/single')
			.send({ cardName: 'ysera' })
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('array');
				res.body[0].should.be.a('object');
				done();
			});
	});
});