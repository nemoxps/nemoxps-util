let test = require('tape');

let matchAll = require('../src/String/matchAll');


test('String#matchAll', (t) => {
    let fn = matchAll;
    let tt = (args, expected, msg) => {
        t.deepEqual([...fn(...args)], expected, msg);
    };
    
    let str = 'test-1 test-2 test-3';
    let matches = [
        ['test-1', '1'],
        ['test-2', '2'],
        ['test-3', '3'],
    ].map((match, index) => Object.assign(match, {
        index: (str.split(' ')[0].length + 1) * index,
        input: str,
    }));
    
    tt([str, /test-(.)/], [matches[0]]);
    tt([str, /test-(.)/g], matches);
    
    t.end();
});