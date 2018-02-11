let dateUnitIndex = require('./_dateUnitIndex');
let transformIndex = require('./_transformIndex');
let from = require('./from');


/**
 * Sets a date unit amount to a date.
 *
 * @param {(Date|DateLike)} date A date.
 * @param {string} unit A date unit.
 * @param {int} amount An amount.
 * @returns {Date} The new date.
 * @throws {Error} Date#set: Unknown `unit`.
 */
let set = (date, unit, amount) => {
    date = from(date);
    if (unit.endsWith('s'))
      unit = unit.slice(0, -1);
    
    if (unit in dateUnitIndex)
      return transformIndex(date, dateUnitIndex[unit], () => amount);
    
    throw new Error('Date#set: Unknown `unit`.');
};


module.exports = set;