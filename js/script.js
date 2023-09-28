let choice = prompt(`
Welcome to the game and select your class :

1, for a Monk > 8 HP / 160 Mana / 3 dmg
Special attack : Heal > heals 8 HP (25 mana)

2, for a Paladin > 16 HP / 160 Mana / 3 dmg
Special attack : Healing Lighting > 4 damage and heals 5 HP (40 mana)

3, for a Assassin > 6 HP / 20 Mana / 6 dmg
Special attack : Shadow hit > 7 damage and imune to damage for the next turn (20 mana)

4, for a Fighter > 12 HP / 40 Mana / 4 dmg
Special attack : Dark Vision > 5 damage and 2 reduced damage for the next turn (20 mana)

5, for a Wizard > 10 HP / 200 Mana / 2 dmg
Special attack : Fireball > 7 damage (25 mana)
  
6, for a Berzerker > 8 HP / 0 Mana / 4 dmg
Special attack : Rage > +1 permanent damage and -1 hp (0 mana)`);

let choicePlayer = 0

if (choice == 1) {
  choicePlayer = new Monk;
}
else if (choice == 2) {
  choicePlayer = new Paladin;
}
else if (choice == 3) {
  choicePlayer = new Assassin;
}
else if (choice == 4) {
  choicePlayer = new Fighter;
}
else if (choice == 5) {
  choicePlayer = new Wizard;
}
else if (choice == 6) {
  choicePlayer = new Berzerker;
}
else {
  choicePlayer = new Wizard;
}

let player0 = choicePlayer;
let player1 = new Monk;
let player2 = new Paladin;
let player3 = new Assassin;
let player4 = new Fighter;
let player5 = new Berzerker;
let player6 = new Wizard;

let nameChoice = prompt('Enter your name');

let allplayer = [player0, player1, player2, player3, player4, player5, player6];

allplayer[0].name = nameChoice;

new Game (allplayer);
