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
  else if (playerChoice=computerChoice) {
    return "It's a tie try again"
  }
}

const resultado = playRound(getComputerChoice, PlayerSelectiont);


function game (){
  let playerPuntuation = 0
  let computerPuntuation = 0 
  function roundcounter (){
      if (resultado='You lose! Scissors beats Paper' || 'You lose! Rock beats Scissors' || 'You lose! Scissors beats Paper'){
        counter = (computerPuntuation)+1
      }
      else if (resultado='You win! Scissors beats Paper' || 'You win! Rock beats Scissors' || 'You win! Scissors beats Paper'){
        counter = (playerPuntuation)+1
      }
    }
  if (playerPuntuation=3){
    console.log('YOU WIN THE GAME!');
  }
  else if (computerPuntuation=3){
    console.log('YOU LOSE THE GAME!');
  }
}

//Buscar como funcionan los for en la proxima leccion y ver como incluirlo para que funcione.