import Game from "/src/game";

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
//game.start();

//COMMENTS: index.js file starts a new game by instantiating a game object telling it to start()

//ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
//cleas the previous items(clears entire screen) between every frame

//fills the image with color
//ctx.fillStyle = "f00";
//when you only use one fillStyle, it will be used throughout the page but one can change by using a new fillStyle for new images created
//when you re draw an item on a convas, whatever was there previously remains and as a result, it might be essential to clear what was there initially

//next is a paddle to move about...moved to game.js
/*let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);*/

//images
//let imgBall = document.getElementById("img-ball");

//instantiate before gameloop
//new InputHandler(paddle);

//GAME LOOP

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  //COMMENTS: in game loop, we clear the screen then tell the function to update and draw

  /*paddle.update(deltaTime);
  paddle.draw(ctx);

  //draw ball after importing and declaring
  ball.update(deltaTime);
  ball.draw(ctx);*/

  game.update(deltaTime);
  game.draw(ctx);

  //after declaring image, whenever we want to draw it... we say
  //ctx.drawImage(imgBall, 0, 0, 30, 30);

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
//gameLoop();
//
