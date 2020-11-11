import promptly from 'promptly'

const randomNumber0 = Math.floor(Math.random() * 100) + 1
const randomNumber1 = Math.floor(Math.random() * 100) + 1
const randomNumber2 = Math.floor(Math.random() * 100) + 1

const numbers = [randomNumber0, randomNumber1, randomNumber2]

const isEven = (randomNumber) => {
    if (randomNumber % 2 === 0) {
  return 'yes'
  }
  return 'no'
}

export default async () => {
    const name = await promptly.prompt('May I have your name?')
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no"')
    for (const item of numbers) {
        let userAnswer = await promptly.prompt(`Question: ${item}`)
        if (isEven(item) !== userAnswer) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isEven(item)}. Let's try again, ${name}!`)  
            break     
        } else {
            console.log('Correct!') 
        }       
     }  
     console.log(`Congratulations, ${name}!`) 
    } 
