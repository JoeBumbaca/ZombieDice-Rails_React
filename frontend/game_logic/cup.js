import Die from './die';

class Cup {
  constructor() {
    this.dice = {};

    this.fillCup();
  };

  fillCup() {
    for (let i = 1; i <=13; i++) {
      let options = this.getDieOptions(i);
      this.dice[i] = new Die(options)
    }
  }

  getDieOptions(num) {
    switch(num) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         return { color: 'green', sides: { 1: 'brain', 2: 'brain', 3: 'brain', 4: 'shotgun', 5: 'runner', 6: 'runner'} };
      case 7:
      case 8:
      case 9:
      case 10:
        return { color: 'yellow', sides: { 1: 'brain', 2: 'brain', 3: 'shotgun', 4: 'shotgun', 5: 'runner', 6: 'runner'} };
      case 11:
      case 12:
      case 13:
        return { color: 'red', sides: { 1: 'brain', 2: 'shotgun', 3: 'shotgun', 4: 'shotgun', 5: 'runner', 6: 'runner'} };
    }
  };

  
};

export default Cup;