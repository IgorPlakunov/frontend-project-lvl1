/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import promptly from 'promptly';

const numberRange = 100;
const rounds = 3;
const numbers = [];

const getRandomNumber = () => Math.floor(Math.random() * numberRange);

for (let i = 0; i < rounds; i++) {
  const randomNumber = getRandomNumber();
  numbers.push(randomNumber);
}

const isEven = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  numbers.forEach(async (item) => {
    console.log(`Question: ${item}`);
    await promptly.prompt('Your answer:');
    if (isEven(item) === userAnswer) {
      console.log('Correct!');
    } return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(item)}'. Let's try again, ${name}!`);
  });
  return console.log(`Congratulations, ${name}!`);
};
