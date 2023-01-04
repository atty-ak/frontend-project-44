import index from '../index.js';
import getRandomNumber from '../utility.js';

const description = 'What number is missing in the progression?';

const getProgression = (begin, step, length) => {
  const numbers = [];
  const lastNumProgression = (length - 1) * step + begin;
  for (let i = begin; i <= lastNumProgression; i += step) {
    numbers.push(i);
  }
  return numbers;
};

const getRoundGame = () => {
  const randomNum = getRandomNumber(1);
  const progressionStep = getRandomNumber(2, 7);
  const progressionLength = getRandomNumber(5, 10);
  const hiddenNum = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(randomNum, progressionStep, progressionLength);
  const correctAnswer = String(progression[hiddenNum]);
  progression[hiddenNum] = '..';
  const correctQuestion = progression.join(' ');
  return [correctQuestion, correctAnswer];
};

export default () => {
  index(description, getRoundGame);
};
