import index from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundGame = () => {
  const randomNum = getRandomNumber(1);
  const checkNum = randomNum % 2 === 0;
  const correctAnswer = checkNum === true ? 'yes' : 'no';
  const correctQuestion = randomNum;
  return [correctQuestion, correctAnswer];
};

export default () => {
  index(description, getRoundGame);
};
