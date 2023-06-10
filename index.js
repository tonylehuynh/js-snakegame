const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25; // represents 25 px
let gameRunning = false;
// How far to move snake every game tick. 
let xVelocity = unitSize;
let yVelocity = 0;
// Food coordinates
let foodX;
let foodY;
let score = 0;
// Snake will be an array of objects each representing its body parts
// x and y represent coordinates
let snake = [
	{x: unitSize * 4, y: 0},
	{x: unitSize * 3, y: 0},
	{x: unitSize * 2, y: 0},
	{x: unitSize, y: 0},
	{x: 0, y: 0},
];

window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);

gameStart();



function gameStart(){
	gameRunning = true;
	scoreText.textContent = score;
	createFood();
	drawFood();
	nextTick();
};
function nextTick(){
	if(gameRunning){
		setTimeout(() => {
			clearBoard();
			drawFood();
			moveSnake();
			drawSnake();
			checkGameOver();
			nextTick();
		}, 75);
	}
	else{
		displayGameOver();
	}
};
function clearBoard(){};

// Function to randomly generate coordinates for food item
function createFood(){
	function randomFood(min, max){
		// * unitSize so that all randomly generated numbers are divisible by 25
		const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
		return randNum;
	}
	foodX = randomFood(0, gameWidth - unitSize);
	foodY = randomFood(0, gameWidth - unitSize);
};

// Creates food item as a red square
function drawFood(){
	context.fillStyle = foodColor;
	context.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};
