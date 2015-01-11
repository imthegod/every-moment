/*global describe, it */
'use strict';
var assert = require('assert');
var every = require('../');
var noop = function() {};

describe('every-moment node module', function() {

    it('should be called every 5 seconds', function() {
        var timer = every(5, 'second', noop);
        assert.equal(timer.duration, 5000);
    });

    it('should be called every 1 minute', function() {
        var timer = every(1, 'minute', noop);
        assert.equal(timer.duration, 60000);
    });

    it('should be called every 3 hours', function() {
        var timer = every(3, 'hour', noop);
        assert.equal(timer.duration, 10800000);
    });

    it('should be called once a day', function() {
        var timer = every(1, 'day', noop);
        assert.equal(timer.duration, 86400000);
    });

    it('should be called once every week', function() {
        var timer = every(1, 'week', noop);
        assert.equal(timer.duration, 604800000);
    });

});