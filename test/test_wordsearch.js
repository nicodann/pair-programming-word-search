const chai = require('chai');
const assert = chai.assert;
const wordSearch = require('../wordsearch.js');

const matrix = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(matrix, 'FRANK');
    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch(matrix, 'SEINFELD');
    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch(matrix, 'WEFMHFBDZ');
    assert.isTrue(result);
  });
  
  it("should return an error message if the array is empty", function() {
    const result = wordSearch([], 'SEINFELD');
    assert.strictEqual(result, "This array is empty");
  });

  it("should return an error message if the word is not a string", function() {
    const result = wordSearch(matrix, 7);
    assert.strictEqual(result, "This word is not a string");
  });
});
