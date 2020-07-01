class Player {
  constructor(player) {
    this.name = player;
    this.won = false;
    this.score = 0;
    this.turnTotals = { brains: 0, blasts: 0, runner: 0 };
  }

  beginTurn(cup) {
    this.cup = cup;
    this.takeTurn();
  }

  takeTurn() {
    let currentDice = this.selectDice();
    let currentRoll = this.rollDice(currentDice);
    this.assessRoll(currentRoll.roll);
    this.continueTurn(currentRoll.runnerDice);
  }

  continueTurn(runners) {
    let currentDice = this.selectDice(runners);
    let currentRoll = this.rollDice(currentDice);
    this.assessRoll(currentRoll.roll);
    this.endTurn()
  }

  endTurn() {
    this.score += this.turnTotals.brains;
  }

  selectDice(runners = []) {
    let selectedDie = [].concat(runners);
    if (this.turnTotals.runner > 0) {
      this.turnTotals.runner = 0;
    }
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
    let rollResult = {roll: [], runnerDice: []}
    dice.forEach(die => {
      let side = Math.floor(Math.random() * 10000) % 6;
      rollResult.roll.push(die.sides[side]);
      if (die.sides[side] === 'runner') {
        rollResult.runnerDice.push(die);
      }
    })
    return rollResult;
  }

  assessRoll(rolls) {
    rolls.forEach(roll => {
      switch(roll) {
        case 'brain':
          this.turnTotals.brains += 1;
          break;
        case 'runner':
          this.turnTotals.runner += 1;
          break;
        case 'shotgun':
          this.turnTotals.blasts += 1;
          if (this.turnTotals.brains > 2) {
            this.turnTotals.brains = 0;
            this.endTurn();
          }
      }
    });
  }

};

export default Player;