import React, { useState, useRef, useEffect } from "react";
import style from "./map.module.css";
import Player from "../player/player";
import Snack from "../snack/snack";
import Direction from "../../business/Direction";
import Controller from "../../business/controller";
import TailHelper from "../../business/tailhelper";
import Tail, { ITail } from "../tail/tail";
import Position from "../../business/Position";
import GameOver from "../gameover/gameover";
import { useScore } from "../../context";
import fire from "../../fire";

const Map: React.FC = () => {
  let controller = new Controller();
  let tailHelper = new TailHelper();
  let initialTail: ITail = {};

  //Store for SCORE
  // const store = React.useContext(scoreContext);

  const { score, setScore } = useScore();

  //Hooks for PLAYER
  const [playerXPosition, setPlayerXPosition] = useState(80);
  const [playerYPosition, setPlayerYPosition] = useState(80);
  const [playerDirection, setPlayerDirection] = useState(Direction.None);
  const [playersTail, setPlayersTail] = useState(initialTail);
  const [playerMoveTimer, setPlayerMoveTimer] = useState(320);
  const [playerMaxSpeed] = useState(70);
  const [playerIsMoving, setPlayerIsMoving] = useState(0);
  const [playerStartedGame, setPlayerStartedGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  //Hooks for SNACK
  const [snackXPosition, setSnackXPosition] = useState(96);
  const [snackYPosition, setSnackYPosition] = useState(96);
  const [snackIsVisible, setSnackIsVisible] = useState(false);

  function giveRandomNumber() {
    var times = Math.floor(Math.random() * 19) + 1;
    var number = 16 * times;
    return number;
  }

  //Custom interval Hook
  //from here: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  function useInterval(callback: any, delay: number) {
    const savedCallback = useRef<any>();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        if (savedCallback && savedCallback.current != null) {
          savedCallback.current();
        }
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  React.useEffect(() => {
    let turn = playerIsMoving + 1;
    setPlayerIsMoving(turn);
  }, [playerStartedGame]);

  useInterval(() => {
    move(playerDirection);
    setPlayerIsMoving(playerIsMoving + 1);
  }, playerMoveTimer);

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
      eatSnack();
    }
  }, [playerXPosition, playerYPosition]);

  React.useEffect(() => {
    if (isGameOver) {
      setPlayerIsMoving(0);
      setPlayerDirection(Direction.None);
      setPlayerXPosition(80);
      setPlayerYPosition(80);
      setPlayersTail(initialTail);

    }
  }, [isGameOver]);

  function eatSnack() {
    setScore(score + 1);
    setSnackIsVisible(false);
    setSnackXPosition(giveRandomNumber());
    setSnackYPosition(giveRandomNumber());
    if (playerMoveTimer >= playerMaxSpeed) {
      setPlayerMoveTimer(playerMoveTimer * 0.8);
    } else {
      console.log("reached max speed");
    }

    let currentPosition: Position = {
      xPosition: playerXPosition,
      yPosition: playerYPosition,
      direction: playerDirection
    };
    let updatedTail = tailHelper.addToTail(playersTail, currentPosition);
    setPlayersTail(updatedTail);
    console.log("score:");
  }

  function updatePosition(position: Position): Position {
    let direction = position.direction;
    switch (direction) {
      case Direction.Left:
        if (position.xPosition - 16 > -16) {
          position.xPosition = position.xPosition - 16;
        }

        break;
      case Direction.Up:
        //up
        if (position.yPosition - 16 > -16) {
          position.yPosition = position.yPosition - 16;
        }
        break;
      case Direction.Right:
        //right
        if (position.xPosition + 16 < 20 * 16) {
          position.xPosition = position.xPosition + 16;
        }

        break;
      case Direction.Down:
        //down
        if (position.yPosition + 16 < 20 * 16) {
          position.yPosition = position.yPosition + 16;
        }
        break;

      default:
        break;
    }
    return position;
  }

  function handleKeyPress(event: React.KeyboardEvent) {
    var key = event.keyCode;
    var direction = controller.convertKeyCodeToDirection(key);
    //check if player just entered the same direction again....
    //or the opposite one!
    if (
      direction !== playerDirection &&
      controller.checkIfDirectionIsValid(playerDirection, direction)
    ) {
      setPlayerDirection(direction);
      if (direction !== Direction.None) {
        move(direction);
      }
    }
  }

  function checkIfPlayerTouchedTheTail(
    playerPosition: Position,
    tail: ITail
  ): boolean {
    let isGameOver = false;
    if (tail.parts) {
      tail.parts.forEach(part => {
        if (
          part.yPosition === playerPosition.yPosition &&
          part.xPosition === playerPosition.xPosition
        ) {
          console.log("GAME OVER!!!");
          isGameOver = true;
        }
      });
    }
    return isGameOver;
  }

  function move(direction: Direction) {
    if (!playerStartedGame) {
      setPlayerStartedGame(true);
    }
    if (direction !== Direction.None) {
      let newPlayerPosition: Position = {
        xPosition: playerXPosition,
        yPosition: playerYPosition,
        direction: direction
      };

      newPlayerPosition = updatePosition(newPlayerPosition);

      setPlayerXPosition(newPlayerPosition.xPosition);
      setPlayerYPosition(newPlayerPosition.yPosition);

      let isGameOver = checkIfPlayerTouchedTheTail(
        newPlayerPosition,
        playersTail
      );
      if (!isGameOver) {
        if (playersTail.parts) {
          let prevDirection = JSON.parse(JSON.stringify(playerDirection));
          playersTail.parts.forEach((tailPartPosition: Position) => {
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
          });

          setPlayersTail(playersTail);
        }
      } else {
        setIsGameOver(true);
      }
    }
  }

  return (
    <div className={style.map} tabIndex={0} onKeyDown={handleKeyPress}>
      {!isGameOver ? (
        <>
          <Player
            currentDirection={playerDirection}
            left={playerXPosition}
            top={playerYPosition}
          ></Player>
          {playersTail.parts && <Tail parts={playersTail.parts}></Tail>}
          {snackIsVisible && (
            <Snack left={snackXPosition} top={snackYPosition}></Snack>
          )}
        </>
      ) : (
        <>
          <GameOver points={score}></GameOver>
        </>
      )}
    </div>
  );
};

export default Map;
