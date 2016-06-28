var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app').server;
var should = chai.should();

chai.use(chaiHttp);

describe('MyAPI', function() {
	it('should make a request for a single card', function(done) {
		chai.request(server)
			.get()
	});
});