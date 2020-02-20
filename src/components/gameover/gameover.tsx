import React, { useState } from "react";
import style from "./gameover.module.css";
import fire from "../../fire";

interface IGameOver {
  points: number;
}

const GameOver: React.FC<IGameOver> = (props: IGameOver) => {
  const [nickname, setNickname] = useState('');

  let timestamp = Date.now();

  const pointsText = () => {
    if (props.points === 1) {
      return "You got " + props.points + " point";
    } else {
      return "You got " + props.points + " points";
    }
  };

  function sendPoints () {
    fire.database().ref('highscore/' + timestamp).set({
      score: props.points,
      nickname: nickname
    },() => {
      window.location.reload();
    }
    );
  }

  return (
    <div className={style.gameover}>
      <h1>Game over!</h1>
      <h3>{pointsText()}</h3>
      <input type="text" 
        value={nickname} 
        onChange={e => setNickname(e.target.value)}
        className={style.textinput}
        placeholder="enter your nickname" maxLength={3} minLength={1}>
        
        </input>
      <button className={style.submitbutton} onClick={() => sendPoints()} >Submit your score</button>
    </div>
  );
};

export default GameOver;
