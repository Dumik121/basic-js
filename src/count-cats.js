const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  let cat=0;
  for(let i in matrix){
    for(let j in matrix[i]){
      if(matrix[i][j]=='^^'){cat++}
    }
  }
  return cat;
}

module.exports = {
  countCats
};
