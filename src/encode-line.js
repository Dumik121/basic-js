const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let k = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      k++;
    } else {
      res += (k > 1 ? k : '') + str[i - 1];
      k = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
