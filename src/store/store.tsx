import { observable } from "mobx";

export const createStore = () => {
  const store = {
    score: observable.box(0),
    setScore(score: number) {
      store.score.set(score);
    },
    get getCurrentScore() {
      return store.score.get();
    }
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;
