const clock= document.querySelector('#clock');

const banner=document.querySelector('#banner');

const body=document.querySelector('body');
banner.style.color="pink";

// body.appendChild(banner);




setInterval(function(){
    let date= new Date();
    clock.innerHTML=date.toLocaleTimeString();

},1000)