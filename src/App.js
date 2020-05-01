import React from "react";
import Scoreboard from "./components/Scoreboard";
import AddPlayerForm from "./components/AddPlayerForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Scoreboard Lyfe</h1>
      <main>
        <Scoreboard />
        <AddPlayerForm />
      </main>
    </div>
  );
}

export default App;
