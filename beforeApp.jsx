import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";

function App() {
  const [gameTurn, setGameTurn] = useState([]); //use derived State
  const [activePlayer, setActivePlayer] = useState("X"); //use  Lifting State Up

  function hadleSelectSqure(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurn = [
        { squre: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          selectSqure={hadleSelectSqure}
          // activePlayerSymbol={activePlayer}
          turns={gameTurn}
        />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
