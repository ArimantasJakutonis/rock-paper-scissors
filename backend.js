// DOM node list of buttons generated
const buttons = document.querySelectorAll('button');

// Used for displaying result message
const container = document.querySelector('#container');
const wins = document.querySelector('#wins');
const loses = document.querySelector('#loses');
const draws = document.querySelector('#draws');

// Keeping track of the score
let winsCount = 0;
let losesCount = 0;
let drawsCount = 0;

// Event listener for button click and playing the game
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const gameResult = playGame(button.id);
        console.log('Player picked: ' + button.id);
        switch (gameResult[0]) {
            case 'win':
                container.textContent = `You won! Opponent picked ${gameResult[1]}`;
                winsCount++;
                wins.textContent = `Wins: ${winsCount}`;
                break;
            case 'lose':
                container.textContent = `You lost! Opponent picked ${gameResult[1]}`;
                losesCount++;
                loses.textContent = `Loses: ${losesCount}`;
                break;
            case 'draw':
                container.textContent = `Draw! Opponent picked ${gameResult[1]}`;
                drawsCount++;
                draws.textContent = `Draws: ${drawsCount}`;
                break;
            default:
                alert('Error');
                break;
        };
    });
});

// Auxilary function to generate an opponent
function generateOpponent() {
    const weapons = ['rock', 'paper', 'scissors'];
    return weapons[Math.floor(Math.random() * weapons.length)];
};

// Auxilary function to determine the winner, takes user button click as an argument
function playGame(selectedWeapon) {
    const opponent = generateOpponent();
    console.log('Opponent is: ' + opponent);
    switch (selectedWeapon) {
        case 'rock':
            if (opponent === 'scissors') return ['win', opponent];
            if (opponent === 'paper') return ['lose', opponent];
            else return ['draw', opponent];
            break;
        case 'paper':
            if (opponent === 'scissors') return ['lose', opponent];
            if (opponent === 'rock') return ['win', opponent];
            else return ['draw', opponent];
            break;
        case 'scissors':
            if (opponent === 'paper') return ['win', opponent];
            if (opponent === 'rock') return ['lose', opponent];
            else return ['draw', opponent];
            break;
        default:
            console.log('Invalid argument');
            break;
    };
};