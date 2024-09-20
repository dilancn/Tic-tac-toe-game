import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function hadleEditClick() {
    setIsEditing((edit) => !edit);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function hadleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName} </span>;

  if (isEditing) {
    editablePlayerName = (
      <input type={"text"} required value={playerName} onChange={hadleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={hadleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
