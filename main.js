// Necesitamos una función que haga que la compu elija entre las tres opcione
// Armar los input para que el usuario pueda ingresar su opción
// Armar los output a partir de condicionales en los que salga quien gana 
// Preparar un contador que lleve el conteo y defina al ganador

let 

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


const PlayerSelectiont=prompt('Rock, Paper or Scissors?')

function playRound(getComputerChoice,PlayerSelectiont){


}