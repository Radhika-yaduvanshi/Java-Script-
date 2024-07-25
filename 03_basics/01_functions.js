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
