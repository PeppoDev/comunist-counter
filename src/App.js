import React from "react";
import "./App.css";
import Routes from "./routes";
import Bar from "./components/Bar";

function App() {
  return (
    <div className="App">
      <Bar></Bar>
      <div className="appcontent">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
