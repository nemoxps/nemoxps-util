let test = require('tape');

let truncate = require('../src/Date/truncate');


test('Date#truncate', (t) => {
    let fn = truncate;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), new Date(...expected), msg);
    };
    
    let d = [2001, 3, 5, 6, 7, 8, 9];
    let date = new Date(...d);
    
    tt([date, 0], d.slice(0, 1).concat(0));
    tt([date, 1], d.slice(0, 2));
    tt([date, 2], d.slice(0, 3));
    tt([date, 3], d.slice(0, 4));
    tt([date, 4], d.slice(0, 5));
    tt([date, 5], d.slice(0, 6));
    tt([date, 6], d);
    tt([date, 7], d);
    
    t.end();
});