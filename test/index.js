'use strict';

var app = require('../app');
var request = require('supertest')(app);

describe('Index Route', function () {

    it('should return HTTP status 200 on GET /', function (done) {
        var req = request.get('/');

        req.end(function (err, res) {
            res.status.should.eql(200);
            done();
        });
    });
});
