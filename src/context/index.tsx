import React, { useState, useContext, useEffect } from "react";

/*
  TODO: add playerState to the context. 
  ScoreContext -> something better naming
*/

type Data = {
  score: number;
  setScore: (score: number) => void;
  scoreList: string[];
  setScoreList: (scoreList: string[]) => void;
};

const ScoreContext = React.createContext<Data>({
  score: 0,
  setScore: () => {},
  scoreList: [''],
  setScoreList: () => {},
});

const ScoreProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [scoreList, setScoreList] = useState<string[]>([]);
  

  return (
    <ScoreContext.Provider value={{ score, setScore, scoreList, setScoreList}}>
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
