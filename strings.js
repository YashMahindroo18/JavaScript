let x="hello";
console.log(x.length);
console.log(x[1]);
//template literals
let sentence=`this is a template literal `;
console.log(sentence);
const amazon={
    name:"Parker Jotter Standard CT Ball Pen",
    rating : 7002,
    offer:5,
    price:270,
}
let temp=`the name is ${amazon.name} and the price is ${amazon.price}`;
console.log(temp);
let y=`the name is ${amazon.name} and the price is ${1+2+3+4}`;
console.log(y.toUpperCase());
console.log(y);
// escape Character 
console.log("hello\n world")