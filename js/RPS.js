var messageDisplay = document.getElementById("displayMessage");
var userAnswer = document.userAnswer;

var rock = 0;
var paper = 1;
var scissors = 2;

var rockClick = function(){
  userAnswer = rock;
  var ai = parseInt(Math.random() * (2 - 0) + 0);
  console.log(ai);
};
var paperClick = function(){
  userAnswer = paper;
};
var scissorClick = function(){
  userAnswer = scissors;
};
console.log("Key: rock = 0, paper = 1, scissors = 2");
console.log(userAnswer);
var tie = "The game has tied";
var win = "You Win!";
var lose = "You have been beaten by a computer!";

// rock > scissorss
// scissors > paper
// paper > rock

if(userAnswer == rock && ai === rock ){
messageDisplay.innerHTML = tie;
}

else if (userAnswer == paper && ai === rock){
  messageDisplay.innerHTML = win;
}

else if (userAnswer == scissors && ai === rock){
  messageDisplay.innerHTML = lose;
}

else if (userAnswer == rock && ai === paper){
  messageDisplay.innerHTML = lose;
}

else if (userAnswer == paper && ai === paper){
  messageDisplay.innerHTML = tie;
}

else if (userAnswer == scissors && ai === paper){
  messageDisplay.innerHTML = win;
}

else if (userAnswer == rock && ai === scissors){
  messageDisplay.innerHTML = win;
}

else if (userAnswer == paper && ai === scissors){
  messageDisplay.innerHTML = lose;
}

else if (userAnswer == scissors && ai === scissors){
  messageDisplay.innerHTML = tie;
}
