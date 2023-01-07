import runEngine from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const availableOperators = ['+', '-', '*'];
  const randomOperator = availableOperators[getRandomNumber(0, availableOperators.length - 1)];
  return randomOperator;
};

const getCalcExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect`);
  }
};

const getRoundGame = () => {
  const randomFirstNum = getRandomNumber(1, 20);
  const randomSecondNum = getRandomNumber(1, 20);
  const randomOperator = getRandomOperator();
  const correctQuestion = `${randomFirstNum} ${randomOperator} ${randomSecondNum}`;
  const correctAnswer = String(getCalcExpression(randomFirstNum, randomSecondNum, randomOperator));
  return [correctQuestion, correctAnswer];
};

export default () => {
  runEngine(description, getRoundGame);
};
