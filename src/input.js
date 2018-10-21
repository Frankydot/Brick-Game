/*input handler to listen to key events by moving arrows left and right...this will be used to move paddle left and right on the screen*/

export default class InputHandler {
  constructor(paddle, game) {
    //event listener to listen to events on arrow keys
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();

          break;

        case 39:
          paddle.moveRight();

          break;

        case 27:
          game.togglePause();

          break;

        case 32:
          game.start();

          break;
      }
    });

    //if the keys are released, the paddle should stop
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) {
            paddle.stop();
          }

          break;

        case 39:
          if (paddle.speed > 0) {
            paddle.stop();
          }

          break;
      }
    });
  }
}
