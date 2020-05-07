const rollDiceButton = document.getElementById("rollDice")
const score = document.getElementById("score")
let text = document.createTextNode('')
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
    player1Score = score.textContent= Math.floor(Math.random() * (max - min + 1)) + min
    console.log(player1Score)
    if (player1Score == 1) {
    console.log ('Loser')}
    //this console.log will need to be changed to display the word loser
    if (player1Score > 21) {
    console.log(player1Score)
    return player1Score + scoreHolder
    }
}



// const addDiceRolls = () => {
//     for (let i = 21; i > player1Score; )
//     alert ('roll again')
// }

// addDiceRolls()