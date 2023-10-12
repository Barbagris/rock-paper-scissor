// Necesitamos una función que haga que la compu elija entre las tres opcione
// Armar los input para que el usuario pueda ingresar su opción
// Armar los output a partir de condicionales en los que salga quien gana 
// Preparar un contador que lleve el conteo y defina al ganador

let playerPuntuation = 0
let computerPuntuation = 0 
let counter
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
const resultado1round = playRound(getComputerChoice, PlayerSelectiont);

//function roundcounter (resultado1round){
  if (resultado1round==='You lose! Scissors beats Paper' || 'You lose! Rock beats Scissors' || 'You lose! Scissors beats Paper'){
    computerPuntuation++
    //return [computerPuntuation,playerPuntuation];
  }
  else if (resultado1round==='You win! Scissors beats Paper' || 'You win! Rock beats Scissors' || 'You win! Scissors beats Paper'){
    playerPuntuation++
   // return [computerPuntuation,playerPuntuation];
  }
//}

function finishgame (){
  
  if (playerPuntuation=3){
    console.log('YOU WIN THE GAME!');
  }
  else if (computerPuntuation=3){
    console.log('YOU LOSE THE GAME!');
  }
}

//Este de abajo fue un primer intento pero con lo otro funciona
//console.log(resultado1round,roundcounter(resultado1round));
console.log(resultado1round);
console.log('Tu puntaje es '+ playerPuntuation +' y el de tu oponente '+computerPuntuation);