import React from "react";
import style from "./scoreBoard.module.css";
import { useScore } from "../../context";

const ScoreBoard: React.FC = () => {
  const { score } = useScore();

  return (
    <div className={style.scoreboard}>
      <div className={style.header}>React Snake Game</div>
      <div className={style.counter}>
        <span> {score}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;

// export const ScoreView = () => {
//   const store = React.useContext(storeContext);
//   if (!store) throw Error("Store shouldn't be null");
//   return useObserver(() => {
//     return <ScoreBoard points={store.getCurrentScore} />;
//   });
// };

//export default ScoreBoard;
