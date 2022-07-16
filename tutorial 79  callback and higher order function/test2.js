// // //callback and hihher oder function
// // function square(x) {
// //   console.log(`square of ${x} : ${x*x}`)
// // }

// // // const y = square;
// // // y=(5);


// // function higherOderFunction(num,callback) {
// //     callback(num)
// // }
// // higherOderFunction(6,square)



// //syncronas 
// const taskOne = (callback) => {
//     console.log('Task 1');
//     callback();
// };

// const taskTwo = (callback) => {
//     setTimeout(()=>{
//         console.log('Task2 Data are lodding')
//         callback();
//     },3000)
// }
// const taskThree = (callback) => {
//     console.log('Task 3');
//     callback();
// }
// const taskFour = (callback) => {
//     console.log('Task4')
//     callback();
// }
// const taskFive = () => {
//     console.log('Task5')
// }

// taskOne(()=>{
//     taskTwo(()=>{
//        taskThree(()=>{
//         taskFour(()=>{
//             taskFive();
//         })
//        })
//     })
// })



console.log("Hi")

document.querySelector("button").addEventListener("click",()=>{
    console.log("Button is cliecked")
})

console.log("bye");