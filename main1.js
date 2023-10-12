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
  if (playerChoice==='rock' && computerChoice==='scissors'){
    return 'You win! Rock beats Scissors';
  }
  else if (playerChoice==='scissors' && computerChoice==='paper'){
    return 'You win! Scissors beats Paper';
  }
  else if (playerChoice==='paper' && computerChoice==='rock'){
    return 'You win! Paper beats Rock';
  }
  else if(playerChoice==='paper' && computerChoice==='scissors') {
    return'You lose! Scissors beats Paper';
  }
  else if(playerChoice==='scissors' && computerChoice==='rock') {
    return'You lose! Rock beats Scissors';
  }
  else if(playerChoice==='rock' && computerChoice==='paper') {
    return'You lose! Paper beats Rock';
  }
  else if (playerChoice===computerChoice) {
    return "It's a tie try again"
  }
}


while (playerPuntuation<3 && computerPuntuation<3){
  const PlayerSelectiont=prompt('Rock, Paper or Scissors?')
  const resultado = playRound(getComputerChoice,PlayerSelectiont)
  
  if (resultado==='You lose! Scissors beats Paper' || 
      resultado==='You lose! Rock beats Scissors' || 
      resultado==='You lose! Scissors beats Paper'
      ) {
    computerPuntuation++;
  }
  else if (resultado==='You win! Scissors beats Paper' || 
           resultado==='You win! Rock beats Scissors' || 
           resultado==='You win! Scissors beats Paper'
           ){
    playerPuntuation++;
  }
 
  console.log(resultado);
  console.log('Tu puntaje es '+playerPuntuation+' y el de tu oponente es '+ computerPuntuation);
}

