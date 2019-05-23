// Holder for error types
var errors = {};

errors.LangError = class LangError extends Error {
    constructor(message) {

        super(`Error in Lang Library. ` + message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
};

errors.VerbNotInfinitiveError = class VerbNotInfinitiveError extends Error {

    constructor(verb) {
        super(`The verb supplied is not an infinitive: ${verb}`);
        this.data = { verb };
    }
};

module.exports = errors;