// Write a code to check whether the date is a weekend.

function isWeekend(date1) {
    let day = new Date(date1);
    if (day.getDay() == 6 || day.getDay() == 0) {
        return `${date1} is weekend`;
    } else {
        return `${date1} is weekday`;
    }
}

console.log(isWeekend("2022-11-27"))
console.log(isWeekend("2022-10-20"))


// Write a code to find GCD of two numbers → use while

function findGCD(x,y) {
    while(y) {
        let z = y;
        y = x % y;
        x = z;
    }
    return x;
}

console.log(findGCD(8,10));


// Write a code to find LCM of two numbers → use do … while.

function findLCM(x,y) {

}

// Write a code to find most common character from a string




// Write a code to find most common character from a string


function maxChar(str) {
    const strObj = {}
    let maxCount = 0
    let maxChar = ""
    for (let char of str) {
      strObj[char] = strObj[char] + 1 || 1;
    } 
    for (let key in strObj) {
      if (strObj[key] > maxCount) {
        maxCount = strObj[key]
        maxChar = key
      }
    }
    return maxChar
  }
  console.log(maxChar("javascript"))

//   Write a code to sort a string alphabetically (with and without sort function)

function sortStringWithSortFunction(str) {
    let arrStr = str.split("").sort().join("");
    return arrStr
}

console.log(sortStringWithSortFunction("javascript"));



function sortStringWithoutSortFunction(str) {
    str = str.split("");
    let temp = ""
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < str.length; j++) {
            if (str[j] > str[i]) {
                temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }
    return str.join("");
}

console.log(sortStringWithoutSortFunction("javascript"));


// Write a code to get minimum date from array of dates.

function sortDate(arr) {
    let min = new Date(Math.min(...arr));
    return min
}

console.log(sortDate([  new Date('2022-11-14'),
new Date('2022-09-24'),
new Date('2025-07-17'),]));
