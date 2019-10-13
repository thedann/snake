import React from "react";
import style from "./snack.module.css";

interface ISnack {
  left: number;
  top: number;
}

const Snack: React.FC<ISnack> = (props: ISnack) => {
  return (
    <div
      style={{ left: props.left, top: props.top }}
      className={style.snack}
    ></div>
  );
};

export default Snack;
