// Necesitamos una función que haga que la compu elija entre las tres opcione
// Armar los input para que el usuario pueda ingresar su opción
// Armar los output a partir de condicionales en los que salga quien gana 
// Preparar un contador que lleve el conteo y defina al ganador

const PlayerSelectiont=prompt('Rock, Paper or Scissors?')

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
  let playerChoice= PlayerSelectiont.toLowerCase();
  let computerChoice=getComputerChoice().toLowerCase()
  if (playerChoice==='rock' && computerChoice==='scissors'){
    return console.log('You win! Rock beats Scissors');
  }
  else if (playerChoice==='scissors' && computerChoice==='paper'){
    return console.log('You win! Scissors beats Paper');
  }
  else if (playerChoice==='paper' && computerChoice==='rock'){
    return console.log('You win! Paper beats Rock');
  }
  else {
    console.log('You lose!');
  }
}

playRound(getComputerChoice, PlayerSelectiont);