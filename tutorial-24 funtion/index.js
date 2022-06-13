//creationg a funtion

//1st function
// function squre()
// {
//     var num=5;
//     var result = num * num;
//    document.write(result + " <br/>");
    
// }
// //calling a function
// squre();
// squre();




//2nd function

// function squre(num1,num2)
// {
//     var result = num1 * num2;
//    document.write(result + " <br/>");   
// }
// //calling a function
// squre(5,6)
// squre(4,3)






 //3nd  function 

// function squre(num1,num2)
// {
//     var result = num1 * num2;
//    return result;
// }
// //calling a function
// var x=squre(7,6);
// document.write(x)



//4th function addition two number

// function addition(x,y){
//     var result=x+y;
//     document.write("sum = " +result + "<br/>")
// }
// //function calling x y value
// addition(5,6);
// addition(10,10);



// 5th function substaction two number
// function sub(a,b){
//     var result=a-b;
//     document.write("sub =" +result + "<br/>")
// }
// //function calling for a and b value
// sub(10,5);
// sub(20,10);




//task and 6th function make a calculator using function one value all funtion

function calculator(x,y){
    var sum=x+y;
    document.write("Sumation =" +sum + "<br/>")
    var sub=x-y;
    document.write("substraction =" +sub + "<br/>")
    var mul=x*y;
    document.write("multiplication =" +mul + "<br/>")
    var div=x/y;
    document.write("division =" +div + "<br/>")
    var mod=x%y;
    document.write("modulas =" +mod + "<br/>")
}
//call the function value
calculator(10,5);



//making calculator using a function different value

//sum function
function summation(x,y){
    var summation=x+y;
    document.write("Sumation =" + summation + "<br/>")
}
//sub function
function substraction(x,y){
    var substraction=x-y;
    document.write("substraction =" +substraction + "<br/>")
}
//multi function
function multiplication(x,y){
    var multiplication=x*y;
    document.write("multiplication =" +multiplication + "<br/>")
}
//division function
function division(x,y){
    var division=x/y;
    document.write("division =" +division + "<br/>")
}
//modulas function
function modulas(x,y){
    var modulas=x%y;
    document.write("modulas =" +modulas + "<br/>")
}

//create function value
summation(2,3);
substraction(7,5);
multiplication(2,2);
division(20,5);
modulas(17,2);