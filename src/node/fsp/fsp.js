let fs = require('fs');
let { promisify } = require('util');

let mapValues = require('lodash/mapValues');


let fsp = Object.assign(
    Object.create(null),
    mapValues(fs, (val) => (typeof val === 'function') ? promisify(val) : val)
);


module.exports = fsp;