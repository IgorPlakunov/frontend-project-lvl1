import promptly from 'promptly';

const rounds = 3;

const getRandomNumber = (start, end) => start + Math.floor((end - start) * Math.random());

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) if (num % i === 0) return 'no';
  return 'yes';
};

export default async function startGame() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const startQuestions = () => {
    const startRounds = async (currentRounds) => {
      if (!currentRounds) {
        return console.log(`Congratulations, ${name}!`);
      }
      const randomNumber = getRandomNumber(1, 100);
      console.log(`Question: ${randomNumber}`);
      const userAnswer = await promptly.prompt('Your answer:');
      if (isPrime(randomNumber) === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(.`);
        return console.log(`Correct answer was '${isPrime(randomNumber)}'. Let's try again, ${name}!`);
      }
      return startRounds(currentRounds - 1);
    };
    startRounds(rounds);
  };
  startQuestions();
}
