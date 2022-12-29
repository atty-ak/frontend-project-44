import index from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'What number is missing in the progression?';

const getRoundGame = () => {
  const randomNum = getRandomNumber(1);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const result = [];
  const maxNumProgression = (progressionLength - 1) * progressionStep + randomNum;
  for (let i = randomNum; i <= maxNumProgression; i += progressionStep) {
    result.push(i);
  }
  const hiddenNum = getRandomNumber(0, result.length - 1);
  const correctAnswer = result[hiddenNum];
  result[hiddenNum] = '..';
  const correctQuestion = result.join(' ');
  return [correctQuestion, String(correctAnswer)];
};

export default () => {
  index(description, getRoundGame);
};
