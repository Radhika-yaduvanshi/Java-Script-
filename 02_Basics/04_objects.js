// const tinderuser=new Object();   singletone object

const tinderuser={} //non singleton object

tinderuser.id="123abc";
tinderuser.name="sam";
tinderuser.isloggedin=true;


// console.log(tinderuser);

const regluleruser={
    email:"radhik@gmail.com",
    fullname:{
        userfullname:{
            firstname:"radhika",
            lastname:"Yadav"
        }
    }
}
console.log(regluleruser);
console.log(regluleruser.fullname.userfullname.firstname+" "+ regluleruser.fullname.userfullname.lastname);

const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'b'};

// const obj3={obj1,obj2};
// obj1=target  and obj2=source

// object.assign is used to merge the two arrays

// const obj3=Object.assign(obj1,obj2)
// const obj4=Object.assign({},obj1,obj2)//first {} is used as a target here


const obj3={...obj1,...obj2}

console.log(obj3);
// console.log(obj4);

const user=[{
    name:"radhika",
    email:"radhika@gmail.com"
}]

// user[1].emai
// console.log(user)

console.log("Keys are  === "+Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


console.log(tinderuser.hasOwnProperty('isloggedin'))




