// Js Execution contaxt

// 1.Global execution contex
// 2.Function Execcution contex

// run in two face
// 1  memory creation phase==>allocates memory to the variables or functions
// 2 Execution phace

// ex

let val1=10
let val2=5

function addNum(num1,num2){
    let total = num1+num2;
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)

console.log(result2);

// Globale execution --->this  


// 2.memory phase ->vale1->undefined,val2->,
                    // addnum->definetion,
                    // result1->undefined,
                    // result2->undefined

// 3Execution Phase->  val=>10 , val=>5 ,addNew=>new variable environment+Execution thread