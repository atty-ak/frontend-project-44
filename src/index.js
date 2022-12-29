import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [correctQuestion, correctAnswer] = game(i);
    console.log(`Question: ${correctQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
