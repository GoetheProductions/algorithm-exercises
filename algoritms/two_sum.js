function twoSum(numArray, sum) {
  const pairArr = [];
  numArray.forEach((value, index) => {
    numArray.forEach((value2, index2) => {
      if (index !== index2) {
        if (value + value2 === sum) {
          pairArr.push([value, value2]);
        }
      }
    });
  });

  return pairArr;
}

twoSum([4, 6, 5, 2, , 4, 9, 11, 3, 0], 6); // O(n^2)

function twoSumHash(numArr, sum) {
  var hashTable = [];
  var pairs = [];
  for (var i = 0; i < numArr.length; i++) {
    var curElem = numArr[i];
    var counterPart = sum - curElem;

    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([counterPart, curElem]);
    }

    hashTable.push(curElem);
  }

  return pairs;
}

twoSumHash([10, 1, -2, 13, 3, 7, 5, 6], 11); // O(n)
