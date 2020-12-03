import promptly from 'promptly';

const rounds = 3;

const getRandomNumber = (start, end) => start + Math.floor((end - start) * Math.random());

const getlargestDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getlargestDivisor(number2, number1 % number2);
};

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const startGame = () => {
    const startRounds = async (currentRounds) => {
      if (!currentRounds) {
        return console.log(`Congratulations, ${name}!`);
      }
      const randomNumber1 = getRandomNumber(1, 100);
      const randomNumber2 = getRandomNumber(1, 100);
      const realAnswer = getlargestDivisor(randomNumber1, randomNumber2);
      console.log(`Question: ${randomNumber1} ${randomNumber2}`);
      const userAnswer = await promptly.prompt('Your answer:');
      if (realAnswer === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(.`);
        return console.log(`Correct answer was '${realAnswer}'. Let's try again, ${name}!`);
      }
      return startRounds(currentRounds - 1);
    };
    startRounds(rounds);
  };
  startGame();
};
