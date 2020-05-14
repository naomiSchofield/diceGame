//issues -> can keep pressing the button after winning. 

const rollDiceButton = document.getElementById("rollDice")
const score = document.getElementById("score")
const outcome = document.getElementById("winnerOrLoser")
const diceImage = document.getElementById("diceImage")
let displayTotal = document.getElementById('displayScore')
let player1Score = 0


rollDiceButton.addEventListener("click", () => {
    //Why does this event listener work with an ID and not work with a class?
    let diceRoll2 = generateDiceNumber(1, 6)
    generateImage(diceRoll2)
    winLose(diceRoll2)
})

const generateDiceNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    //Why do we need Math.floor(Math.random()*(max-min +1)) + min
    let diceRoll1 = Math.floor(Math.random() * (max - min + 1)) + min
    player1Score += diceRoll1
    score.textContent = 'You rolled a ' + diceRoll1
    
    return diceRoll1
}

const generateImage = (diceRoll3) => {
    diceImage.src = `./img/dice${diceRoll3}.png`
    console.log(`this is the score ${diceRoll3}`)
}

const winLose = (diceRoll4) => {

    if (diceRoll4== 1) {
        outcome.textContent = 'You rolled a 1, you lose.'
        displayTotal.textContent = ''
        player1Score = 0

    } 
   else if (player1Score < 20) {
        outcome.textContent = 'Roll again'
        displayTotal.textContent = 'Your total score is ' + player1Score +' you need 21 to win.'
    }
   else  {
        score.textContent = ''
        outcome.textContent = "Congratulations, you scored 21 or more, you win!"
        displayTotal.textContent = ''
        player1Score = 0 
    }
    
}