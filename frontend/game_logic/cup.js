import Die from './die';

class Cup {
  constructor() {
    this.dice = {};

    this.fillCup();
  };

  fillCup() {
    for (let i = 1; i <=13; i++) {
      this.dice[i] = new Die()
    }
  }
};

export default Cup;