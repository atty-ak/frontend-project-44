import index from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'What is the result of the expression?';
const getRoundGame = () => {
  const randomFirstNum = getRandomNumber(1, 20);
  const randomSecondNum = getRandomNumber(1, 20);
  const availableOperators = ['+', '-', '*'];
  const randomOperator = availableOperators[getRandomNumber(0, 2)];
  let correctAnswer;
  if (randomOperator === '+') {
    correctAnswer = randomFirstNum + randomSecondNum;
  } else if (randomOperator === '-') {
    correctAnswer = randomFirstNum - randomSecondNum;
  } else {
    correctAnswer = randomFirstNum * randomSecondNum;
  }
  const correctQuestion = `${randomFirstNum} ${randomOperator} ${randomSecondNum}`;
  return [correctQuestion, String(correctAnswer)];
};

export default () => {
  index(description, getRoundGame);
};
