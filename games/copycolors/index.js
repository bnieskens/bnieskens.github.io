// VARS & CONSTANTS
const allColorDivs = document.querySelectorAll(".colorDiv")
const sectionColorDivs = document.querySelector("#colorDivs")
const btnStartGame = document.querySelector("#startGame")
const pGameStatus = document.querySelector("#gameStatus")
const divScore = document.querySelector("#score")
const divHighScore = document.querySelector("#highScore")

const highlightTimeout = 150
const simonTimeout = 1000

let arrSimonSays = []
let arrUserSays = []

let score = 0
let highScore = 0

let gameOn = true

// populate arrColors with colors from divs
const arrColors = []
allColorDivs.forEach((color => {arrColors.push(color.id)}))

// Event listener 
// click on colorDiv
allColorDivs.forEach((colorDiv) => {
    colorDiv.addEventListener('click', addColorUser)
})

// start game button
btnStartGame.addEventListener('click', startGame)

// GAME CONTROLS
function startGame() {
    // change start button to restart game
    btnStartGame.textContent = "Restart game"
    arrSimonSays = []
    arrUserSays = []
    updateScore(0)
    gameOn = true
    colorDivsActive()
    playNextRound()
}

function playNextRound() {
    if (gameOn) {
        arrUserSays = []
        updateGameStatus("Simon's turn")
        colorDivsInactive()
        setTimeout(addColorSimon, 1000)
        // highlight previous chosen Simon colors 
        setTimeout(()=>{highlightSimonColors(0)}, 1000)    
    }
}

function stopTheGame() {
    gameOn = false
    btnStartGame.textContent = "Start a new game"
    updateGameStatus("Game over :(")
    toggleColorDivsActive()
}

// COLOR PICKER CONTROLS
// Add color to Simon says
function addColorSimon() {
    currentColor = arrColors[Math.floor(Math.random() * 4)]
    arrSimonSays.push(currentColor)
}

// Add color to user says
function addColorUser(event) {
    currentDiv = event.currentTarget
    arrUserSays.push(currentDiv.id)
    highlightOn(currentDiv)
    console.log(`User: ${arrUserSays}`)
    checkArrUserSays()
}

function highlightOn(currentDiv) {
    currentDiv.classList.add("highlight")
    setTimeout(() => { highlightOff(currentDiv) }, highlightTimeout)
}

function highlightOff(currentDiv) {
    currentDiv.classList.remove("highlight")
}

// VERIFICATION 
function checkArrUserSays(){
    // Compare every element in the user array with the corresponding Simon color
    let trackScore = 0
    arrUserSays.forEach((v, i) => {
        if (arrSimonSays[i] == v) {
            console.log(`Color ${i} ${v} is correct`)
            trackScore += 1
        } else {
            console.log(`Color ${i} ${v} is incorrect`)
            stopTheGame()
        }
    })

    // update score with correct guesses    
    updateScore(trackScore)
    updateHighScore(trackScore)

    if (trackScore == arrSimonSays.length) {
        setTimeout(() => { updateGameStatus("Correct!") }, 500)
        setTimeout(playNextRound, 1500)
    }
} 

function colorDivsActive() {
    sectionColorDivs.classList.add("active")
}

function colorDivsInactive() {
    sectionColorDivs.classList.remove("active")
}

// SCORE CONTROLS
function updateScore(newScore) {
    score = newScore
    divScore.textContent = "Score: "+ score
}

function updateHighScore(newHighScore) {
    if (newHighScore > highScore) {
        highScore = newHighScore
        divHighScore.textContent = "High score: " + score
    }
}

function updateGameStatus(message) {
    pGameStatus.textContent = message
}

function highlightSimonColors(colorNumber) {

    if (colorNumber < arrSimonSays.length) {
        color = arrSimonSays[colorNumber]
        matchingDiv = document.querySelector("#" + color)
        highlightOn(matchingDiv)
        setTimeout(() => { highlightSimonColors(colorNumber+1) }, simonTimeout) // Hightlights komen nog gelijktijdig
    } else {
        updateGameStatus("Your turn!")
        colorDivsActive() // Make colordivs clickable for user input
    }
}





// https://masteringjs.io/tutorials/fundamentals/foreach-index