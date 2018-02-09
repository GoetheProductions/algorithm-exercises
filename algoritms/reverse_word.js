function reverseWord(str) {
  var strArr = str.split('');
  var newStrArr = [];

  for (var i = 0; strArr.length > i; i++) {
    var letter = strArr[strArr.length - (i + 1)]
    newStrArr.push(letter);
  }
  
  return newStrArr.join('')
}

reverseWord('some');
