//jekhanei declation kora hy na ken  ata kaj korbe, but let kaj korbe na

// x=20;
// if(true){
//     y=10;
//     console.log(`y= ${y}`)
//     var y;
// }
// console.log(`x= ${x}`);
// var x;



//// Tutorial 48 default and rest parameter

// "use strict"

// function message(text){
//     console.log(`${tex}`)
// }
// message("i love js ES6");



/////default parameter
// "use strict"

// function message(text="Hello this is a default parameter"){
//     console.log(`${text}`)
// }
// message();
// message("i love js es6")



//rest parameter
function sum(x,y, ...z){
    console.log(`x=${x}, y= ${y} z=${z}`)
}
sum(10,20,30,40,50,60);