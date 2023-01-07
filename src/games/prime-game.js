import runEngine from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const limitNum = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= limitNum; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getRoundGame = () => {
  const randomNum = getRandomNumber(1);
  const correctQuestion = randomNum;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [correctQuestion, correctAnswer];
};

export default () => {
  runEngine(description, getRoundGame);
};
