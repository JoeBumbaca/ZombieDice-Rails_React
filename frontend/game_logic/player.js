class Player {
  constructor(player) {
    this.name = player;
    this.won = false;
    this.score = 0;
    this.turnTotals = { brains: 0, blasts: 0, runner: 0 };
  }

  takeTurn(cup) {
    this.cup = cup;
    let currentDice = this.selectDice();
    let currentRoll = this.rollDice(currentDice);
    console.log({currentDice: currentDice, roll: currentRoll, cup: this.cup});
    // this.assessRoll(currentRoll);
  }

  selectDice() {
    let selectedDie = [];
    let i = 0;
    while (selectedDie.length < 3) {
      let rand = Math.floor(Math.random() * 10000) % 13;
      if (this.cup.dice[rand] === null) {
        continue;
      }
      selectedDie.push(this.cup.dice[rand]);
      this.cup.dice[rand] = null;
      i++;
    }

    return selectedDie;
  }

  rollDice(dice) {
    let roll = [];
    dice.forEach(die => {
      let side = Math.floor(Math.random() * 10000) % 6;
      roll.push(die.sides[side]);
    })
    return roll;
  }

  // assessRoll()

};

export default Player;