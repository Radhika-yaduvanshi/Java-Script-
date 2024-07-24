// 2:29:31

//To fixed mehtod

const number = 123.897343;
//it will round figure the number till 2 after point
console.log(number.toFixed(2));


//round figure the number till the range
const otherNumber = 167.8987;
console.log(otherNumber.toPrecision(4));


//toLocaleString

const thousands= 1000000
console.log(thousands.toLocaleString('en-IN'));//en-IN is used to take an indian formate


//===============Maths================================

console.log(Math);
console.log(Math.abs(-4));//minus in positive
console.log(Math.round(4.9));//round figure
console.log(Math.ceil(4.2));//ceiling  if it is little then 4 then it will take 5
console.log(Math.floor(4.9));//it will take alwayas first value wich is before the point

console.log(Math.max(3,4,6,7));//same for min
 
//Math.random()
console.log(Math.random());

const nm=Math.random()*10+1;
console.log("Random Number is : "+Math.floor(nm));
// console.log(Math.random()*10);

const min=10;
const max=20;
console.log("Another Random NO : "+Math.floor(Math.random()*(max - min + 1))+min)


