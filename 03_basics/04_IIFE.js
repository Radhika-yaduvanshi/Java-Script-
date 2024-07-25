// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB Connected.`);
})();

// why to use IIFE  ?????
// globale scope ke  polution hoti he kai bar to us globle scoope ke 
// jo variable he ya uske polution ko hatane k liye IIFE ka use hota he

((name)=>{
    console.log(`DB Connected two ${name}.`);
})("Radhika");
