import React, { useState } from "react";
import style from "./player.module.css";
import Tail, { ITail } from "../tail/tail";
import Direction from "../../business/Direction";
import Position from "../../business/Position";

interface IPlayer {
  position?: Position;
  left: number;
  top: number;
  currentDirection: Direction;
  tail?: ITail;
}
/*
  TODO: 
  En lista med turning points. 1 turning point för var 3e "boll" i ormen
  en lista med bollar som ormen består av. 
  bollen renderas i motsats riktning mot ormens rörelse. 
  Behöver alltså ha koll på vilket håll ormen är på väg åt
  nästa : fixa automatisk rörelse mot en riktigt och håll den
  tills man klickar in en ny riktning

  man har en map med positioner och riktingar för svansen. 
  nyckeln är positionen (x,y) och värden är riktningen spelaren tog vid den positionen.
  sen går när svansen kommer til en ny positionen kollar den mot mappen och ser om den positionen finns där
  gör den det så byter den riktning. 
*/
const Player: React.FC<IPlayer> = (props: IPlayer) => {
  const [playerXPosition, setPlayerXPosition] = useState(props.left);
  const [playerYPosition, setPlayerYPostion] = useState(props.top);

  function getLastPositionOfTail(): Position | null {
    var lastPartOfTail = null;
    if (props.tail && props.tail.parts) {
      const rowLen = props.tail.parts.length;
      props.tail.parts.map((position, i) => {
        if (rowLen === i + 1) {
          lastPartOfTail = position;
        }
      });
    }
    return lastPartOfTail;
  }

  function whereToRenderTail(): Position {
    let tailLastPosition = getLastPositionOfTail();
    let playerPostion: Position = {
      xPosition: props.left,
      yPosition: props.top
    };

    var endOfPlayer: Position = tailLastPosition
      ? tailLastPosition
      : playerPostion;
    var positionToRender: Position = endOfPlayer;

    switch (props.currentDirection) {
      case Direction.Left:
        positionToRender.xPosition = positionToRender.xPosition - 16;
        break;
      case Direction.Up:
        positionToRender.yPosition = positionToRender.yPosition - 16;

        break;
      case Direction.Right:
        positionToRender.xPosition = positionToRender.xPosition + 16;

        break;
      case Direction.Down:
        positionToRender.yPosition = positionToRender.yPosition - 16;

        break;

      default:
        break;
    }
    return positionToRender;
  }

  function addToTail() {
    var render = whereToRenderTail();
    if (props.tail) {
      props.tail.parts.concat([render]);
    } else {
      props.tail = { parts: [render] };
    }
  }

  return (
    <>
      <div
        style={{ left: props.left, top: props.top }}
        className={style.player}
      ></div>
      {props.tail && <Tail parts={props.tail.parts}></Tail>}
    </>
  );
};

export default Player;
