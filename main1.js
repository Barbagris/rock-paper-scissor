let playerPuntuation = 0
let computerPuntuation = 0 

function getComputerChoice(){
    function random(number) {
        return Math.floor(Math.random()*number);
      }
    let number=random(3)+1
    if (number===1){
      return 'Rock';
    }
    else if (number===2) {
      return 'Paper';
    }
    else if (number===3) {
      return 'Scissors';
    }
}

function playRound(getComputerChoice,PlayerSelectiont){
  var playerChoice= PlayerSelectiont.toLowerCase();
  var computerChoice=getComputerChoice().toLowerCase()
  if (playerChoice==='rock' && computerChoice==='scissors' ||
  playerChoice==='scissors' && computerChoice==='paper' ||
  playerChoice==='paper' && computerChoice==='rock') {
  return 'You win! '+playerChoice+' beats '+computerChoice
  }
  else if (playerChoice==='scissors' && computerChoice==='rock' ||
  playerChoice==='paper' && computerChoice==='scissors' ||
  playerChoice==='rock' && computerChoice==='paper') {
    return 'You lose! '+computerChoice+' beats '+playerChoice  
  }
  else {
   return "It's a tie, try again next round" 
  }
}

console.log('This is a 5 rounds game. First to win 3 rounds won.');
console.log("Let's go");

while (playerPuntuation<3 && computerPuntuation<3){
  const PlayerSelectiont=prompt('Rock, Paper or Scissors?')
  const resultado = playRound(getComputerChoice,PlayerSelectiont)
  
  if (resultado.startsWith ('You lose')) {
    computerPuntuation++;
  }
  else if (resultado.startsWith ('You win')){
    playerPuntuation++;
  }

 
  console.log(resultado);
  console.log("Your score is "+playerPuntuation+" and your opponent's "+ computerPuntuation);
}

if (playerPuntuation=3){
  console.log('You win the game! Congratulations');
}
else if (computerPuntuation){
  console.log('You loose the game. Try again pressing F5');
}

