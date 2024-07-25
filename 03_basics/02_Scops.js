let a=10;





let c=300;  //globle scope

if(true){
    const b=20;
    let c = 30;//local scope

console.log("inside if condintion: ",c);
}
// console.log(a);
// console.log(b);
console.log(c);



//nested scope
console.log("operation on functions")
function one(){
    const username="radhika"


    //child can user parants properties
    function two(){
        const website="youtube"
        console.log(username)
        console.log(website);

    }

    two();
}

one();




if(true){
    const username="radhika"
    if(username==="radhika")
    {
        const website ="youtube"
        console.log(username+website);
    }
    // console.log(website); out of scope
}
// console.log(website); out of scope


// ++++++++++++++   Hoisting   +++++++++++++++++++++

// thre are two types of function declarations

// whene you are using below sytax then you have to call the function 
// as per given example

console.log(addone(5))//you can use the contaxt before the declaration
function addone(value){
    return value + 1
}


// if you are declaring the function like this you can 
// call the function  after the function defination

const addtwo=function(num){
    return num+2
}

addtwo(5)
console.log(addtwo(5))

