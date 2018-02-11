let from = require('./from');
let toArray = require('./toArray');


/**
 * Truncates a date.
 *
 * @param {(Date|DateLike)} date A date.
 * @param {int} accuracy An integer defining how many date parts should be taken (0 based).
 * @returns {Date} The truncated date.
 */
let truncate = (date, accuracy) => {
    date = from(date);
    
    return from(toArray(date, accuracy));
};


module.exports = truncate;