'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('map test', () => {
  it('should return [1, 2, 3, 4]', () => {
    expect(fp.map([0, 1, 2, 3], n => n + 1));
  });
});