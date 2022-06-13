//// for vs forEach

// var numbers =[10,20,30,40];

// for(var i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }




// var numbers =[10,20,30,40,60];

// numbers.forEach(function(x){
//     console.log(x)
// })




var numbers =[10,20,30,40,60];
 var squareNumbers =[];

numbers.forEach(function(x){
   squareNumbers.push(x*x)
})
console.log(squareNumbers)
