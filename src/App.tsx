import React, { useState } from "react";
import "./App.css";
import Map from "./components/map/map";

interface IAppState {
  GameStart: boolean;
}

const App: React.FC = () => {
  const [gameStart, setGameStart] = useState(false);

  return (
    <div className="main-container">
      {!gameStart ? (
        <button onClick={() => setGameStart(true)} type="button">
          Start game
        </button>
      ) : (
        <Map></Map>
      )}
    </div>
  );
};

export default App;
