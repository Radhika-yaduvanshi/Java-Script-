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

console.log("=========================================");
let str1="12";
let str2="100";
let num2=Number(str1);
let num3=Number(str2);

console.log(num2+num3);

console.log("=========================================");


let str3=10;
let str5=20;
let str4=" yadav";
let num4=Number(str3);
let num5=Number(str4);

console.log(num4+str5+num5);


// prefix

str3++;
console.log(str3);

//postfix


++str3;
console.log(str3);









