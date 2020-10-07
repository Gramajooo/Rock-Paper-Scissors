var rock = 0;
var paper = 1;
var scissors = 2;

function play(picked) {
  var npc = Math.floor(Math.random() * 3);
  var option;
  option = picked;

  switch (option) {
    case 0: //Si es piedra
      console.log("Rock");
      break;
    case 1: //Si es papel
      console.log("Paper");
      break;
    case 2: //Si es tijeras
      console.log("Scissors");
      break;
  }

  if(option === npc){
      console.log("You win!");
  }else{
      console.log("You lost :'(");
  }
}
