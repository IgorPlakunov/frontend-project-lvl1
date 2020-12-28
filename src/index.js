import promptly from 'promptly';

const rounds = 3;

export default async function startGame(description, getGameProps) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);

  const startQuestions = () => {
    const startRounds = async (currentRounds) => {
      if (!currentRounds) {
        return console.log(`Congratulations, ${name}!`);
      }
      const { question, answer } = getGameProps();
      console.log(`Question: ${question}`);
      const userAnswer = await promptly.prompt('Your answer:');
      if (userAnswer === answer.toString()) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(.`);
        return console.log(`Correct answer was '${answer}'. Let's try again, ${name}!`);
      }
      return startRounds(currentRounds - 1);
    };
    startRounds(rounds);
  };
  startQuestions();
}
