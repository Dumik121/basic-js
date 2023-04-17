const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const result = [];

  for (let i = 0; i < row; i++) {
    result[i] = [];
    for (let j = 0; j < col; j++) {
      let count = 0;
      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          if (i + k >= 0 && i + k < row && j + l >= 0 && j + l < col && (k !== 0 || l !== 0)) {
            count += matrix[i + k][j + l];
          }
        }
      }
      result[i][j] = count;
    }
  }

  return result;
}


module.exports = {
  minesweeper
};
