// -------Var Keyword-----
// It can be re-declared and also can be re-declared
// var keyword works with global and function scope
// not block level scope

var course = "zero to hero"
console.log(course)
var  course="zero to hero in lwc"
console.log(window.course)

// function level scope

function abc(){
    var anothercourse="hello in lwc"
    console.log(anothercourse)
}
 abc()

//  Block-level scope

if(2===3){
    var x=10
    console.log(windows.x)
}

// -----------Let Keyword-----------
// It can be updated but cant be re-declared
// Support only function and block level scope

let course="zero to hero"
course="zero to hero in lwc"
console.log(course)

// Function level scope
// inside the function level
function abc(){
    let x="nikhil"
    console.log(x)
}

// Block level Scope

if(2==2){
    let y="salesforce"
    console.log(y)
}



// ------Const Keyword------------
// It cant be updated and also be re-declared
// Cannot redeclared the same variable again
//give you an error

const course="zero to hero"
console.log(course)


// Function level Scope
function abc(){
    const x = 20
}
abc()
const x = 30
console.log(x)

// Block-Level Scope
// outside the function level
if(1==1){
    const y = 40
    console.log(y)
}

