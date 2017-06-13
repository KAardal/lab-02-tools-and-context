'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => Array.prototype.map.call(list, callback);

fp.filter = (list, callback) => Array.prototype.filter.call(list, callback);