var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hello world change 1', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello world change 2', done);
 });
});