'use strict';

const expect = require('expect');
const index = require('../index.js');

describe('CLI test', () => {
  it(`should return ['FOO', 'BAR']`, () => {
    expect(index.cli(['node', 'index.js', 'foo', 'bar'])).toEqual(['FOO', 'BAR']);
  });
});