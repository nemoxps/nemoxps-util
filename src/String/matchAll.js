/**
 * ES proposal: `String#matchAll`.
 *
 * @param {string} str A string.
 * @param {RegExp} _re A RegExp.
 */
let matchAll = function* (str, _re) {
    let re = new RegExp(_re);
    re.lastIndex = _re.lastIndex;
    
    let prevIndex = -1;
    while (true)
    {
      let match = re.exec(str);
      if (match === null || prevIndex === match.index)
        break;
      prevIndex = match.index;
      yield match;
    }
};


module.exports = matchAll;