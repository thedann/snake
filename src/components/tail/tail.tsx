import React from "react";
import style from "./tail.module.css";
import Position from "../../business/Position";

export interface ITail {
  parts?: Position[];
  // turningPoints?: Map<string, Direction>;
}

const Tail: React.FC<ITail> = (props: ITail) => {
  return (
    <>
      {props.parts &&
        props.parts.map((part: Position, index: number) => {
          return (
            <div key={index}
              style={{ left: part.xPosition, top: part.yPosition }}
              className={style.tail}
            ></div>
          );
        })}
    </>
  );
};

export default Tail;
