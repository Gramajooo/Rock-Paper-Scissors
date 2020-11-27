const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const btnRestart = document.getElementById("restart");
let scoreIA = 0;
let scoreUser = 0;

class Game {
  constructor() {
    this.initialize();
  }

  initialize() {
    const self = this;
    this.chooseItem = this.chooseItem.bind(self);
    this.play();
  }
  randomIA() {
    var itemIA = Math.floor(Math.random() * 3);
    return itemIA;
  }

  play() {
    this.chooseIA = this.randomIA();
    this.addingEventsClick();
  }

  transformItem(picked) {
    switch (picked) {
      case 0: //Si es piedra
        return `rock`;
      case 1: //Si es papel
        return `paper`;
      case 2: //Si es tijeras
        return `scissor`;
    }
  }

  plusScore(winIA) {
    if (winIA) {
      scoreIA++;
    } else {
      scoreUser++;
    }
  }

  addingEventsClick() {
    rock.addEventListener(`click`, this.chooseItem);
    paper.addEventListener(`click`, this.chooseItem);
    scissor.addEventListener(`click`, this.chooseItem);
    btnRestart.addEventListener(`click`, this.restartGame);
  }

  chooseItem(ev) {
    const optionUser = ev.target.dataset.item;
    const optionIA = this.transformItem(this.randomIA());

    if (optionUser === optionIA) {
      swal("Draw", "._.", "warning");
    } else {
      if (
        (optionUser == "rock" && optionIA == "paper") ||
        (optionUser == "paper" && optionIA == "scissor") ||
        (optionUser == "scissor" && optionIA == "rock")
      ) {
        this.plusScore(true);
        swal("Upss", "You lost :(", "error");
      }
      if (
        (optionUser == "paper" && optionIA == "rock") ||
        (optionUser == "scissor" && optionIA == "paper") ||
        (optionUser == "rock" && optionIA == "scissor")
      ) {
        this.plusScore(false);
        swal("Yeii", "You win :D", "success");
      }
    }
    document.getElementById("scoreIA").innerHTML = scoreIA;
    document.getElementById("scoreUser").innerHTML = scoreUser;    
  }

  restartGame() {
    scoreIA = 0;
    scoreUser = 0;
    document.getElementById("scoreIA").innerHTML = scoreIA;
    document.getElementById("scoreUser").innerHTML = scoreUser;
  }
}

new Game();
