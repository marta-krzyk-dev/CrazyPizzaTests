/*
 * Helpers for various tasks
 *
 */

// #region Dependencies
var debug = require('debug')('helpers');
// #endregion

// #region Holder for functions
var helpers = {};
// #endregion

// #region Functions
helpers.validateNumber = function (input) {

    debug(`Validating ${input}`);
    return typeof (input) == 'number' ? input : false;
};

helpers.validateString = function (input, minLength = 1, maxLength = Number.MAX_SAFE_INTEGER) {

    minLength = typeof (minLength) == 'number' && minLength > 0 ? minLength : 1;
    maxLength = typeof (maxLength) == 'number' && maxLength > 0 ? maxLength : Number.MAX_SAFE_INTEGER;

    if (typeof (input) != 'string')
        return false;
    else {
        input = input.trim();
        return input.length >= minLength && input.length <= maxLength ? input : false;
    }
};

helpers.getPercentage = function (value, max) {

    value = helpers.validateNumber(value) ? value : 0;
    max = helpers.validateNumber(max) ? max : 100;

    return Math.round((100 * value) / max) + '%';
};
// #endregion

// Export the module
module.exports = helpers;
