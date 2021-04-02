// Array Method
// 1.Map()
// map() always returns
// syntax will be remain same for the remaining method
// Syntax-
//    arr.methodName(function(currentItem,index,actualIndex)){

//    })

let arr=[2,5,6,7,8,9]
 let newArray=arr.map(function(currentItem,index,arra){
    console.log(`current item is ${currentItem} index ${index} arra ${arra}`)
    return currentItem*2

})
console.log(newArray)
console.log(arr)

// 2.filter()
let filteredValues= arr.filter(function(currentItem,index,array){
    return currentItem>5
    
})
console.log(filteredValues)

// 3.every()
// every() checks every item if it satisfies the condition
// either it wil give true or false
// cannot redeclared the same variable
let age=[32,33,18,40]
let minimum=age.every(function(currentItem){
    return currentItem>=18
})
console.log(minimum)

// 4.some()
// it will not the check the entire list
// if some of conditions or values meet or satisfy the condition
// it will not go to the second element

let agelist=[34,38,40,48,56]
let isAdultList = agelist.some(function(currentItem){
    return currentItem>38
})
console.log(isAdultList)

// 5.sorting()
// sorting with alphabet is easy
// it does sorting in ascending order
var names=["john","nikhil","abhilasha"]
console.log(names.sort())

// sorting with numbers is different
//need comparator function
var points=[10,36,12,19,31]
let sortedValue=points.sort(function(a,b){
    return a-b
})
console.log(sortedValue)

// 6.reduce()
