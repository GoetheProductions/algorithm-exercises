
// if num is divisible by 3 log Fizz
// if num is divisible by 5 log Buzz
// if num is divisible by 3 and 5 log FizzBuzz
function fizzBuzz(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 5 === 0) console.log('Buzz');
    else if (i % 3 === 0) console.log('Fizz')
    else console.log(i);
    
  }
}
