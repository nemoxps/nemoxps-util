let test = require('tape');

let filter = require('../src/Object/filter');


test('Object#filter', (t) => {
    let fn = filter;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, (val) => val.startsWith('x')], { abc: 'xyz', acb: 'xzy' });
    tt([obj, (val, key) => key.startsWith('a')], { abc: 'xyz', acb: 'xzy' });
    
    t.end();
});