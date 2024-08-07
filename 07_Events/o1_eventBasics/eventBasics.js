//Genereate Random colors in background

const randomColor=function(){
 const hex="01234566789ABCDEF";
 const color="#";
 for(let i=0;i<6;i++){
    color +=hex[Math.floor(Math.random()*16)];
 }
 return color
};