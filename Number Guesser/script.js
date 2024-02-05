let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

//The purpose of this function is to be called each round to determine which guess is closest to the target number.
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDifference = Math.abs(humanGuess - targetNumber);
    const computerDifference = Math.abs(computerGuess - targetNumber);
if (humanDifference > computerDifference) {
    return false;
} else {
    return true;
}
};

//The purpose of this function is to be used to correctly increase the winner’s score after each round.
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    }
    if (winner === 'computer') {
        computerScore += 1;
    }
};

//The purpose of this function is to be used to update the round number after each round.
const advanceRound = () => {
    return currentRoundNumber += 1;
}; 

const guessAlert = humanGuess => {
    if (humanGuess > 0 && humanGuess < 10) {
        return true;
    } else {
        return alert("Your number is out of range!")
    }
}