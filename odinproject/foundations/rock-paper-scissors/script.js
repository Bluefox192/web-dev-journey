let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const result = Math.floor(Math.random() * 3);
  if (result === 0) return "rock";
  else if (result === 1) return "paper";
  else return "scissors";
}

function getHumanChoice(){
  const input = (window.prompt("Type choice", ""));
  return input;
}

function playRound(humanChoice, computerChoice){
  if ( !humanChoice || typeof humanChoice !== "string"){
    console.log("invalid input");
    return;
  }
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice){
    console.log("It's tie");
    return;
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ){
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
  }
  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

for (let i = 1; i <= 3; i++){
  const human = getHumanChoice ();
  const computer = getComputerChoice ();
  playRound(human, computer);
  console.log("");
}

if (humanScore > computerScore){
  console.log("You won the game");
}else if(humanScore < computerScore){
  console.log("Computer won the game")
}else{
  console.log("it's tie game");
}
