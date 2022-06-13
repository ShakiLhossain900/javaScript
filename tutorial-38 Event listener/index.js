///anonimas funtion, sodu function likhle hoy nam likha lage na funtion er.
// document.querySelector("button").addEventListener("click", function(){
//     alert("Hello");
// });


var myVar=document.querySelector("h1");

myVar.addEventListener("mouseover", function(){
    myVar.classList.add("my-style")
});
myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("my-style")
});