import React, { useState, useEffect } from "react";
import style from "./scoreBoard.module.css";
import { useScore } from "../../context";
import Counter from "../counter/counter";

interface IScoreBoard {
  scoreList?: string[];
}

const ScoreBoard: React.FC<IScoreBoard> = (props: IScoreBoard) => {
  const { score } = useScore();

  function getEmoji(index:number) {
    var emoji = "";
    switch (index) {
      case 0:
        emoji = "👑"
        break;
      case 1:
        emoji = "🥈"
       break;
       case 2:
         emoji = "🥉"
         break;

      default:
        break;
    }
    return emoji;
  }


  return (
    <div className={style.scoreboard}>
      <div className={style.header}>React Snake Game</div>
      <div className={style.counter}>
        <Counter number={score}></Counter>
      </div>
      <div>
        <ul>
          {props && props.scoreList && props.scoreList.map((item: any, index: number) => {
            return (
              
              <li key={index}>
                { getEmoji(index) }
                
                 {item.nickname} : {item.score}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ScoreBoard;
