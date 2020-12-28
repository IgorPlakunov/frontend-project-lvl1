import startGame from './index.js';
import getRandomNumber from './number-generator.js';

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

const getGameProps = () => {
  const question = hideNumber(getProgression());
  const answer = randomHiddenNumber;
  return { question, answer };
};

const description = 'What number is missing in the progression?';

const beginGame = () => startGame(description, getGameProps);

export default beginGame;
