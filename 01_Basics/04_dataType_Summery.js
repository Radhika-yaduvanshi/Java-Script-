let id=123;
let id1="123";

console.log(id===id1);//will retrun true if both the value and type are the same 
console.log(id==id1);//will check if the value is the same 

// premitive datatypes in js

// string.
// number.
// bigint.==>9549823745273495739245n
// boolean.
// undefined.
// symbol.
// null.

// Reference or Non-primitive

// Arrays , object and functions

let arr=[11,12,13,14];
console.log(arr);

//object

let oj={name:"Radhka" , age:21,degree:"MCA"};
console.log(oj);

//functions

const func=function(){
    console.log("hello word"); 
}

console.log(func());
