let dateUnitIndex = require('./_dateUnitIndex');
let transformIndex = require('./_transformIndex');
let from = require('./from');


/**
 * Adds a date unit amount to a date.
 *
 * @param {(Date|DateLike)} date A date.
 * @param {string} unit A date unit.
 * @param {int} amount An amount.
 * @returns {Date} The new date.
 * @throws {Error} Date#add: Unknown `unit`.
 */
let add = (date, unit, amount) => {
    date = from(date);
    if (unit.endsWith('s'))
      unit = unit.slice(0, -1);
    
    if (unit in dateUnitIndex)
      return transformIndex(date, dateUnitIndex[unit], (val) => val + amount);
    if (unit === 'week')
      return transformIndex(date, dateUnitIndex.day, (val) => val + 7 * amount);
    
    throw new Error('Date#add: Unknown `unit`.');
};


module.exports = add;