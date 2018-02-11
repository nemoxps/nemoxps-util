/**
 * Like `Array#filter`, but returns the indexes of the entries that pass the `iteratee` function.
 *
 * @param {Array} arr An array.
 * @param {function} iteratee A function that is called for each element.
 * @returns {int[]} The indexes.
 */
let filterIndex = (arr, iteratee) => {
    return arr.reduce((indexes, val, index, arr) => {
        if (iteratee(val, index, arr))
          indexes.push(index);
        return indexes;
    }, []);
};


module.exports = filterIndex;