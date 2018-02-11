let test = require('tape');

let birthdays = require('../src/Date/birthdays');


test('Date.birthdays', (t) => {
    let fn = birthdays;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    let bds = [
        new Date(2000, 3, 10), // 0
        new Date(2000, 3, 15), // 1
        new Date(2000, 3, 20), // 2
        new Date(2000, 3, 25), // 3
        new Date(2000, 3, 30), // 4
        new Date(2000, 4, 5), // 5
        new Date(2000, 4, 6), // 6
        new Date(2000, 4, 15), // 7
        new Date(2000, 4, 16), // 8
        new Date(2000, 5, 16), // 9
    ];
    let now = new Date(2010, 3, 15, 1);
    
    tt([bds, 'days', -5, now], [0, 1]);
    tt([bds, 'day', -1, now], [1]);
    tt([bds, 'days', 0, now], [1]);
    tt([bds, 'day', 1, now], [1]);
    tt([bds, 'days', 5, now], [1, 2]);
    tt([bds, 'days', 20, now], [1, 2, 3, 4, 5]);
    tt([bds, 'week', 1, now], [1, 2]);
    tt([bds, 'weeks', 3, now], [1, 2, 3, 4, 5, 6]);
    tt([bds, 'month', 1, now], [1, 2, 3, 4, 5, 6, 7]);
    tt([bds, 'months', 2, now], [1, 2, 3, 4, 5, 6, 7, 8]);
    tt([bds, 'months', 3, now], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    tt([[new Date(2000, 0, 15)], 'months', 2, new Date(2010, 11, 15)], [0]);
    
    t.end();
});