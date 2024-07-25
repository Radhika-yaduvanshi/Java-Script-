const funck=function()
{
    const name = "hello";
    console.log(name);
}
funck();
funck();
funck();
funck();
funck();

// function with arguments
function addTwoNums(n1,n2) {

    if(n1 && n2 != Number)
    {
        console.log("Invalid input")

    }
    else{
        console.log(Number(n1)+Number(n2));
    }

}

const result=addTwoNums(19,'100');

// console.log("result: ",result)

function loginuser(username)
{
    return `${username} Just logged in `
}

console.log(loginuser("Radhika"))



//rest operator  [...]
function calculateCartPrice(val1,val2,...num1){
return num1
}

console.log(calculateCartPrice(2000,3000,4000))

const user1={
    username:"radhika",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user1)

// another way to print the or passing the data .
handleObject({username:"naina",price:90000})

const myNewArray =[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

