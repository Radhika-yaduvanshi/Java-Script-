//Dates


let myDate = new Date();
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())

console.log(typeof myDate)

let mycreatedDate= new Date(2024,6,24)
console.log(mycreatedDate.toDateString ())

let mycreatedDate1= new Date(2024,6,24,12,56)
console.log(mycreatedDate1.toLocaleString ())


//YY-mm-dd  formate
let mycreatedDate2= new Date( "2024-07-24")
console.log(mycreatedDate2.toLocaleString ())


//mm-dd-yy  formate
let mycreatedDate3= new Date("07-24-2024")
console.log(mycreatedDate3.toLocaleString ())


// ===========================Time stemps

let myTimeStamp = Date.now();

// console.log("myTimeStamp "+myTimeStamp.getTime())

console.log(Math.floor(Date.now()/1000))//convert into seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString('default',{weekday:"long"})
console.log(newDate.getDate());



