const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval : ${currval}`);
//     return acc+currval
// },0)


// using arrow function
const myTotal = myNums.reduce((acc,curr)=>(acc+curr),0)

console.log(myTotal);

const shoppingCart=[
{    itemName:"js couse",
    price: 5999
},

{    itemName:"py couse",
    price: 6000
},

{    itemName:"mobile dev couse",
    price: 8000
},

{    itemName:"cpp couse",
    price: 4000
} 

]

const priceToPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(priceToPay)