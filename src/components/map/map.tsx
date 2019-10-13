import React, { useState } from "react";
import style from "./map.module.css";
import Player from "../player/player";
import Snack from "../snack/snack";
import Direction from "../../business/Direction";

const Map: React.FC = () => {
  const [playerXPosition, setPlayerXPosition] = useState(80);
  const [playerYPosition, setPlayerYPostion] = useState(80);
  const [playerDirection, setPlayerDirection] = useState(Direction.None);

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
    console.log(playerDirection);

    if (
      playerXPosition === snackXPosition &&
      playerYPosition === snackYPosition
    ) {
      //we eat the snack! yum!
      setSnackIsVisible(false);
      setSnackXPosition(giveRandomNumber());
      setSnackYPosition(giveRandomNumber());

      console.log("score:");
    }
  }, [playerXPosition, playerYPosition]);

  function convertKeyCodeToDirection(key: number): Direction {
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
  }

  function move(event: React.KeyboardEvent) {
    var key = event.keyCode;
    var direction = convertKeyCodeToDirection(key);
    switch (direction) {
      case Direction.Left:
        if (playerXPosition - 16 > -16) {
          setPlayerXPosition(playerXPosition - 16);
        }

        break;
      case Direction.Up:
        //up
        if (playerYPosition - 16 > -16) {
          setPlayerYPostion(playerYPosition - 16);
        }
        break;
      case Direction.Right:
        //right
        if (playerXPosition + 16 < 20 * 16) {
          setPlayerXPosition(playerXPosition + 16);
        }

        break;
      case Direction.Down:
        //down
        if (playerYPosition + 16 < 20 * 16) {
          setPlayerYPostion(playerYPosition + 16);
        }
        break;

      default:
        break;
    }
    setPlayerDirection(direction);
  }

  return (
    <div className={style.map} tabIndex={0} onKeyDown={move}>
      <Player
        currentDirection={playerDirection}
        left={playerXPosition}
        top={playerYPosition}
      ></Player>
      {snackIsVisible && (
        <Snack left={snackXPosition} top={snackYPosition}></Snack>
      )}
    </div>
  );
};

export default Map;
