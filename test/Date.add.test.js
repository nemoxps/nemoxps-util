let test = require('tape');

let add = require('../src/Date/add');


test('Date#add', (t) => {
    let fn = add;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.throws = (args, msg) => {
        t.throws(() => { fn(...args); }, msg);
    };
    
    let date = new Date(2001, 3, 5, 6, 7, 8, 9);
    
    tt([date, 'year', 1], new Date(2002, 3, 5, 6, 7, 8, 9));
    tt([date, 'month', 1], new Date(2001, 4, 5, 6, 7, 8, 9));
    tt([date, 'day', 1], new Date(2001, 3, 6, 6, 7, 8, 9));
    tt([date, 'week', 1], new Date(2001, 3, 12, 6, 7, 8, 9));
    tt([date, 'hour', 1], new Date(2001, 3, 5, 7, 7, 8, 9));
    tt([date, 'minute', 1], new Date(2001, 3, 5, 6, 8, 8, 9));
    tt([date, 'second', 1], new Date(2001, 3, 5, 6, 7, 9, 9));
    tt([date, 'millisecond', 1], new Date(2001, 3, 5, 6, 7, 8, 10));
    tt([date, 'years', 0], date);
    tt([date, 'days', 10], new Date(2001, 3, 15, 6, 7, 8, 9));
    tt([date, 'days', -4], new Date(2001, 3, 1, 6, 7, 8, 9));
    
    tt.throws([date, 'date', 1]);
    
    t.end();
});