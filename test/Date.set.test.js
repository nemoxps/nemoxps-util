let test = require('tape');

let set = require('../src/Date/set');


test('Date#set', (t) => {
    let fn = set;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.throws = (args, msg) => {
        t.throws(() => { fn(...args); }, msg);
    };
    
    let date = new Date(2001, 3, 5, 6, 7, 8, 9);
    
    tt([date, 'year', 2002], new Date(2002, 3, 5, 6, 7, 8, 9));
    tt([date, 'month', 4], new Date(2001, 4, 5, 6, 7, 8, 9));
    tt([date, 'day', 6], new Date(2001, 3, 6, 6, 7, 8, 9));
    tt([date, 'hour', 7], new Date(2001, 3, 5, 7, 7, 8, 9));
    tt([date, 'minute', 8], new Date(2001, 3, 5, 6, 8, 8, 9));
    tt([date, 'second', 9], new Date(2001, 3, 5, 6, 7, 9, 9));
    tt([date, 'millisecond', 10], new Date(2001, 3, 5, 6, 7, 8, 10));
    tt([date, 'days', 15], new Date(2001, 3, 15, 6, 7, 8, 9));
    
    tt.throws([date, 'date', 1]);
    
    t.end();
});