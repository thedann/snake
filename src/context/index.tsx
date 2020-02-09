import React, { useState, useContext } from "react";

/*
  TODO: add playerState to the context. 
  ScoreContext -> something better naming
*/

type Data = {
  score: number;
  setScore: (score: number) => void;
};

const ScoreContext = React.createContext<Data>({
  score: 0,
  setScore: () => {}
});

const ScoreProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

const useScore = () => {
  const context = useContext(ScoreContext);

  if (!context) {
    throw new Error("Wrap component in ScoreProvider ");
  }

  return context;
};

export { ScoreProvider, useScore };
