/* 
 * Unit tests for math library
 * 
 */

// #region Dependencies
var assert = require('assert');
var math = require('../lib/math');
var helpers = require('../lib/helpers');
// #endregion

// Holder for tests
var unit = {};

// #region Tests
unit['math.findDivisors returns [5,6] for 30'] = function (done) {

    var value = math.findDivisors(30);
    assert.equal(true, value instanceof Array);
    assert.deepStrictEqual(value.sort(), [5, 6]);

    done();
};

unit['math.findDivisors returns [1] for 1'] = function (done) {

    var value = math.findDivisors(1);
    assert.equal(true, value instanceof Array);
    assert.deepStrictEqual(value.sort(), [1]);

    done();
};

unit['math.findDivisors throws exception for a non-number'] = function (done) {

    assert.throws(
        () => math.findDivisors('cat'),
        TypeError
    );

    done();
};

unit['math.getANumber returns a random number between -100 and 100'] = function (done) {

    var value = math.getANumber(-100,100);
    assert.equal(true, -100 <= value);
    assert.equal(true, 100 >= value);

    done();
};

unit['math.getANumber works when min > max'] = function (done) {

    var value = math.getANumber(1000, 1);
    assert.notEqual(false, helpers.validateNumber(value));

    done();
};

unit['math.getANumber does not throw exception for a non-number'] = function (done) {

    assert.doesNotThrow(
        () => math.getANumber('cat', null)
    );

    done();
};
// #endregion

module.exports = unit;