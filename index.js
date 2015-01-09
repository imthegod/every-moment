'use strict';
var moment = require('moment');

function Every(amount, type, callback) {
    if (!(this instanceof Every)) {
        return new Every(amount, type, callback);
    }
    this.start(amount, type, callback);
}

Every.prototype.start = function(amount, type, callback) {
    this.stop();
    if(amount) {
        if ((typeof amount) === 'function') {
            this.callback = amount;
        } else {
            this.callback = callback;
            this.set(amount, type);
        }
    } else if(!this.delay) {
        this.setDelay(1, 'second');
    }
    this.timer = setInterval(this.callback.bind(this), this.delay);
    return this;
};

Every.prototype.set = function(amount, type) {
    this.delay = moment.duration(amount, type).asMilliseconds();
    return this;
};

Every.prototype.stop = function() {
    clearInterval(this.timer);
    return this;
};

module.exports = Every;