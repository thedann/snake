import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Map from "./components/map/map";
import ScoreBoard from "./components/scoreboard/scoreBoard";
import StartMenu from "./components/startmenu/startmenu";
import { ScoreProvider, useScore } from "./context";
import fire from "./fire";
import Controller from "./components/controller/controller";

const App: React.FC = () => {
  const [gameStart, setGameStart] = useState(false);
  const [scoreList, setScoreList] = useState(['']);
  const [renderScoreBoard, setRenderScoreBoard] = useState(false);

  //const { score, setScoreList } = useScore();


  useEffect(() => {
    var list:any[] = [];
    var ref = fire.database().ref("highscore/");

    var query = ref.orderByChild("score").limitToLast(3);

    query.on("child_added", (snapshot) => {
      list.unshift(snapshot.val());
    });
    setScoreList(list);
  }, [gameStart]);

  useEffect(() => {
    if(scoreList.length > 0) {
      setRenderScoreBoard(true);
    }

  }, [scoreList])

  return (
    <ScoreProvider>
      <div className="main-container">
        {!gameStart ? (
          <StartMenu startGameCallback={setGameStart}></StartMenu>
        ) : (
          <>
            <Map></Map>
            <Controller></Controller>
            {
              renderScoreBoard &&
              <ScoreBoard scoreList={scoreList}></ScoreBoard>
            }

          </>
        )}
      </div>
    </ScoreProvider>
  );
};

export default App;
