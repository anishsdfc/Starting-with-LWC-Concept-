// Object and JSON Operations
let object={
    name:'salesforce',
    age:65,
    dob:"20/12/1990"
}
// 1.object.keys()
// to extract all the keys means the property ie. name,age etc
// displays values in the array format
console.log(Object.keys(object))

// 2.object.values()
// it will give values whatever stored inside the property 
// displays values in the array format
console.log(Object.values(object))

// 3.JSON.stringify()
// it converts the above object into string
let str=JSON.stringify(object)
console.log(JSON.stringify(object))

// 4. JSON.parse()
// it converts the string into an object
console.log(JSON.parse(str))