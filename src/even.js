import promptly from 'promptly';

const rounds = 3;

const getRandomNumber = (start, end) => start + Math.floor((end - start) * Math.random());

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const startGame = () => {
    const startRounds = async (currentRounds) => {
      if (!currentRounds) {
        return console.log(`Congratulations, ${name}!`);
      }
      const randomNumber = getRandomNumber(1, 100);
      console.log(`Question: ${randomNumber}`);
      const userAnswer = await promptly.prompt('Your answer:');
      if (isEven(randomNumber) === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(.`);
        return console.log(`Correct answer was '${isEven(randomNumber)}'. Let's try again, ${name}!`);
      }
      return startRounds(currentRounds - 1);
    };
    startRounds(rounds);
  };
  startGame();
};
