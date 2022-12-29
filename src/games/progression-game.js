import index from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'What number is missing in the progression?';

const getRoundGame = () => {
  const randomNum = getRandomNumber(1);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const numbers = [];
  const maxNumProgression = (progressionLength - 1) * progressionStep + randomNum;
  for (let i = randomNum; i <= maxNumProgression; i += progressionStep) {
    numbers.push(i);
  }
  const hiddenNum = getRandomNumber(0, numbers.length - 1);
  const correctAnswer = numbers[hiddenNum];
  numbers[hiddenNum] = '..';
  const correctQuestion = numbers.join(' ');
  return [correctQuestion, String(correctAnswer)];
};

export default () => {
  index(description, getRoundGame);
};
