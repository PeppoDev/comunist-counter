import React, { useEffect, useState } from "react";

import "./styles.css";

function GameList({ player }) {
  const [thisplayer, SetThisPlayer] = useState(player);
  const [newbalance, SetNewbalance] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {}, [thisplayer]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePlus = () => {
    const newvalue = thisplayer;
    newvalue.balance = newvalue.balance + parseInt(newbalance);
    SetThisPlayer(newvalue);
    SetNewbalance(0);
    handleShow();
  };

  const handleMinus = () => {
    const newvalue = thisplayer;
    newvalue.balance = newvalue.balance - parseInt(newbalance);
    SetThisPlayer(newvalue);
    SetNewbalance(0);
    handleShow();
  };
  return (
    <>
      <li className="player-token">
        <div className="main-game">
          <p className="player-id">Player {thisplayer.id}</p>
          <p className="player-balance">
            Saldo: <span>{thisplayer.balance}</span>
          </p>
        </div>
        <button onClick={handlePlus} className="plus">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            className="svg-inline--fa fa-plus fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
        </button>
        <input
          className="input-value"
          type="number"
          className="number-list"
          value={newbalance}
          onChange={(e) => SetNewbalance(e.target.value)}
        />
        <button onClick={handleMinus} className="minus">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="minus"
            className="svg-inline--fa fa-minus fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
        </button>
      </li>
    </>
  );
}

export default GameList;
