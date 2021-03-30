// Spread operator

// 1. Array
var arr = ["a","b","c"]
console.log(arr)

//array index starts with 0
console.log(arr[0])
console.log(arr[1])

//add the value into array
//there is a method called push()
arr.push("3")
console.log(arr[3])

// 2. Objects
//object in Javascript works only with key value pair
//to access the object in JS we use obj. notation
//in the below example the full name is with space so to access the object we have to use array notation

var obj={
    "name": "salesforce",
    "age": 25,
    "full name":"zero to hero"
}
console.log(obj.name)
console.log(obj.age)
console.log(arr["full name"])

// to insert an object
obj.hobbies="cicket"
console.log(obj)

// 1.Expanding of String
//Convert the below string into array of alphabets
// ... is the notation for spread operator
let greeting = "Hello Everyone"
let charList = [...greeting]
console.log(charList)

// 2. Combining Array
// Most commonly used in LWC
let arr1 = ["amazon","google"]
let arr2 = ["facebook","instagram"]
let arr3 = [...arr1 , ...arr2]
console.log(arr3)

// 3.Adding values to an array
let arr4 = ["a","b","c"]
let arr5 = [...arr4,"nikhil"]
console.log(arr5)

// 4.Combining Objects






