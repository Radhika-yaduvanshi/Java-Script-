const marvel_heros=['thore','IronMan','SpriderMan']
const dc_heros=['superman','flash','batman']

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//take as a 4rth element as a array in array

// const allheros= marvel_heros.concat(dc_heros);
// console.log(allheros);

const allnewHeros=[...marvel_heros,...dc_heros];
console.log(allnewHeros);

const another_arry=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_arry.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Radhika"))
console.log(Array.from("Radhika"))
console.log(Array.from("123456789"))
console.log(Array.from({name:"Radhika"}))


let num1=100,num2=200,num3=300;
console.log(Array.of(num1,num2,num3))






 