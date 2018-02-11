let dateUnitIndex = require('./_dateUnitIndex');
let toArray = require('./toArray');


/**
 * @param {Date} date
 * @param {int} index
 * @param {function} transform
 * @returns {Date}
 */
let transformIndex = (date, index, transform) => {
    let parts = toArray(date, dateUnitIndex.millisecond);
    parts[index] = transform(parts[index]);
    return new Date(...parts);
};


module.exports = transformIndex;