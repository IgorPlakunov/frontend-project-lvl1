import promptly from 'promptly';

const rounds = 3;
const operators = ['-', '+', '*'];

const getRandomNumber = (start, end) => start + Math.floor((end - start) * Math.random());

const getRandomOperator = () => operators[getRandomNumber(0, 2)];

const getAnswers = (num1, oper, num2) => {
  const operatorsList = {
    '+': () => num1 + num2,
    '-': () => num1 - num2,
    '*': () => num1 * num2,
  };
  return operatorsList[oper]();
};

export default async function startGame() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  const startQuestions = () => {
    const startRounds = async (currentRounds) => {
      if (!currentRounds) {
        return console.log(`Congratulations, ${name}!`);
      }
      const randomNumber1 = getRandomNumber(1, 10);
      const randomNumber2 = getRandomNumber(1, 10);
      const randomOperator = getRandomOperator();
      const realAnswer = getAnswers(randomNumber1, randomOperator, randomNumber2);

      console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
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
