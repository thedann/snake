import React, { useState, useContext } from "react";
import "./App.css";
import Map from "./components/map/map";
import ScoreBoard, { ScoreView } from "./components/scoreboard/scoreBoard";
import StoreProvider from "./context/context";

interface IAppState {
  GameStart: boolean;
}

const App: React.FC = () => {
  const [gameStart, setGameStart] = useState(false);
  const [currentPoints, setCurrentPoints] = useState(0);
  const context = React.createContext(currentPoints);

  return (
    <StoreProvider>
      <div className="main-container">
        {!gameStart ? (
          <button onClick={() => setGameStart(true)} type="button">
            Start game
          </button>
        ) : (
          <Map currentPoints={currentPoints}></Map>
        )}
        <ScoreView></ScoreView>
      </div>
    </StoreProvider>
  );
};

export default App;
