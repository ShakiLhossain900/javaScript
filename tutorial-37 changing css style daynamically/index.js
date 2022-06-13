var myvar=document.querySelector("#paraId");

function addStyle(){
    // myvar.style.color="red";
    // myvar.style.fontSize="3rem";
    // myvar.style.fontWeight="bold";
    // myvar.style.fontStyle="italic";
    myvar.classList.add("para-style");
}
function removeStyle(){
    myvar.classList.remove("para-style");
}