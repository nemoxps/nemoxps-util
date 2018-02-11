let dateUnitIndex = require('./_dateUnitIndex');


/**
 * Turns a date into an array.
 *
 * @param {Date} date A date.
 * @param {int} [accuracy=dateUnitIndex.day] An integer defining how many date parts should be taken (0 based).
 * @returns {int[]} [year, [month, [date, [hours, [minutes, [seconds, [milliseconds]]]]]]].
 */
let toArray = (date, accuracy = dateUnitIndex.day) => {
    let arr = [];
    if (accuracy >= dateUnitIndex.year) arr.push(date.getFullYear());
    if (accuracy >= dateUnitIndex.month) arr.push(date.getMonth());
    if (accuracy >= dateUnitIndex.day) arr.push(date.getDate());
    if (accuracy >= dateUnitIndex.hour) arr.push(date.getHours());
    if (accuracy >= dateUnitIndex.minute) arr.push(date.getMinutes());
    if (accuracy >= dateUnitIndex.second) arr.push(date.getSeconds());
    if (accuracy >= dateUnitIndex.millisecond) arr.push(date.getMilliseconds());
    return arr;
};


module.exports = toArray;