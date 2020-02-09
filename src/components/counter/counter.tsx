import React from "react";
import style from "./counter.module.css";

interface ICounter {
  number: number;
}

const Counter: React.FC<ICounter> = (props: ICounter) => {
  return <span className={style.counter}>{props.number}</span>;
};

export default Counter;
