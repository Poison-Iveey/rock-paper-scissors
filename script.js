var humanScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById('rock_div');
const paper_div = document.getElementById('paper_div');
const scissors = document.getElementById('scissors');
const results = document.querySelector("#result");



function getComputerChoice() {
   const choices=["rock","paper","scissors"]
   const computerChoice = Math.floor(Math.random()*3);
   return choices[computerChoice];
   
}



function win(computerSelection,playerSelection) {
   humanScore++;
   userScore_span.innerHTML = humanScore;
   computerScore_span.innerHTML = computerScore;
   results.textContent = "YOU WIN!";
   
   
}

function lose(computerSelection, playerSelection){
   computerScore++;
   userScore_span.innerHTML = humanScore;
   computerScore_span.innerHTML = computerScore;
   results.textContent = "YOU LOSE...";
   

}

function draw( computerSelection, playerSelection){
   results.textContent = "DRAWWW!";


}




function game(playerSelection){
   const computerSelection = getComputerChoice();
   switch (playerSelection + computerSelection){
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
         win(computerSelection,playerSelection);
         break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
         lose(computerSelection, playerSelection);
         break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
         draw(computerSelection, playerSelection);
         break;
   }
}


  
function main(){
   rock_div.addEventListener('click', function() {
      game("rock")
      
   });

   paper_div.addEventListener('click', function(){
      game("paper")
   });

   scissors_div.addEventListener('click', function(){
      game("scissors")
   });
}

   main();


   




  


   


   

    





