import index from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) return num2;
  return getGcd(num2 % num1, num1);
};

const getRoundGame = () => {
  const randomFirstNum = getRandomNumber(1, 15);
  const randomSecondNum = getRandomNumber(1, 30);
  const correctQuestion = `${randomFirstNum} ${randomSecondNum}`;
  const correctAnswer = String(getGcd(randomFirstNum, randomSecondNum));
  return [correctQuestion, correctAnswer];
};

export default () => {
  index(description, getRoundGame);
};
