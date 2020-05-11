//issues -> multiple dice pictures appear and 
// the number on the dice doesn't gets replaced 
// every time the number is pressed. 
// need to figure out how to save the number when the button is pressed. 

const rollDiceButton = document.getElementById("rollDice")
const score = document.getElementById("score")
const outcome = document.getElementById("winnerOrLoser")
const diceImage = document.getElementById("diceImage")
let text = document.createTextNode('')
outcome.appendChild(text)
score.appendChild(text)
let player1Score
let scoreHolder = 0

rollDiceButton.addEventListener("click", () => {
    //Why does this event listener work with an ID and not work with a class?
    generateDiceNumber(1, 6)
})


const generateDiceNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    //Why do we need Math.floor(Math.random()*(max-min +1)) + min
    player1Score = Math.floor(Math.random() * (max - min + 1)) + min
    score.textContent = player1Score
    score.classList.add('score')
    console.log(player1Score)
    
    if (player1Score == 1) {
        outcome.textContent = 'Loser'
        let dice = document.createElement("img")
        dice.src = "./img/dice1.png"
        diceImage.appendChild(dice)
    }
    else if (player1Score == 2) {
        let dice = document.createElement("img")
        dice.src = "./img/dice2.png"
        diceImage.appendChild(dice)
    }
    else if (player1Score == 3) {
        let dice = document.createElement("img")
        dice.src = "./img/dice3.png"
        diceImage.appendChild(dice)
    }
    else if (player1Score == 4) {
        let dice = document.createElement("img")
        dice.src = "./img/dice4.png"
        diceImage.appendChild(dice)
    }
    else if (player1Score == 5) {
        let dice = document.createElement("img")
        dice.src = "./img/dice5.png"
        diceImage.appendChild(dice)
    }
    else if (player1Score == 6) {
        let dice = document.createElement("img")
        dice.src = "./img/dice6.png"
        diceImage.appendChild(dice)
    }
    else if (player1Score > 21) {
        //dice roll +++ => 21 
        outcome.textContent = 'Winner'
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
