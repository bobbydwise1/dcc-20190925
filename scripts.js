/*
This problem was asked by Microsoft.

Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
*/

const findSeq = (yourArray) => {
  let count = 0;
  let max = 0;
  let prev = yourArray[0]
  let next = yourArray[1]
  for ( i = 1; i < yourArray.length; i++ ) {
    if ( yourArray[i] > prev ) {
      count++
      if (count > max) {max = count}
    } else {
      count = 0;
    }
    prev = yourArray[i]
    console.log(count,max,prev)
  }
  return max
}

let test1 = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
console.log(findSeq(test1))

$(document).ready(function() {
  $('#form-1').submit(function(){
    event.preventDefault()
    $('#output-1').text(1)

  })
});
