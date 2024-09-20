// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard({ selectSqure, board }) {
  // let gameBoard = initialGameBoard;
  // for (const turn of turns) {
  //   const { squre, player } = turn;
  //   const { row, col } = squre;
  //   gameBoard[row][col] = player;
  // }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function hadleSectionSqure(rIndex, cIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // 1. Create a copy of the current game board using map
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     // 2. Set the selected square to "X"
  //     updatedBoard[rIndex][cIndex] = activePlayerSymbol;
  //     // 3. Return the updated board to update the state
  //     return updatedBoard;
  //   });

  //   selectSqure();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => selectSqure(rowIndex, columnIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
