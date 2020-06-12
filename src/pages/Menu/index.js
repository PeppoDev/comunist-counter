import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// import { Container } from './styles';

function Menu({ history }) {
  function handlePlay() {
    history.push("/game");
  }
  return (
    <>
      <ul className="menu-list">
        <li className="menu-item">
          <button onClick={handlePlay} className="menu-btn">
            Jogar
          </button>
        </li>
      </ul>
    </>
  );
}

export default Menu;
