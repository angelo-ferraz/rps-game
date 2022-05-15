const choices = document.querySelectorAll('.player-choice');
const currentPlayerScore = document.getElementById('player-score');
const currentCpuScore = document.getElementById('cpu-score');
const restart = document.getElementById('restart-button');
let playerScore = 0;
let cpuScore = 0;

function playSound() {
    const clickSound = document.querySelector("#clicksound");
    clickSound.play();
}



// Play round
function play(e) {
    const playerChoice = e.currentTarget.id;
    const cpuChoice = getComputerChoice();
    const winner = getWinner(playerChoice, cpuChoice);
    updateScore(winner, playerChoice, cpuChoice);
    if (playerScore == 5 || cpuScore == 5) {
        document.querySelector('.game-container').style.display = 'none';
        document.querySelector('.result-container').style.display = 'block';
        document.getElementById('restart-button').style.display = 'block';
        if (playerScore > cpuScore && cpuScore <= 1) {
            document.getElementById('player-wins').style.display = 'block'
            document.getElementById('gameupdates').innerHTML = `The little girl wins ${playerScore}:${cpuScore}, and laughs maniacally at her outrageous dominance over robot kind.`; } else
        if (playerScore < cpuScore && playerScore <= 1) {
            document.getElementById('robot-wins').style.display = 'block'
            document.getElementById('gameupdates').innerHTML = `WOW. The robot wins ${cpuScore}:${playerScore}! Talk about bad luck eh? Must be rigged...`; } else
        if (playerScore > cpuScore) {
            document.getElementById('player-wins').style.display = 'block'
            document.getElementById('gameupdates').innerHTML = `The little girl wins ${playerScore}:${cpuScore}, and fulfills her dream of robot genocide.`; } else
        if (playerScore < cpuScore) {
            document.getElementById('robot-wins').style.display = 'block'
            document.getElementById('gameupdates').innerHTML = `The robot wins ${cpuScore}:${playerScore}, and vows to eliminate all little girls worldwide.`; }
    }
}
// document.querySelector("#player-score").innerHTML = `Score: ${playerScore}`;} else

// CPU Choice
function getComputerChoice() {
    const rand = Math.random ();
    if (rand < 0.34) {return 'rock';} else 
    if (rand <= 0.67) {return 'paper';} 
    else {return 'scissors'}
}

// Who tf won?
function getWinner(player, cpu){
    if (player === cpu) {return 'draw';}
    else if (player === 'rock'){
            if (cpu === 'paper') {return 'cpuwin';} 
            else {return 'playerwin';}}
    else if (player === 'paper'){
            if (cpu === 'scissors') {return 'cpuwin';}
            else {return 'playerwin';}}
    else if (player === 'scissors'){
            if (cpu === 'rock') {return 'cpuwin';}
            else {return 'playerwin';}}
}

// Change Score & color coding the winner
function updateScore(winner, playerChoice, cpuChoice) {
    if(winner === 'playerwin'){
        if(playerChoice === 'rock'){
            document.querySelector("#rock").style.backgroundColor = "IndianRed";
            document.querySelector("#paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.getElementById("cpu-" + `${cpuChoice}`).style.backgroundColor = "DimGrey";} else
        if(playerChoice === 'paper'){
            document.querySelector("#rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#paper").style.backgroundColor = "IndianRed";
            document.querySelector("#scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.getElementById("cpu-" + `${cpuChoice}`).style.backgroundColor = "DimGrey";} else
        if(playerChoice === 'scissors'){
            document.querySelector("#rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#scissors").style.backgroundColor = "IndianRed";}
            document.querySelector("#cpu-rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.getElementById("cpu-" + `${cpuChoice}`).style.backgroundColor = "DimGrey";
        playerScore++;
        document.querySelector("#player-score").innerHTML = `Score: ${playerScore}`;} else
    if(winner === 'cpuwin'){
        if(cpuChoice === 'rock'){
            document.querySelector("#rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-rock").style.backgroundColor = "CadetBlue";
            document.querySelector("#cpu-paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.getElementById(`${playerChoice}`).style.backgroundColor = "DimGrey";} else
        if(cpuChoice === 'paper'){
            document.querySelector("#rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-paper").style.backgroundColor = "CadetBlue";
            document.querySelector("#cpu-scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.getElementById(`${playerChoice}`).style.backgroundColor = "DimGrey";} else
        if(cpuChoice === 'scissors'){
            document.querySelector("#rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
            document.querySelector("#cpu-scissors").style.backgroundColor = "CadetBlue";
            document.getElementById(`${playerChoice}`).style.backgroundColor = "DimGrey";} 
        cpuScore++;
        document.querySelector("#cpu-score").innerHTML = `Score: ${cpuScore}`;} else
    if(winner === 'draw'){
        document.querySelector("#rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
        document.querySelector("#paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
        document.querySelector("#scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
        document.querySelector("#cpu-rock").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
        document.querySelector("#cpu-paper").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
        document.querySelector("#cpu-scissors").style.backgroundColor = "rgba(219, 226, 222, 0.849)";
        document.getElementById("cpu-" + `${cpuChoice}`).style.backgroundColor = "DimGrey";
        document.getElementById(`${playerChoice}`).style.backgroundColor = "DimGrey";}
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame)

// Restart
function restartGame(){
    playerScore = 0;
    cpuScore = 0;
    document.querySelector("#player-score").innerHTML = `Score: 0`;
    document.querySelector("#cpu-score").innerHTML = `Score: 0`; 
}

