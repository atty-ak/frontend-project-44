import runEngine from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getRoundGame = () => {
  const randomNum = getRandomNumber(1);
  const correctQuestion = randomNum;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [correctQuestion, correctAnswer];
};

export default () => {
  runEngine(description, getRoundGame);
};
