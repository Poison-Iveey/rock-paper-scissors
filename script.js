

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
   if ( humanChoice == "rock" && computerChoice == "paper") {
      console.log('You Lose!');
      computerScore++ ;
      
   } else if( humanChoice == "rock" && computerChoice == "scissors"){
      console.log('You Win!');
      humanScore++ ;

   } else if (humanChoice == "rock" && computerChoice =="rock"){
      console.log('It\'s a tie!')
      
   } else if( humanChoice == "paper" && computerChoice == "scissors"){
      console.log('You Lose!');
      computerScore++ ;

   } else if( humanChoice == "paper" && computerChoice == "rock"){
      console.log('You Win!');
      humanScore++ ;

   } else if( humanChoice == "paper" && computerChoice == "paper"){
      console.log('It\'s a tie!');

   } else if ( humanChoice == "scissors" && computerChoice == "rock"){
      console.log('You Lose!');
      computerScore++ ;

   } else if( humanChoice == "scissors" && computerChoice == "paper"){
      console.log('You Win!');
      humanScore++ ;

   }else if ( humanChoice == "scissors" && computerChoice == "scissors"){
      console.log('It\'s a tie!');

   }
  
   
}
 const playerChoice = getHumanChoice();
 const compChoice = getComputerChoice();

 playRound(playerChoice,compChoice);
 return playRound;

   

    





