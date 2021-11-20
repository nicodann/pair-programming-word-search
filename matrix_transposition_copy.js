const transpose = function(matrix) {

  let result = [];
  
  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
      if (!(result[j])) {
        result.push([]);
      }
      
      result[j].push(matrix[i][j]);
    }
  }

  return result;
};

module.exports = { transpose };