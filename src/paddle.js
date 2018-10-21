export default class Paddle {
  constructor(game) {
    //attributes for paddle
    this.gameWidth = game.gameWidth;
    this.width = 150;

    this.height = 30;

    this.maxSpeed = 7;
    this.speed = 0;

    //paddle is to be in centre of screen
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
    };
  }

  //controlling mov.t of paddle
  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  //method for drawing paddle draw ()
  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    /*if (!deltaTime) {
      return;
    }*/

    this.position.x += this.speed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
