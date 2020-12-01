/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import promptly from 'promptly';

const numberRange = 100;
const rounds = 3;

const getRandomNumber = () => Math.floor(Math.random() * numberRange);

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  function startGame() {
    async function startRounds(currentRounds) {
      if (!currentRounds) {
        return console.log(`Congratulations, ${name}!`);
      }
      const randomNumber = getRandomNumber();
      console.log(`Question: ${randomNumber}`);
      const userAnswer = await promptly.prompt('Your answer:');
      if (isEven(randomNumber) === userAnswer) {
        console.log('Correct!');
      } else {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'. Let's try again, ${name}!`);
      }
      return startRounds(currentRounds - 1);
    }
    startRounds(rounds);
  }

  startGame();
};
