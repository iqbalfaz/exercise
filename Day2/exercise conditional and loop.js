// Write a code to convert celsius to fahrenheit.

const celcius = 20;

const fahrenheit = (celcius * 1.8) + 32

console.log(`${celcius} celcius equal ${fahrenheit} fahrenheit`);

// Write a code to check whether the number is odd or even

const number = Math.floor(Math.random()* 100);

if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}

// Write a code to check whether the number is prime number or not

let flag = true;

if (number === 1) {
    console.log(`${number} is not prime number nor composite`);
} 
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(`${number} is prime number`);
    } else {
        console.log(`${number} is not prime number`);
    }
}


//  Write a code to ﬁnd the sum of the numbers 1 to N.
let n = number
total = 0

for (let i = 1; i <= n; i++) {
    total += i
}
console.log(total)

// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
//  Write a code to ﬁnd factorial of a number.
if (number == 0) {
    console.log(`the factorial of ${number} is 0`)
}
else {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    console.log(`the factorial of ${number} is ${factorial}`);
}

//  Write a code to print the ﬁrst N ﬁbonacci numbers.


// BMI calculator

let beratBadan = 100
let tinggiBadan = 1.75

let bmi = beratBadan / (tinggiBadan * 2)

// console.log(bmi)

if (bmi < 18.5) {
    console.log("berat badan kurang (under weight)");
} else if (bmi >= 18.6 && bmi < 24.9) {
    console.log("berat badan normal (ideal)");
} else {
    console.log("kelebihan berat badan (over weight)")
}

// input total loop
 
let totalLoop = Math.floor(Math.random()* 10)

for (let i = 0; i <= totalLoop; i++) {
    console.log(i)
}

if (totalLoop % 3) {
    console.log("BUZZ")
} else if (totalLoop % 5) {
    console.log("FUZZ")
} else if (totalLoop % 5 && totalLoop % 5) {
    console.log("FUZZBUZZ")
}

