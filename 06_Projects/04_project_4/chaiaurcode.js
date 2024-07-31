const { use } = require("bcrypt/promises");

const randomNumber= parseInt(Math.random()*10+1);

const submit=document.querySelector('#subt');
const guessSlote = document.querySelector('.guesses')
const userinput = document.querySelector('.guessField')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')


const p =  document.createElement('p');
let prevguess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess < 1){
        alert("please enter number more then 1")
    }
    else if(guess > 100){
        alert("please enter number less then 100")
    }else{
     prevguess.push(guess)
     if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game over . Random number was ${randomNumber}`)
        endGame()
     }   else{
        displayGuess(guess)
        checkGuess(guess)
     }
    }
}

function checkGuess(guess){

    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too  heigh`)
    }
}

function displayGuess(){
    userinput.value=''
    guessSlote.innerHTML+=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
    
}

function displayMessage(msg){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
 userinput.value=''
 userinput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML=`<h2 id="newGame">Start New Game </h2>`  
 startover.appendChild(p);
 playGame=fale;
 newGame() 
}

function newGame(){

    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*10+1);
        prevguess=[]
        numGuess=1;
        guessSlote.innerHTML=''
remaining.innerHTML=`${11-numGuess}`;
userinput.removeAttribute('disabled');
startover.removeChild(p)

        playGame = true;
    })

}


// 3.20.43



