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

// Do not edit this function.
// const printMatrix = (matrix) => {
//     for (const row of matrix) {
//         for (const el of row) {
//             process.stdout.write(el + " ");
//         }
//         process.stdout.write('\n')
//     }
// }


//TEST CASES


// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2], // row 0
//   [3, 4], // row 1
//   [5, 6]  // row 2
//   //0 1
//   //col
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));

//OTHER IDEAS

/*
[1, 3, 5],
[2, 4, 6]

// swap zone
let a = matrix[0][1] // 2
let b = matrix[1][0] // 3

// target zone
matrix[0][1] = b
matrix[1][0] = a


/ sketch pad
matrix[0][0] // 1 = matrix[0][0] // 1
matrix[0][1] // 2 = matrix[1][0] // 3

========================================

const newParent = []; // parent array

  [1, 2], // row 0
  [3, 4], // row 1
  [5, 6]  // row 2
  //0 1
  //col

[1, 3, 5],
[2, 4, 6]

sketch pad

create newParent array []

for each element in the first child array pushing a new array with the element to the newParent array
[1,2]

newParent = [[1],[2]]
for the next child
[3,4]
it has to put each element into
oldParent - [1][0] - newParent - [0][1]

iterate through oldParent - i
  iterate through oldChild - j
    for each j, newParent[j][i] = oldChild[j]

*/