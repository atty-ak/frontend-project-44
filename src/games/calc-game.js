import index from '../index.js';

const description = 'What is the result of the expression?';
const getRoundGame = () => {
  const randomFirstNum = Math.ceil(Math.random() * 20);
  const randomSecondNum = Math.ceil(Math.random() * 10);
  const availableOperators = ['+', '-', '*'];
  const randomNumOperator = Math.floor(Math.random() * availableOperators.length);
  const randomOperator = availableOperators[randomNumOperator];
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
