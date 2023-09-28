class Game {
  constructor(allPlayer, turnLeft = 10) {
    this.turnLeft = turnLeft;
    this.init(allPlayer);
  }

  init(player) {
    while (this.turnLeft > 0 && player.filter(p => p.status == "loser").length < player.length - 1) {
      this.newTurn();
    }
    console.log("Game over !");
  }

  newTurn() {

    if (this.turnLeft == 10) {
      console.log(`There are still 10 turn left`);
    }
    else if (this.turnLeft == 9) {
      console.log(`There are still 9 turn left`);
    }
    else if (this.turnLeft == 8) {
      console.log(`There are still 8 turn left`);
    }
    else if (this.turnLeft == 7) {
      console.log(`There are still 7 turn left`);
    }
    else if (this.turnLeft == 6) {
      console.log(`There are still 6 turn left`);
    }
    else if (this.turnLeft == 5) {
      console.log(`There are still 5 turn left`);
    }
    else if (this.turnLeft == 4) {
      console.log(`There are still 4 turn left`);
    }
    else if (this.turnLeft == 3) {
      console.log(`There are still 3 turn left`);
    }
    else if (this.turnLeft == 2) {
      console.log(`There are still 2 turn left`);
    }
    else if (this.turnLeft == 1) {
      console.log(`There are still 1 turn left`);
    }
    
    this.turnLeft -= 1;
    new Turn(allplayer);
  }
}