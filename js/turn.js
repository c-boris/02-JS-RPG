class Turn {
  constructor(allPlayer) {
    this.init(allPlayer);
  }

  init(player) {
    
    let attack = 0;
    let attackChoice = 0;
    let stats = 0;
    let attackfordead = 0;

    if (player[0].status != "loser") { 
      
      while ((attack > 6 || attack <= 0)) {
        attack = prompt(`You are currently playing the class of ${player[0].nameClass}, select :
        1 to attack ${player[1].name} the ${player[1].nameClass} 
        2 to attack ${player[2].name} the ${player[2].nameClass}  
        3 to attack ${player[3].name} the ${player[3].nameClass}  
        4 to attack ${player[4].name} the ${player[4].nameClass}  
        5 to attack ${player[5].name} the ${player[5].nameClass}  
        6 to attack ${player[6].name} the ${player[6].nameClass} 
        `);
        if (attack <= 6 && attack > 0) {}
        else {
          console.log("🖕")
          attack = 0;
        }      
      }
      
      while (player[attack].hp <= 0 && attackfordead == 0) {
        attack = prompt(`The chosen character is dead, select :
        1 to attack ${player[1].name} the ${player[1].nameClass} 
        2 to attack ${player[2].name} the ${player[2].nameClass} 
        3 to attack ${player[3].name} the ${player[3].nameClass} 
        4 to attack ${player[4].name} the ${player[4].nameClass} 
        5 to attack ${player[5].name} the ${player[5].nameClass} 
        6 to attack ${player[6].name} the ${player[6].nameClass} 
          `);         
        if (attack <= 6 && attack > 0 && player[attack].hp > 0) {
          console.log(player[attack].hp);
          attackfordead += 1;
        }
        else {
          console.log("🖕")
          attackfordead = 0;
        }
      }

      attackfordead = 0;

      attackChoice = prompt(`You are currently playing the class of ${player[0].nameClass}, select :

      1 for a normal attack
      2 for a special attack
      3 for a random attack
      `);

      if (attackChoice == 1) {
        player[0].dealDamage(player[attack]);
      }
      else if (attackChoice == 2) {
        player[0].special(player[attack]);
      }
      else {
        let randomDice = Math.floor(Math.random() * 100);
        if (randomDice <= 75) {
          console.log(`You just made a dice roll ${randomDice} and can only do a basic attack`);
          player[0].dealDamage(player[attack]);
        }
        else {
          console.log(`You just made a dice roll ${randomDice} and can only do a special attack`);
          player[0].special(player[attack]);
        }
      }
    }

    for (let random = 1; random < player.length; random++) { 

      let targetRandom = player.filter(p => p !== player[random]);
      let victimRandom = targetRandom[Math.floor(Math.random() * targetRandom.length)];
      let randomDice = Math.floor(Math.random() * 100);
      
      if (player[random].status != "loser") {
        if (victimRandom.status != "loser") {
          if (randomDice <= 75) {
            console.log(" ");
            console.log(`Player ${player[random].name} has just made a dice roll of ${randomDice} and can only do a basic attack`);
            player[random].dealDamage(victimRandom);
          }
          else {
            console.log(" ");
            console.log(`Player ${player[random].name} has just made a dice roll of ${randomDice} and is launching a special attack`);
            player[random].special(victimRandom);
          }
        }
        else {
          console.log(`${player[random].name} wanted to attack ${victimRandom.name} but this player is dead`);
        }
        
      }
    }

    if (player.filter(p => p.status == "loser").length === player.length - 1) { 
      for (let i=0; i < player.length; i++) {
        if (player[i] != player[0]) {
          if (player[i].status === "winner") {
            console.log(`The player ${player[i].name} wins the game`);
            console.log(`Insert Coin to play again`)
          }
        }
        else {
          console.log('You Won The Game !')
        }
      }
    }

    if (player[0].status != "loser") { 
      stats = prompt(`
        Choose 1 to show statistics
        Choose 2 to skip statistics
        `);
      
      if (stats == 1) {
        console.log(`                         Statistics `)
        console.log(player[0]);
        console.log(player[1]);
        console.log(player[2]);
        console.log(player[3]);
        console.log(player[4]);
        console.log(player[5]); 
        console.log(player[6]);
        
      }
    }

    for (let i=0; i < player.length; i++) { 
      if (player[i].shield > 0) {
        player[i].shield = 0;      
      }
    }

  }
    
}
 