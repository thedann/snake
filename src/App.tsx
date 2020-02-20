import React, { useState, useContext } from "react";
import "./App.css";
import Map from "./components/map/map";
import ScoreBoard from "./components/scoreboard/scoreBoard";
import StartMenu from "./components/startmenu/startmenu";
import { ScoreProvider } from "./context";
import fire from "./fire";

interface IAppState {
  GameStart: boolean;
}

const App: React.FC = () => {
  const [gameStart, setGameStart] = useState(false);


  return (
    <ScoreProvider>
      <div className="main-container">
        {!gameStart ? (
          <StartMenu startGameCallback={setGameStart}></StartMenu>
        ) : (
          <>
            <Map></Map>
            <ScoreBoard></ScoreBoard>
          </>
        )}
      </div>
    </ScoreProvider>
  );
};

export default App;
