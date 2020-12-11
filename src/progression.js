import promptly from 'promptly';

const rounds = 3;
const getRandomNumber = (start, end) => start + Math.floor((end - start) * Math.random());

const randomNumber = getRandomNumber(1, 100);
const randomProgressNumber = getRandomNumber(2, 10);
const randomProgressionLength = getRandomNumber(5, 10);

const progression = [];

const getProgression = (number) => {
  if (progression.length === randomProgressionLength) {
    return progression;
  }
  progression.push(number);
  return getProgression(number + randomProgressNumber);
};
getProgression(randomNumber);

const randomHiddenNumber = progression[getRandomNumber(0, progression.length)];

const hideNumber = (array) => {
  array.splice(array.indexOf(randomHiddenNumber), 1, '..');
  return array.join(' ');
};

export default async function startGame() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const startQuestions = () => {
    const startRounds = async (currentRounds) => {
      if (!currentRounds) {
        return console.log(`Congratulations, ${name}!`);
      }
      const newProgression = getProgression();
      const realAnswer = randomHiddenNumber;
      console.log(`Question: ${hideNumber(newProgression)}`);
      const userAnswer = await promptly.prompt('Your answer:');
      if (userAnswer === realAnswer.toString()) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(.`);
        return console.log(`Correct answer was '${realAnswer}'. Let's try again, ${name}!`);
      }
      return startRounds(currentRounds - 1);
    };
    startRounds(rounds);
  };
  startQuestions();
}
