
/*
  check if a word is the same read from left to right, and right to left.
  check only on the valid signs
*/
function isPalindrome(word) {
  word = word.toLowerCase();

  var wordArr = word.split('');
  var valid = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var letters = [];
  var isSame = true;
  
  wordArr.forEach(word => {
    if (valid.indexOf(word) > -1) {
      letters.push(word);
    }
  })
  
  for(var i = 0; i < letters.length; i++){
    if (letters[i] !== letters[letters.length - (i + 1)]){
      isSame = false;
    }
  }
  
  return isSame;
}

isPalindrome("race car") // true
