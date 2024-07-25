const user={
    username:"radhika",
    price:9999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website `);
        // console.log(this)
    }


}

user.welcomeMessage() //here contaxt will be use the value which is inside the context
user.username="neeta"
user.welcomeMessage()

console.log(this)


//cannot use this inside the function

// function  coffe(){
//     let username = "radhika"
//     console.log(`hello ${this.username} take a coffe.....`)
// }

// coffe();

//++++++++++++++++===  Arrow functions  +++++++++++++++++++++++++

const chai=()=>{
    let username="Krishna"
    console.log()
}
chai()

// diff of this keyword in arrowfunction and funciton

const adddTwo=(num1,num2)=>{
    return num1+num2;
}

console.log(adddTwo(10,20))

// implesite return 


//dont have to use {} and return statement
const addTwo=(num1,num2)=>  num1+num2;

console.log("After implesit method : ",addTwo(10,20))




