//var num1 = 20;
//var num2 =30;
//var sum, sub;

//sum= num1 + num2;

//sub = num2 - num1;

//document.write("num1 and num2 sum is = " + sum);
//document.write(" <br/> num1 and num2 sub is = " + sub);0




// var num1 = prompt("Enter First Number : ");
// var num2 = prompt("Enter second Number : ");
          
// num1 = parseInt(num1, 10);
// num2 = parseInt(num2, 10);

// var sum, sub;

// sum = num1 + num2;

// sub = num2 - num1;

// document.write("num1 and num2 sum is = " + sum);
// document.write(" <br/> num1 and num2 sub is = " + sub);






var sum, sub, mul, div, mdu;

var num1 = prompt("Enter your first number here : ");
var num2 = prompt("Enter your second number here : ");

num1 = parseInt (num1, 10);
num2 = parseInt (num2, 10);

sum = num1 + num2;
document.write( "<br/>" + num1 + "+" + num2 + "="  + sum );

sub = num1 - num2;
document.write( "<br/>" + num1 + "-" + num2 + "="  + sub);

mul = num1 * num2;
document.write( "<br/>" + num1 + "*" + num2 + "="  + mul);

div = num1 / num2;
document.write( "<br/>" + num1 + "/" + num2 + "="  + div);

mdu = num1 % num2;
document.write( "<br/>" + num1 + "%" + num2 + "="  + mdu);
