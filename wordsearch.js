const transpose = function(matrix) {
    let array = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let tempArray = [];
      for (let j = 0; j < matrix.length; j++) {
        tempArray.push(matrix[j][i]);
      }
      array.push(tempArray);
    } return array;
  };
  
  const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;
    const horizontalJoin = letters.map((ls) => ls.join(""));
    const verticalJoin = transpose(letters).map((ls) => {
      return ls.join("");
    });
    const horizontalBackwordsJoin = letters.map((ls) => {
      return ls.reverse().join("");
    });
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (el of verticalJoin) {
      if (el.includes(word)) return true;
    }
    for (e of horizontalBackwordsJoin) {
      if (e.includes(word)) return true;
    }
    return false;
  };

module.exports = wordSearch