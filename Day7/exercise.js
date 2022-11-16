// Create a function to check if two objects are equal

function equalObject(obj1,obj2) {
    for (let i = 0; i < obj1.length; i++) {
        for (let j = 0; j < obj2.length; j++) {
            if (obj1[i] === obj2[j]) {
                return true
            } else {
                return false
            }
        }
    }
}

// Create a function to get the intersection of two objects

// Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
let arr1 = [
{ 
    name: "Student 1", 
    email : "student1@mail.com" },
{ 
    name: "Student 2", 
    email : "student2@mail.com" 
}
]
let arr2 = [
{ 
    name: "Student 1", 
    email : "student1@mail.com" },
{   
    name: "Student 3", 
    email : "student3@mail.com" 
}
]
// ● Result :
// ArrayResult → [
// { name: "Student 1’, email : "student1@mail.com’ },
// { name: "Student 2’, email : "student2@mail.com’ },
// { name: "Student 3’, email : "student3@mail.com’ }
// ]

// program to merge and remove duplicate value from an array

function mergeDuplicate(arr1, arr2) {

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let newArr = [...new Set(arr)];

    return newArr
}

console.log(mergeDuplicate(arr1, arr2));


