import React, { useState } from "react";
import style from "./scoreBoard.module.css";
import { useObserver } from "mobx-react-lite";
import { storeContext } from "../../context/context";

interface IScoreBoard {
  points: number;
}

export const ScoreBoard: React.FC<IScoreBoard> = ({ points }) => {
  return (
    <div className={style.scoreboard}>
      <div className={style.header}>React Snake Game</div>
      <div className={style.counter}>
        <span> {points}</span>
      </div>
    </div>
  );
};

export const ScoreView = () => {
  const store = React.useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");
  return useObserver(() => {
    return <ScoreBoard points={store.getCurrentScore} />;
  });
};

export default ScoreView;

//export default ScoreBoard;
