import React, { useState, useEffect } from "react";
import GameList from "../../components/GameList";
import "./styles.css";

function Game({ history }) {
  const [countPlayers, setCountPlayers] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [playersList, setPlayersList] = useState([]);

  var players = [];

  useEffect(() => {
    for (var i = 0; i < countPlayers; i++) {
      players.push({
        id: i + 1,
        balance: 1000,
      });
    }
    setPlayersList(players);
  }, [showGame]);

  function handleGame() {
    if (!(countPlayers > 8 || countPlayers <= 0)) {
      setShowGame(true);
    } else {
      setCountPlayers(0);
    }
  }
  return (
    <>
      {!showGame ? (
        <div className="menu-settings">
          <label htmlFor="password">Número de Players:</label>
          <input
            type="number"
            className="input-nplayers"
            value={countPlayers}
            onChange={(e) => setCountPlayers(e.target.value)}
          />
          <button onClick={handleGame} className="btn-menu">
            Iniciar
          </button>
        </div>
      ) : null}

      {showGame ? (
        <div className="game-container">
          <ul className="playerlist">
            {playersList.map((player) => {
              return <GameList key={player.id} player={player} />;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Game;
