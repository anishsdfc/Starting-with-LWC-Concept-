//query Selector
// it select the first element from the document(html is the document)
let element=document.querySelector('div')
console.log(element)


// 2.queryselectorall()
// static node list
// if we want to looping through array 
// then we use forEach()
// convert nodelist into array
let elementall=document.querySelectorAll('div')
console.log(elementall)
Array.from(elementall).forEach(function(item){
    return item.style.color="green"
})