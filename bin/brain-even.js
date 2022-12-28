#!/usr/bin/env node

import readlineSync from 'readline-sync';

const evenOdd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!
Answer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i <= 2; i += 1) {
    const randomNum = Math.ceil(Math.random() * 100);
    const checkNum = randomNum % 2 === 0;
    const correctAnswer = checkNum === true ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

evenOdd();
