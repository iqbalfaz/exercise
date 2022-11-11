// function that can create a triangle pattern according to the height we provide

function triange(height) {
let str = "";

for (let i = 1; i <= height; i++) {
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  str += "\n";
  return str
}
}

console.log(triange(7));


// function that can loop the number of times according to the input we provide

function fizzbuzz(n) {
    for (let i = 1; i <= n; i ++) {
        if (i % 3 == 0 && i % 5 == 0) {
            return "FizzBuzz"
        } else if ( i % 3 == 0) {
            return "Fizz"
        } else if (i % 5 == 0) {
            return "Buzz"
        } else {
            return i
        }
    }
}

console.log(fizzbuzz(5))
