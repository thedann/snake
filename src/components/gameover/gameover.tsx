import React from "react";
import style from "./gameover.module.css";

interface IGameOver {
  points: number;
}

const GameOver: React.FC<IGameOver> = (props: IGameOver) => {
  const pointsText = () => {
    if (props.points === 1) {
      return "You got " + props.points + " point";
    } else {
      return "You got " + props.points + " points";
    }
  };

  return (
    <div className={style.gameover}>
      <h1>Game over!</h1>
      <h3>{pointsText()}</h3>
    </div>
  );
};

export default GameOver;
