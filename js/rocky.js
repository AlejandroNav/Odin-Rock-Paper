const rockBtn = document.querySelector("#roca")
const paperBtn = document.querySelector("#papel")
const scissorBtn = document.querySelector("#tijera")
const message = document.querySelector("#messag")
const pcShow = document.querySelector('#p1s')
const youShow = document.querySelector('#p2s')
const resetButton = document.querySelector("#resets")
const selectGames  = document.querySelector("#limits")
let isGame = false;
let pcScore = 0;
let youScore = 0;
let pcMove = 0;
let youMove = 0;
let maximum = 2;

resetButton.addEventListener('click', resetFunc)
rockBtn.addEventListener('click', function () { // 1 is Rock
    if (!isGame) {
        youMove = 1;
        pcMove = compuRandom();
        if (pcMove === 1) {
            youScore + 0;
        } else if (pcMove === 2) {
            youScore += 1;
        } else {
            pcScore += 1;
        } turn()
    }
})
paperBtn.addEventListener('click', function () { // 2 is paper
    if (!isGame) {
        youMove = 2;
        pcMove = compuRandom();
        if (pcMove === 1) {
            youScore += 1;
        } else if (pcMove === 2) {
            youScore += 0;
        } else {
            pcScore += 1;
        } turn()
    }
})
scissorBtn.addEventListener('click', function () { // 3 is scissors
    if (!isGame) {
        youMove = 3
        pcMove = compuRandom();
        if (pcMove === 1) {
            pcScore += 1;
        } else if (pcMove === 2) {
            youScore += 1;
        } else {
            youScore += 0;
        } turn()
    }
})

function compuRandom() {
    numero = Math.ceil(Math.random() * 3);
    return numero;

}
function moveToText(move) {
    if (move === 1) {
        return "Rock"
    } else if (move === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}


function turn() {
    message.textContent = (moveToText(youMove) + ' vs PC ' + moveToText(pcMove))
    pcShow.textContent = pcScore
    youShow.textContent = youScore
    if (pcScore === maximum) {
        isGame = true;
        pcShow.classList.add('winner')
        youShow.classList.add('loser')
    } if (youScore === maximum) {
        isGame = true;
        pcShow.classList.add('loser')
        youShow.classList.add('winner')
    }
}

function resetFunc() {
    pcScore = youScore = 0
    pcShow.textContent = pcScore
    youShow.textContent = youScore
    isGame = false;
    pcShow.classList.remove('winner', 'loser')
    youShow.classList.remove('loser', 'winner')
    message.textContent = (' vs PC ')
}


selectGames.addEventListener('change', function () {
    maximum = parseInt(this.value)
    resetFunc();
})