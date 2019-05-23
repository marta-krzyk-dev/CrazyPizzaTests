/* 
 * Simple math library
 * 
 */

// #region Dependencies
var helpers = require('./helpers');
var debug = require('debug')('math');
// #endregion

// #region Container for functions
var math = {};
// #endregion

// #region Functions
//Returns an array of 2 greatest divisors
math.findDivisors = function (number) {

    if (isNaN(number)) {
        throw TypeError('The input is not a number');
    }

    if (number === 1) {
        return [1];
    }

    number = Math.abs(Math.floor(number));
    var result = number;
    var divisor = 2;
    var divisors = [];
    var modulo;

    //Find all divisors
    do {
        modulo = result % divisor;

        if (modulo)
            ++divisor;
        else {
            result = result / divisor;
            divisors.push(divisor);
            divisor = 2;
        }
    } while (result != 1);

    var divisor1;
    var divisor2;

    //Check if the number is a prime
    if (divisors.length == 1) {
        ++number;
        findDivisors(number);
    }
    else {

        if (divisors.length > 2) {

            var halfIndex = Math.ceil(divisors.length / 2);
            var half1 = divisors.slice(0, halfIndex);
            var half2 = divisors.slice(halfIndex);

            divisor1 = half1.reduce(function (a, b) { return a * b; });
            if (half2.length > 1)
                divisor2 = half2.reduce(function (a, b) { return a * b; });
            else
                divisor2 = half2[0];

            debug("halfIndex:" + halfIndex);
            debug("half1:  " + half1);
            debug("half2:  " + half2);
            debug("Divisors: " + divisor1 + ", " + divisor2);
        }
        else if (divisors.length === 2) {
            divisor1 = divisors[0];
            divisor2 = divisors[1];
        }
        else {
            debug("A prime number went undetected");
            debug(divisors);
        }

        return [divisor1, divisor2];
    }
};

math.getANumber = function (min, max) {

    min = helpers.validateNumber(min) ? min : 1;
    max = helpers.validateNumber(max) ? max : 10;

    if (min > max) {
        min = 1;
        max = 10;
    }

    let result = parseInt(Math.random() * (max - min) + min);
    debug(`Generated a random number between ${min} and ${max} = ${result}`);

    return result;
};
// #endregion

module.exports = math;