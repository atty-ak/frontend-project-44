import index from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRoundGame = () => {
  const randomFirstNum = getRandomNumber(1);
  const randomSecondNum = getRandomNumber(1);
  const maxCommonDivisor = randomFirstNum > randomSecondNum ? randomSecondNum : randomFirstNum;
  let correctAnswer;
  for (let i = maxCommonDivisor; i >= 0; i -= 1) {
    if (randomFirstNum % i === 0 && randomSecondNum % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  const correctQuestion = `${randomFirstNum} ${randomSecondNum}`;
  return [correctQuestion, String(correctAnswer)];
};

export default () => {
  index(description, getRoundGame);
};
