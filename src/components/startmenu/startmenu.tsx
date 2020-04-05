import React from "react";
import style from "./startmenu.module.css";

interface IStartMenu {
  startGameCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartMenu: React.FC<IStartMenu> = (props: IStartMenu) => {

  return (
    <div className={style.startmenu}>
      <button
        className={style.startbutton}
        onClick={() => props.startGameCallback(true) }
        type="button"
      >
        Start game
      </button>
    </div>
  );
};

export default StartMenu;
