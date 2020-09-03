"use strict";
//Primitives
let a1=10;
let a2=10;
console.log(typeof a1); //number
console.log(a1==a2); //true
//Wrappers
let o1=new Number(10);
let o2=new Number(10);
console.log(typeof o1); //object
console.log(o1==o2); //false
//Combining
console.log(a1+o1); //20
console.log(a1==o1); //true

