import React, { useState } from "react";
import style from "./scoreBoard.module.css";
import { useScore } from "../../context";
import Counter from "../counter/counter";
import fire from "../../fire";
import { render } from "react-dom";

const ScoreBoard: React.FC = () => {
  const { score } = useScore();
  const [scoreList, setScoreList] = useState(['']);


  function renderHighscore () {
    var list:any[] = [];
    var ref = fire.database().ref("highscore/");
    ref.orderByChild("score").limitToLast(3).on("child_added", (snapshot) => {
      console.log(snapshot.val());
      list.unshift(snapshot.val());
    });
    setScoreList(list);
  }
  if(setScoreList.length < 3) {
    renderHighscore();
  }

  return (
    <div className={style.scoreboard}>
      <div className={style.header}>React Snake Game</div>
      <div className={style.counter}>
        <Counter number={score}></Counter>
      </div>
      <div>
      <ul>
        {scoreList.map((item:any) => {
        return (
          <li>{item.nickname} : {item.score}</li>
        )
        })}
    </ul>
      </div>
    </div>
  );
};

export default ScoreBoard;
