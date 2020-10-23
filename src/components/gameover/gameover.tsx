import React, { useState } from "react";
import style from "./gameover.module.css";
import fire from "../../fire";
import { useScore } from "../../context";

interface IGameOver {
  points: number;
}

const GameOver: React.FC<IGameOver> = (props: IGameOver) => {
  const [nickname, setNickname] = useState('');
  const { score } = useScore();


  let timestamp = Date.now();

  const pointsText = () => {
    if (score === 1) {
      return "You got " + score + " point";
    } else {
      return "You got " + score + " points";
    }
  };

  function sendPoints () {
    fire.database().ref('highscore/' + timestamp).set({
      score: score,
      nickname: nickname.toUpperCase()
    },() => {
      window.location.reload();
    }
    );
  }

  function reloadGame() {
    window.location.reload();
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

      <button className={style.submitbutton} onClick={() => reloadGame()} >Reload game</button>

    </div>
  );
};

export default GameOver;
