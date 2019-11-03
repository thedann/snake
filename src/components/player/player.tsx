import React, { useState } from "react";
import style from "./player.module.css";
import Tail, { ITail } from "../tail/tail";
import Direction from "../../business/Direction";

interface IPlayer {
  left: number;
  top: number;
  currentDirection: Direction;
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
