// array destructure 

// let numbers=[10,20,30,40,50]

// let [num1,num2,num3,num4,num5]=numbers

// console.log(num1)
// console.log(num2)







// swap variables

// let a=10, b=20;
//  [a,b]=[b,a]
//  console.log(a)
//  console.log(b)






// objext destructure

// const studentInfo={
//     id: 101,
//     fullName:'Gazi Md Shakil',
//     gpa:3.45
// }
// const {id, fullName} = studentInfo

// // console.log(studentInfo.fullName)
// // console.log(studentInfo.id)

// console.log(id)
// console.log(fullName)










// nested object destructure
// const studentInfo={
//     id: 101,
//     fullName:'Gazi Md Shakil',
//     gpa:3.45,
//     language:{
//         native:"bangla",
//         beginner:'english'
//     }
// }
// const {id, fullName , language} = studentInfo

// console.log(fullName)
// console.log(language.native) //nested object













// destructuring function parameters

///normal array function
// const studentInfo =(student) =>{
//   console.log(`${student.id}, ${student.fullName}`)

// }

// const student ={
//     id:1092,
//     fullName:"gazi shakil hossain"
// }
// studentInfo(student)


//destructuring function 
const studentInfo =({id,fullName}) =>{
    console.log(`${id}, ${fullName}`)
  
  }
  
  const student ={
      id:1092,
      fullName:"gazi shakil hossain"
  }
  studentInfo(student)