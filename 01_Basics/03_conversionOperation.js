//Type conversion

let num=123

console.log(num);

// but let suppose i am passing any string in number then how it will work

 num="radhika";
 console.log(num);
 console.log(typeof num);//it is showing string type

 //conver string into number
console.log("=========================================");
 let ValueInNumber=Number(num)
 console.log(ValueInNumber);
 console.log(typeof ValueInNumber);

//  output will be NaN  means not a number  but its type will be change in number
console.log("=========================================");

let num1="123";

let convertNum=Number(num1);
console.log(convertNum);
console.log(typeof convertNum);


// "33"==>33
// "33abc"==>NaN
// true=1 , false =0


//output will show the number and also datatype will be number  even if it is written in string

//Like Number we can use Boolean function


console.log("=========================================");

let isLogedIn=1;
let boolean=Boolean(isLogedIn);
console.log(boolean);
console.log(typeof boolean);

// output=>1

// ""=>false
// "adj"=true



console.log("=========================================");


// for conver value in string can use String() function




