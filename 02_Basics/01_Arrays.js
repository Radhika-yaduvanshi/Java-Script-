//array

//can have different types of datatypes



//shallow copy
// -->A shallow copy of an object is a copy whose properties share the same references(point to the same underlying values)
//  as those of sourse object(from which the copy was made.)

// changes will change in original array

//deep copy
// --> Do not share the same references

const myArr = [0,1,2,3,4,5,6];
console.log(myArr[0]);

// myArr.push(9);
// myArr.pop();

// myArr.unshift(9); //push the value at the front in array
// myArr.shift();


console.log(myArr.includes(9));//check if element exists or not
console.log(myArr.indexOf(4));//check the index of element

const newArr=myArr.join();//add all the elements in arrya in string

console.log(myArr);
console.log(newArr);//type is changed


//slice , splice

console.log("A",myArr);
const myn1= myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr);


const myn2= myArr.splice(1,3)
console.log("After splice "+myn2)
console.log("C"+myArr)
console.log(myn1)
console.log(myn2)
// console.log("B",myArr);


// slice ==> doesn't effect to he original arrya
//splice ==> effects the original array




