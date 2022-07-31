
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sortedArr = [];
  for (i = 0; i < matrix.length; i++) {
    for (x = 0; x < matrix[i].length; x++) {
      if (i % 2 === 0) {
        sortedArr.push(matrix[i][x])
      }
      else {
        sortedArr.push(matrix[i][[matrix[1].length - x - 1]])
      }
    }
  }
  return matrix.length ? sortedArr : []
}
