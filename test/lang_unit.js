/* 
 * Unit tests 
 * 
 */

//var helpers = require('../lib/helpers');
const assert = require('assert');
const lang = require('../lib/lang');
const VerbNotInfinitiveError = require('../lib/errorTypes/langErrors').VerbNotInfinitiveError;
const LangError = require('../lib/errorTypes/langErrors').LangError;

// Holder for tests
var unit = {};

unit['lang.conjugateRegularPreterite should conjugate correctly'] = function (done) {

    var value = lang.conjugateRegularPreterite('beber', 'el_ella');
    assert.equal(value, 'bebió');
    done();
};

unit['lang.conjugateRegularPreterite throws VerbNotInfinitiveError if verb is not an infinitive'] = function (done) {

    assert.throws(

        () => lang.conjugateRegularPreterite('leyendo', 'yo'),
        VerbNotInfinitiveError.constructor.name
    );

    done();
};

unit['lang.conjugateRegularPreterite should return yo form if person argument is incorrect'] = function (done) {

    var value = lang.conjugateRegularPreterite('cantar', 'not_existing_personal_pronoun');
    assert.equal(value, 'canté');
    done();

};

unit['lang.conjugateRegularPreterite should return yo form if person argument is missing'] = function (done) {

    var value = lang.conjugateRegularPreterite('cantar');
    assert.equal(value, 'canté');
    done();

};

unit['lang.conjugateRegularPreterite throws LangError if arguments are of incorrect types'] = function (done) {
    assert.throws(function () {

        lang.conjugateRegularPreterite(123, 123);

    }, LangError.constructor.name);

    done();
};

unit['lang.getOrdinalNumber works for singular nouns'] = function (done) {

    var value1 = lang.getOrdinalNumber(2, 'manzana');
    assert.equal(value1, 'segunda manzana');

    var value2 = lang.getOrdinalNumber(3, 'dedo');
    assert.equal(value2, 'tercero dedo');

    done();
};

unit['lang.getOrdinalNumber works for plural nouns'] = function (done) {

    var value = lang.getOrdinalNumber(10, 'aniversarios');
    assert.equal(value, 'décimos aniversarios');

    var value2 = lang.getOrdinalNumber(8, 'enfermeras');
    assert.equal(value2, 'octavas enfermeras');

    done();
};

module.exports = unit;