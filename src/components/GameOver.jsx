export default function GameOver({ winner, btn }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's a Draw!</p>}

      <p>
        <button onClick={btn}>Rematch!</button>
      </p>
    </div>
  );
}
