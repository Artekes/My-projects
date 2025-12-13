const options = [`👊`, `🤚`, `✌️`];
const playerChoiseDisplay = document.getElementById(`player_choise`);
const botChoiseDisplay = document.getElementById(`bot_choise`);
const winnerDisplay = document.getElementById(`winner`);
const playerScoreDisplay = document.getElementById(`player_score`);
const botScoreDisplay = document.getElementById(`bot_score`);
let playerScore = 0;
let botScore = 0;

function game(playerChoise) {
	let botChoise = options[Math.floor(Math.random() * 3)];
	let result;

	if (playerChoise === botChoise) {
		result = `It's a TIE!`;
	} else {
		switch (playerChoise) {
		case `👊`:
			result = botChoise === `🤚` ? `Bot WINS` : `Player WINS`;
			break;
		case `🤚`:
			result = botChoise === `✌️` ? `Bot WINS` : `Player WINS`;
			break;
		case `✌️`:
			result = botChoise === `👊` ? `Bot WINS` : `Player WINS`;
		}
		result === `Bot WINS` ? botScore++ : playerScore++;
	}

	playerChoiseDisplay.textContent = `PLAYER: ${playerChoise}`;
	botChoiseDisplay.textContent = `BOT: ${botChoise}`;
	winner.textContent = result;
	playerScoreDisplay.textContent = `Player score: ${playerScore}`;
	botScoreDisplay.textContent = `Bot score: ${botScore}`;
}