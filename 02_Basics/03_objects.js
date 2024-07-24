//singleton object
// made by constructor then it is singleton

// object Literals

//boject.creat()




//declare symbols

const mySym=Symbol("key1") 
const jsUser={
    name:"Radhika",
    [mySym]:"mykey1",
    age:18,
    location:"Ahmedabad",
    email:"Radhika@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])//another way to print 

console.log( jsUser[mySym]);

//change value
jsUser.age=21;


//freez the object so that no body can change it

// Object.freeze(jsUser)
jsUser.age=22;
console.log( jsUser.age);


//functions

jsUser.greeting= function(){
    console.log(`hello ,${this.name}`);
}

console.log(jsUser.greeting())






