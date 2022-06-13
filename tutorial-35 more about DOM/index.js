//creating Html element h1

var heading3=document.createElement("h3");
var text = document.createTextNode("this is heading 3");
heading3.appendChild(text);

var mydiv= document.getElementById("my-div");
mydiv.appendChild(heading3);

//removing heading 2

var heading2 =document.getElementsByTagName("h1")[1];
mydiv.removeChild(heading2);


//heading element add korbu akdom upore
var heading0=document.createElement("h1");
var text0 = document.createTextNode("this is heading 0");
heading0.appendChild(text0);
var heading1 =document.getElementsByTagName("h1")[0];
mydiv.insertBefore(heading0,heading1);