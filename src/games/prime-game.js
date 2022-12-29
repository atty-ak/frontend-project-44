import index from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundGame = () => {
  const randomNum = getRandomNumber(1);
  let checkNum = true;
  if (randomNum < 2) {
    checkNum = false;
  }
  for (let i = 2; i <= randomNum / 2; i += 1) {
    if (randomNum % i === 0) {
      checkNum = false;
    }
  }
  const correctAnswer = checkNum === true ? 'yes' : 'no';
  const correctQuestion = randomNum;
  return [correctQuestion, correctAnswer];
};

export default () => {
  index(description, getRoundGame);
};
