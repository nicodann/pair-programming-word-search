
//Pair programmed with Joe Grewal Nov. 19 2021

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