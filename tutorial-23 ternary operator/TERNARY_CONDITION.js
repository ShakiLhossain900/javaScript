//var number =Number(prompt("enter a number :"));
// if(number>0)
// {
//     console.log("Positive");
// }
// else if(number<0)
// {
//     console.log("Negative");
// }
// else{
//     console.log("Zero")
// }
//var result= number>0? "positive " : number<0 ? "Negative" : "Zero"
//console.log(result)



// take 3 number and find large number from that three and using ternary condition

var num1 = Number(prompt("Enter num1"));
var num2 = Number(prompt("Enter num2"));
var num3 = Number(prompt("Enter num3"));

var result= num1 > num2 ? (num1>num3 ? num1:num3) : (num2> num3 ? num2:num3)
console.log("Maximum number among " + num1 + ", " + num2 + " and " + num3 + " is = "+ result);