import React, { FC } from "react";
import style from "./controller.module.css";

const Controller: FC = () => {
  return (
    <div className={style.controller}>
      <div
        // onClick={() => moveWithButtons(Direction.Left)}
        className={style.left}
      ></div>
      <div
        // onClick={() => moveWithButtons(Direction.Up)}
        className={style.top}
      ></div>
      <div
        // onClick={() => moveWithButtons(Direction.Right)}
        className={style.right}
      ></div>
      <div
        // onClick={() => moveWithButtons(Direction.Down)}
        className={style.bottom}
      ></div>
    </div>
  );
};

export default Controller;
