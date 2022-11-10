// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output : 
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

let number = 9

for(let i = 1; i <= 10; i++) {

    let result = i * number;

    console.log(`${number} * ${i} = ${result}`);
}

// ● Write a code to check whether a string is a palindrome or not.

// program to check if the string is palindrome or not

let str = "racecar";
let len = str.length;
let result = ""

for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        result = "It is not a palindrome"
        }
        else {
        result = 'It is a palindrome'
    }
}

console.log(result)


// ● Write a code to convert centimeter to kilometer.

let cm = 10
let km = cm / 100000

console.log(`${cm} cm equal to ${km} km`)


// ● Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

let angka = 1000
let rupiah = '';		
let angkarev = angka.toString().split('').reverse().join('');
	
for(var i = 0; i < angkarev.length; i++) 
    if(i % 3 == 0) 
    rupiah += angkarev.substr(i,3)+'.';
	console.log('Rp. '+rupiah.split('',rupiah.length-1).reverse().join(''));


// ● Write a code to remove the ﬁrst occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

str = "i love javasript"
let searchstr = "lo"
let index = str.indexOf(searchstr);
let strResult = ""

if (index === -1) {
	console.log(str);
}
strResult = str.slice(0, index) + str.slice(index + searchstr.length);

console.log(strResult);


// ● Write a code to capitalize the ﬁrst letter of each word in a string
// ○ Example : “hello world” → “Hello World”


let words = str.split(" ")
let capital = ""

for ( let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
capital = words.join(" ")

console.log(capital)


// ● Write a code to reverse a string.

let reverseStr = ""

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}
console.log(reverseStr)+