import Direction from "./Direction";

class Controller {
  convertKeyCodeToDirection = function(key: number): Direction {
    let direction = Direction.None;
    switch (key) {
      case 37:
        direction = Direction.Left;
        break;
      case 38:
        direction = Direction.Up;
        break;
      case 39:
        direction = Direction.Right;
        break;
      case 40:
        direction = Direction.Down;
        break;

      default:
    }
    return direction;
  };
}

export default Controller;
