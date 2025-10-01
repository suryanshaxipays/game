import React, { createContext } from "react";
import { games } from "../data/games";

// Create the context
export const GameContext = createContext();

const Game_data_context = ({ children }) => {
  return (
    <GameContext.Provider value={{ games }}>
      {children}
    </GameContext.Provider>
  );
};

export default Game_data_context;
