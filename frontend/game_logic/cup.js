import Die from './die';

class Cup {
  constructor() {
    this.dice = {};

    this.fillCup();
  };

  fillCup() {
    for (let i = 0; i <=12; i++) {
      let options = this.getDieOptions(i);
      this.dice[i] = new Die(options)
    }
  }

  getDieOptions(num) {
    switch(num) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
         return { color: 'green', sides: { 0: 'brain', 1: 'brain', 2: 'brain', 3: 'shotgun', 4: 'runner', 5: 'runner'} };
      case 6:
      case 7:
      case 8:
      case 9:
        return { color: 'yellow', sides: { 0: 'brain', 1: 'brain', 2: 'shotgun', 3: 'shotgun', 4: 'runner', 5: 'runner'} };
      case 10:
      case 11:
      case 12:
        return { color: 'red', sides: { 0: 'brain', 1: 'shotgun', 2: 'shotgun', 3: 'shotgun', 4: 'runner', 5: 'runner'} };
    }
  };

  
};

export default Cup;