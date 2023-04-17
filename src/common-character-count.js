const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  for (let i in s2) {
    s1 = s1.replace(s2[i], "1")
  }
  const result = s1.replace(/[^1]/g, '').length

  return result
}

module.exports = {
  getCommonCharacterCount
};
