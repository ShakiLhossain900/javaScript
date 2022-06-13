// function addNumber(x,y,z){
//     return x+y+z;
// }
// let numbers=[1,2,3]
// console.log(addNumber(numbers[0],numbers[1],numbers[2]))
//using spread operator
// console.log(addNumber(...numbers))

// //pussing new numbers arry er modde push kora
// let numbers1=[...numbers,4,5,6]
// console.log(numbers1)


//concartinate kore number add kora
//let numbers2=[4,5,6,7,8]
// let number=numbers.concat(numbers2);
//concat er replace ata kora jay
//let number =[...numbers, ...numbers2]
//console.log(number)



////////// SPRED OPERATOR AND OBJECT USE

let p1={
    name:"gazi shakil hossain",
    age:30
}
let p2={
  nationality: 'Bangladesh',
  occupation: 'software developer'
}
let p={...p1,...p2}
console.log(p)