/* 
 * Simple language translation helper
 * 
 *
 */

// #region Dependencies
var helpers = require('./helpers');
var errors = require('./errorTypes/langErrors');
var VerbNotInfinitiveError = errors.VerbNotInfinitiveError;
var LangError = errors.LangError;
// #endregion

// #region Holder for functions
var lang = {};
// #endregion

// #region Helper arrays
const preteriteEndings = {
    'ar':
    {
        'yo': 'é',
        'tu': 'aste',
        'el_ella': 'ó',
        'nosotros': 'amos',
        'vosotros': 'asteis',
        'ellos_ellas' : 'aron'
    },
    'er_ir':
    {
        'yo': 'í',
        'tu': 'iste',
        'el_ella': 'ió',
        'nosotros': 'imos',
        'vosotros': 'isteis',
        'ellos_ellas': 'ieron'
    }
};

const ordinalNumbers =
[
    'primer',
    'segund',
    'tercer',
    'cuart',
    'quint',
    'sext',
    'séptim',
    'octav',
    'noven',
    'décim'
 ];
// #endregion

// #region Library functions
lang.conjugateRegularPreterite = function (verb, person = 'yo') {

    verb = helpers.validateString(verb);

    if (!verb)
        throw LangError('Verb is not a valid string.');

    verb = verb.trim();
    let isInfinitiveVerb = verb.endsWith('ar') || verb.endsWith('er') || verb.endsWith('ir');

    if (!isInfinitiveVerb)
        throw VerbNotInfinitiveError(verb);

    const stem = verb.substring(0, verb.length - 2);
    const verbClass = verb.endsWith('ar') ? 'ar' : 'er_ir';

    let endings = preteriteEndings[verbClass];
    let ending = endings.hasOwnProperty(person) ? endings[person] : endings['yo'];

    return stem + ending;
};

lang.getOrdinalNumber = function (number, noun) {

    number = helpers.validateNumber(number);
    noun = helpers.validateString(noun, 2);

    if (!noun)
        throw LangError('Noun is not a valid string.');
    if (!number)
        throw LangError('Number is not a valid value.');

    isPlural = noun.endsWith('s');
    isFemale = noun.endsWith('a') || noun.endsWith('as');

    if (number < 1 || number > 10)
        return Error('Unsupported value');
    else
        return ordinalNumbers[number - 1] + (isFemale ? 'a' : 'o') + (isPlural ? 's' : '') + ' ' + noun;
};
// #endregion

module.exports = lang;