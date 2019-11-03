import React, { useState } from "react";
import style from "./map.module.css";
import Player from "../player/player";
import Snack from "../snack/snack";
import Direction from "../../business/Direction";
import Controller from "../../business/controller";
import TailHelper from "../../business/tailhelper";
import Tail, { ITail } from "../tail/tail";
import Position from "../../business/Position";

const Map: React.FC = () => {
  let controller = new Controller();
  let tailHelper = new TailHelper();
  let initialTail: ITail = {};
  let initialDirectionPoints: Position[] = [];

  const [playerXPosition, setPlayerXPosition] = useState(80);
  const [playerYPosition, setPlayerYPosition] = useState(80);
  const [playerDirection, setPlayerDirection] = useState(Direction.None);
  const [playersTail, setPlayersTail] = useState(initialTail);
  const [playersDirectionPoints, setPlayersDirectionPoints] = useState(
    initialDirectionPoints
  );

  const [snackXPosition, setSnackXPosition] = useState(96);
  const [snackYPosition, setSnackYPosition] = useState(96);

  const [snackIsVisible, setSnackIsVisible] = useState(false);

  function giveRandomNumber() {
    var times = Math.floor(Math.random() * 19) + 1;
    var number = 16 * times;
    return number;
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSnackIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [snackIsVisible]);

  React.useEffect(() => {
    if (
      playerXPosition === snackXPosition &&
      playerYPosition === snackYPosition
    ) {
      //we eat the snack! yum!
      setSnackIsVisible(false);
      setSnackXPosition(giveRandomNumber());
      setSnackYPosition(giveRandomNumber());

      let currentPosition: Position = {
        xPosition: playerXPosition,
        yPosition: playerYPosition
      };
      let updatedTail = tailHelper.addToTail(
        playersTail,
        currentPosition,
        playerDirection
      );
      setPlayersTail(updatedTail);
      console.log("score:");
    }
  }, [playerXPosition, playerYPosition]);

  function updatePosition(position: Position): Position {
    let direction = position.direction;
    switch (direction) {
      case Direction.Left:
        if (position.xPosition - 16 > -16) {
          //setPlayerXPosition(playerXPosition - 16);
          position.xPosition = position.xPosition - 16;
        }

        break;
      case Direction.Up:
        //up
        if (position.yPosition - 16 > -16) {
          // setPlayerYPosition(playerYPosition - 16);
          position.yPosition = position.yPosition - 16;
        }
        break;
      case Direction.Right:
        //right
        if (position.xPosition + 16 < 20 * 16) {
          // setPlayerXPosition(playerXPosition + 16);
          position.xPosition = position.xPosition + 16;
        }

        break;
      case Direction.Down:
        //down
        if (position.yPosition + 16 < 20 * 16) {
          position.yPosition = position.yPosition + 16;

          // setPlayerYPosition(playerYPosition + 16);
        }
        break;

      default:
        break;
    }
    return position;
  }

  function move(event: React.KeyboardEvent) {
    var key = event.keyCode;
    var oldDirection = playerDirection;
    var direction = controller.convertKeyCodeToDirection(key);
    if (direction !== Direction.None) {
      let newPlayerPosition: Position = {
        xPosition: playerXPosition,
        yPosition: playerYPosition,
        direction: direction
      };

      newPlayerPosition = updatePosition(newPlayerPosition);

      setPlayerDirection(direction);
      setPlayerXPosition(newPlayerPosition.xPosition);
      setPlayerYPosition(newPlayerPosition.yPosition);

      if (playersTail.parts) {
        let prevDirection = JSON.parse(JSON.stringify(playerDirection));
        playersTail.parts.forEach(
          (tailPartPosition: Position, index: number) => {
            let oldTailPartDirection = JSON.parse(
              JSON.stringify(tailPartPosition.direction)
            );

            tailPartPosition.direction = prevDirection;

            let tempPos: Position = {
              xPosition: tailPartPosition.xPosition,
              yPosition: tailPartPosition.yPosition,
              direction: tailPartPosition.direction
            };

            prevDirection = oldTailPartDirection;
            tempPos = updatePosition(tempPos);
            tailPartPosition.xPosition = tempPos.xPosition;
            tailPartPosition.yPosition = tempPos.yPosition;
          }
        );

        setPlayersTail(playersTail);
      }
    }

    // if (direction !== oldDirection && oldDirection !== Direction.None) {
    //   var point: Position = {
    //     xPosition: playerXPosition,
    //     yPosition: playerYPosition,
    //     direction: oldDirection
    //   };
    //   playersDirectionPoints.push(point);
    //   setPlayersDirectionPoints(playersDirectionPoints);
    // }
  }

  return (
    <div className={style.map} tabIndex={0} onKeyDown={move}>
      <Player
        currentDirection={playerDirection}
        left={playerXPosition}
        top={playerYPosition}
      ></Player>
      {playersTail.parts && <Tail parts={playersTail.parts}></Tail>}
      {snackIsVisible && (
        <Snack left={snackXPosition} top={snackYPosition}></Snack>
      )}
    </div>
  );
};

export default Map;
