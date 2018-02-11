let filterIndex = require('../Array/filterIndex');
let dateUnitIndex = require('./_dateUnitIndex');
let from = require('./from');
let truncate = require('./truncate');
let add = require('./add');
let set = require('./set');
let inRange = require('./inRange');


/**
 * Finds all birthdays in a given time span.
 *
 * @param {(Date[]|DateLike[])} bds A list of birthdays.
 * @param {string} unit A date unit.
 * @param {int} amount An amount.
 * @param {(Date|DateLike)} [now=new Date()] The time span's starting point.
 * @returns {int[]} A list of `bds` array indexes.
 */
let birthdays = (bds, unit, amount, now = new Date()) => {
    bds = bds.map((bd) => truncate(from(bd), dateUnitIndex.day));
    now = truncate(from(now), dateUnitIndex.day);
    
    let then = add(now, unit, amount);
    let year = now.getFullYear();
    let month = now.getMonth();
    return filterIndex(bds, (bd) => {
        let y = (bd.getMonth() >= month) ? year : year + 1;
        return inRange(set(bd, 'year', y), now, then);
    });
};


module.exports = birthdays;