/*
 * Test runner
 */

// Override the NODE_ENV variable
process.env.NODE_ENV = 'testing';

// Dependencies
var helpers = require('./../lib/helpers');

// Application logic for the test runner
_app = {};

_app.tests = {};

_app.tests.lang_unit = require('./lang_unit');
_app.tests.math_unit = require('./math_unit');

// Count all the tests
_app.countTests = function () {

    var counter = 0;

    for (var key in _app.tests) {
        if (_app.tests.hasOwnProperty(key)) {

            var subTests = _app.tests[key];
            for (var testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    ++counter;
                }
            }
        }
    };

    return counter;
};

// Produce test report
_app.produceTestReport = function (limit, successes, errors) {

    console.log('');
    console.log('----------------BEGIN TEST REPORT-------------');
    console.log('');
    console.log('Total tests: ', limit);
    console.log('\x1b[32m%s\x1b[0m', 'Pass: ', successes, ' - ', helpers.getPercentage(successes, limit));
    console.log('\x1b[31m%s\x1b[0m', 'Fail: ', errors.length, ' - ', helpers.getPercentage(errors.length, limit));
    console.log('');

    if (errors.length > 0) {
        console.log('----------------BEGIN ERROR DETAILS-------------');

        errors.forEach(function (testError) {
            console.log('\x1b[31m%s\x1b[0m', testError.name);
            console.log(testError.error);
            console.log('');
        });

        console.log('----------------END ERROR DETAILS-------------');
    }

    console.log('');
    console.log('----------------END TEST REPORT-------------');

    //Kill the app
    process.exit(0);
};

// Run all the tests, collecting the errors and successes
_app.runTests = function () {

    var errors = [];
    var successes = 0;
    var limit = _app.countTests();
    var counter = 0;

    console.log('');
    console.log('----------------RUNNING THE TESTS-------------');
    console.log('');

    for (var key in _app.tests) {
        if (_app.tests.hasOwnProperty(key)) {
            var subTests = _app.tests[key];
            for (var testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    (function () {
                        var tmpTestName = testName;
                        var testValue = subTests[testName];

                        //Call the test
                        try {
                            testValue(function () {
                                ++counter;
                                ++successes;

                                //If it calls back without throwing, then it succeeded, so log it in green
                                console.log('%d. \x1b[32m%s\x1b[0m', counter, tmpTestName);
                                
                                if (counter == limit) {
                                    _app.produceTestReport(limit, successes, errors);
                                }
                            });
                        } catch (e) {
                            // If it throws, then it failed, so capture the error and log it in red
                            
                            errors.push({
                                'name' : testName,
                                'error' : e
                            });

                            console.log('%d. \x1b[31m%s\x1b[0m', counter, tmpTestName);
                            ++counter;

                            if (counter == limit) {
                                _app.produceTestReport(limit, successes, errors);
                            }
                        }
                    })();
                }
            };
        }
    };
};

// Run the tests
_app.runTests();