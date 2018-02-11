let fromEntries = require('lodash/fromPairs');


/**
 * `lodash/mapKeys` + `lodash/mapValues` in 1 function.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {Object} The mapped object.
 */
let map = (obj, iteratee) => {
    return fromEntries(Object.entries(obj).map(([key, val]) => iteratee(val, key, obj)));
};


module.exports = map;