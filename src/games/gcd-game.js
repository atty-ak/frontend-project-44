import index from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRoundGame = () => {
  const randomFirstNum = Math.ceil(Math.random() * 100);
  const randomSecondNum = Math.ceil(Math.random() * 100);
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
