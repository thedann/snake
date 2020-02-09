import React from "react";
import style from "./scoreBoard.module.css";
import { useScore } from "../../context";
import Counter from "../counter/counter";

const ScoreBoard: React.FC = () => {
  const { score } = useScore();

  return (
    <div className={style.scoreboard}>
      <div className={style.header}>React Snake Game</div>
      <div className={style.counter}>
        <Counter number={score}></Counter>
      </div>
    </div>
  );
};

export default ScoreBoard;
