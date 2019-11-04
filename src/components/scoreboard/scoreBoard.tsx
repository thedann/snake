import React, { useState } from "react";
import style from "./scoreBoard.module.css";

interface IScoreBoard {
  points: number;
}

const ScoreBoard: React.FC<IScoreBoard> = (props: IScoreBoard) => {
  return (
    <div className={style.scoreboard}>
      <span>{props.points}</span>
    </div>
  );
};

export default ScoreBoard;
