import { ITail } from "../components/tail/tail";
import Position from "./Position";
import Direction from "./Direction";
import { directive } from "@babel/types";

class TailHelper {
  private getLastPositionOfTail(tail: ITail): Position | null {
    var lastPartOfTail = null;
    if (tail && tail.parts) {
      lastPartOfTail = tail.parts[tail.parts.length - 1];
    }
    return lastPartOfTail;
  }

  private whereToRenderTail(
    tail: ITail,
    playerPosition: Position,
    currentDirection: Direction
  ): Position {
    let tailLastPosition = this.getLastPositionOfTail(tail);
    console.log(tailLastPosition);

    var endOfPlayer: Position = tailLastPosition
      ? tailLastPosition
      : playerPosition;
    var positionToRender: Position = {
      xPosition: endOfPlayer.xPosition,
      yPosition: endOfPlayer.yPosition,
      direction: endOfPlayer.direction
    };

    currentDirection =
      tailLastPosition && tailLastPosition.direction
        ? tailLastPosition.direction
        : currentDirection;

    switch (currentDirection) {
      case Direction.Left:
        positionToRender.xPosition = positionToRender.xPosition + 16;
        break;
      case Direction.Up:
        positionToRender.yPosition = positionToRender.yPosition + 16;
        break;
      case Direction.Right:
        positionToRender.xPosition = positionToRender.xPosition - 16;
        break;
      case Direction.Down:
        positionToRender.yPosition = positionToRender.yPosition - 16;
        break;

      default:
        break;
    }
    positionToRender.direction = currentDirection;
    return positionToRender;
  }

  addToTail(
    tail: ITail,
    playerPosition: Position,
    currentDirection: Direction
  ): ITail {
    var render = this.whereToRenderTail(tail, playerPosition, currentDirection);
    console.log(render);
    if (tail && tail.parts) {
      tail.parts.push(render);
    } else {
      tail = { parts: [render] };
    }
    return tail;
  }
}

export default TailHelper;
