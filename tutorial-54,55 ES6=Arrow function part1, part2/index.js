
// function display1(){console.log("i am display1")}

// //arrow fuction
// const display2 =() => console.log("i am display2222")

// display2();
// display1();




// function message1(){
//     return "Hi, i am message1";
// }

// const message2 =() => "hi i am message2";

// console.log(message2())
// console.log(message1())





// function add(num1,num2){
//     return num1+num2;
// }

// const add2=(num1,num2)=>num1+num2;

// console.log(add(10,20));
// console.log(add2(10,20));



////////////////////////   TUTORIAL 55 ARROW FUNCTIOAN PART 2

var students =[
    {
        Id:100,
        name:"shakil hossain",
        gpa:3.89
    },
    {
        Id:102,
        name:"Disha akter",
        gpa:2.89
    },
    {
        Id:104,
        name:"Rokibul Islam",
        gpa:4.89
    },
    {
        Id:100,
        name:"shakil hossain",
        gpa:2.98,
    },
]
// console.log(students)


//traditional function 
function studentName(){
   return students.filter(function(x){
        return x.gpa>3
    }).map(function(y){
        return y.name;
    })
}
//arrow function
const studentName2=()=>students.filter((x) => x.gpa>3).map((y) => y.name);


console.log(studentName2())
// console.log(studentName())