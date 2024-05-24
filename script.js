

const choices=["rock","paper","scissors"]

function getComputerChoice() {
   const computerChoice = choices[Math.floor(Math.random()*3)];
   console.log(computerChoice);
   
}

function getHumanChoice() {
   var humanChoice = prompt("Your Turn! Enter rock,paper or scissors in lowercase");

    if ( humanChoice ==  "rock" || humanChoice == "paper" || humanChoice ==  "scissors" 
        || humanChoice == null ) {
      txt = "computer's turn next";
      
   }
   else {
      txt = "Invalid choice!";
   }
   alert(txt);

  console.log(humanChoice);
}



var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice,computerChoice) {
   if ( humanChoice == computerChoice){
      console.log('It\'s a tie!');

   }else if (( humanChoice == "paper"&& computerChoice == "scissors")||
              ( humanChoice == "scissors" && computerChoice == "rock")||
              (humanChoice ==  "rock"&& computerChoice == "paper" )){
         console.log('You Lose!')
         computerScore++;

  }else if ((humanChoice == "paper" && computerChoice == "rock")
         || (humanChoice == "scissors" && computerChoice == "paper")
         || (humanChoice == "rock" && computerChoice == "scissors")){
            console.log('You Win!')
            humanScore++;
         }

      return humanScore, computerScore
              
   }

function playGame(x){
   for (let i=0; i<x; i++){
      playRound(getHumanChoice(),getComputerChoice())
   }

   return humanScore, computerScore
}

  playGame(5);
  console.log(humanScore);
  console.log(computerScore);
   


   

    





