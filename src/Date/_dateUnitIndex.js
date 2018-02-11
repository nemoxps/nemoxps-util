let YEAR = 0, MONTH = 1, DAY = 2,
    HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6;
let dateUnitIndex = Object.assign(Object.create(null), {
    year: YEAR,
    month: MONTH,
    day: DAY,
    hour: HOUR,
    minute: MINUTE,
    second: SECOND,
    millisecond: MILLISECOND,
});


module.exports = dateUnitIndex;