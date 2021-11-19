
//Pair programmed with Joe Grewal Nov. 19 2021

//ASSIGNMENT

// Input is 2d array of letters and a word
// check to see if the word exists either horizontally or vertically

// PSEUDO CODE

// iterate through horizontally
//  check for the string
// transpose matrix
//  iterate again and check again

const { transpose } = require('./matrix_transposition_copy');

const wordSearch = (letters, word) => {
    
  if (letters.length === 0) {
    return "This array is empty";
  }
  if (typeof(word) !== 'string') {
    return "This word is not a string";
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const verHorJoin = horizontalJoin.concat(verticalJoin);

  return verHorJoin.includes(word);

};

module.exports = wordSearch;

//BEFORE RE-FACTOR

// const wordSearch = (letters, word) => {
//     if (letters.length === 0) {
//         // throw new Error('This array is empty');
//         return "This array is empty";
//     }
//     if (typeof(word) !== 'string') {
//         return "This word is not a string";
//     }
//     const horizontalJoin = letters.map(ls => ls.join(''));
//     // console.log(horizontalJoin);
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
//     const verticalJoin = transpose(letters).map(ls => ls.join(''));
//     // console.log(verticalJoin);
//     for (l of verticalJoin) {
//         if (l.includes(word)) return true
//     }
//      return false;
// };

//TEST CASES

// console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'SEINFXELD'), "should be False");

// console.log("horWord:",wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'SEINFELD'), "should be True");

//   console.log("verticalWord", wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'WEFMHFBDZ'), "should be True");

//   console.log(wordSearch([], "WORD"), "?");
