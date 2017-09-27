export const ones = (value, dice) => {
  let arr = dice.filter( d => d === value ).reduce( (total, val) => {
    return total + value;
  }, 0);
  return arr * 100;
}

export const fives = (value, dice) => {
  let arr = dice.filter( d => d === value ).reduce( (total, val) => {
    return total + value;
  }, 0);
  return arr * 10;
}

export const threeOfAKind = (value, dice) => {
  let arr = dice.filter( d => d === value );
    if (arr.count === 3)
      return value * 100;
}

export const staticScore = (type, dice) => {
  switch(type) {
    case 'Five Of A Kind':
      return validateFiveOfAKind(dice) ? 2000 : 0
    case 'Four Of A Kind':
      return validateFourOfAKind(dice) ? 1000 : 0
    case 'Straight 1-6':
      return validateStraight(dice) ? 1500 : 0
    case 'Six Of A Kind':
      return validateSixOfAKind(dice) ? 3000 : 0
    case 'Four Of A Kind and Two Of A Kind':
      return validateFourOfAKindAndTwo(dice) ? 1500 : 0
    case 'Two Triples':
      return validateTwoThree(dice) ? 2500 : 0
    case 'Three Doubles':
      return validateThreeTwo(dice) ? 1500 : 0
  }
}

const validateFourOfAKindAndTwo = (dice) => {
  let hasTwo = false;
  let hasFour = false;
  let split = splitArray(dice);
  for ( let arr of split.newArray ) {
    if (arr.length === 4 )
      hasFour = true;
    if (arr.length === 2 )
      hasTwo = true;
  }

  return hasTwo && hasFour
}

const validateTwoThree = (dice) => {
  let twoThree = false;
  let arr = dice.sort();
  let uni = arr.filter((value, index, self) => self.indexOf(value) === index);
  if (uni.length === 2) {
    twoThree = true;
  }

  return twoThree;
}

const validateThreeTwo = (dice) => {
  let threeTwo = false;
  let arr = dice.sort();
  let uni = arr.filter((value, index, self) => self.indexOf(value) === index);
  if (uni.length === 3) {
    threeTwo = true;
  }

  return threeTwo;
}

const validateStraight = (dice) => {
  let count = findSeq(dice.sort());
  return count === 6;
}

const validateSixOfAKind = (dice) => {
  let matches = 0;
  let val = dice[0];
  matches = dice.filter( i => i === val ).length
  return matches === 6;
}

const validateThreeOfAKind = (dice) => {
  let hasScore = false;
  let split = splitArray(dice);
  for ( let arr of split.newArray ) {
    if (arr.length = 3 )
      hasScore = true;
  }

  return hasScore;
}

const validateFourOfAKind = (dice) => {
  let hasScore = false;
  let split = splitArray(dice);
  for ( let arr of split.newArray ) {
    if (arr.length = 4 )
      hasScore = true;
  }

  return hasScore;
}

const validateFiveOfAKind = (dice) => {
  let hasScore = false;
  let split = splitArray(dice);
  for ( let arr of split.newArray ) {
    if (arr.length = 5 )
      hasScore = true;
  }

  return hasScore;
}

const splitArray = (dice) => {
  let split = dice.sort().reduce( (acc, val) => {
    let inner;
    if (acc.previous !== val) {
      inner = [];
    } else {
      inner = acc.newArray.pop();
    }

    inner.push(val);
    acc.previous = val;
    acc.newArray.push(inner);
    return acc;
    }, {
      previous: null,
      newArray: []
  });

  return split;
}

const findSeq = (dice) => {
  let count = 1;
  for( let i = 0; i < dice.length; i++) {
    if (dice[i + 1] - 1 === dice[i])
      ++count
  }
  return count
}
