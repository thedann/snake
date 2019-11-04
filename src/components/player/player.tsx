import React, { useState } from "react";
import style from "./player.module.css";
import Tail, { ITail } from "../tail/tail";
import Direction from "../../business/Direction";

interface IPlayer {
  left: number;
  top: number;
  currentDirection: Direction;
}
const Player: React.FC<IPlayer> = (props: IPlayer) => {
  const [playerXPosition, setPlayerXPosition] = useState(props.left);
  const [playerYPosition, setPlayerYPostion] = useState(props.top);

  return (
    <>
      <div
        style={{ left: props.left, top: props.top }}
        className={style.player}
      ></div>
    </>
  );
};

export default Player;
