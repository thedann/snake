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

  checkIfDirectionIsValid = function(
    currentDirection: Direction,
    newDirection: Direction
  ) {
    if (
      currentDirection === Direction.Left &&
      newDirection === Direction.Right
    ) {
      return false;
    } else if (
      currentDirection === Direction.Right &&
      newDirection === Direction.Left
    ) {
      return false;
    } else if (
      currentDirection === Direction.Up &&
      newDirection === Direction.Down
    ) {
      return false;
    } else if (
      currentDirection === Direction.Down &&
      newDirection === Direction.Up
    ) {
      return false;
    }
    return true;
  };
}

export default Controller;
