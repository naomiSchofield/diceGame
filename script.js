//issues -> multiple dice pictures appear and 
// the number on the dice doesn't gets replaced 
// every time the number is pressed. 
// need to figure out how to save the number when the button is pressed. 
// Could push all the outcomes of the generateDiceNumber to an array...



const rollDiceButton = document.getElementById("rollDice")
const score = document.getElementById("score")
const outcome = document.getElementById("winnerOrLoser")
const diceImage = document.getElementById("diceImage")
let text = document.createTextNode('')
let displayTotal = document.getElementById('displayScore')
let player1Score
let scoreArray = []
let totalScore
displayTotal.appendChild(text)
outcome.appendChild(text)
score.appendChild(text)




rollDiceButton.addEventListener("click", () => {
    //Why does this event listener work with an ID and not work with a class?
    generateDiceNumber(1, 6)
})

const generateDiceNumber = (min, max) => {

    min = Math.ceil(min)
    max = Math.floor(max)
    //Why do we need Math.floor(Math.random()*(max-min +1)) + min
    player1Score = Math.floor(Math.random() * (max - min + 1)) + min
    score.textContent = 'You rolled a ' + player1Score
    score.classList.add('score')
    console.log(player1Score)
    scoreArray.push(player1Score)
    console.log(scoreArray)
    totalScore = scoreArray.reduce((a, b) => {
        return a + b
    }, 0)
    console.log('score', totalScore) 
    
    let dice = document.createElement("img")
    dice.src = `./img/dice${player1Score}.png`
    diceImage.appendChild(dice) 

    if (player1Score == 1) {
        outcome.textContent = 'You rolled a 1, you lose.'
        displayTotal.textContent = ''
    } 
   else if (player1Score > 1 && totalScore < 20) {
        outcome.textContent = 'Roll again'
        displayTotal.textContent = 'Your total score is ' + totalScore +' you need 21 to win.'
    }
   else if (totalScore > 20) {
        score.textContent = ''
        outcome.textContent = "Congratulations, you scored 21 or more, you win!"
        displayTotal.textContent = ''
    }

}


   









// const addDiceRolls = () => {
//     for (let i = 21; i > player1Score; )
//     alert ('roll again')
// }

// addDiceRolls()

//issues -> multiple dice pictures appear and 
// the number on the dice doesn't gets replaced 
// every time the number is pressed. 
// need to figure out how to save the number when the button is pressed. 