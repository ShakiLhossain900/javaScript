//random number use kore guessing game


var numOfWon=0;
var numOfLOst=0;

for(var i=1; i<=5; i++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 :"));

    var randomNumber = Math.floor(Math.random() *5) +1;
    
    if(guessNumber == randomNumber){
        console.log("You have Won");
        numOfWon++;
    }
    else{
        console.log("You have lost. Random number was = "+ randomNumber);
        numOfLOst++;
    }
}

document.write("Number of won is = " + numOfWon +"<br/>");
document.write("Number of lost is = " + numOfLOst +"<br/>");

