import React, { useState } from "react";
import Player from "./Player";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Djimo", score: 37 },
    { id: 2, name: "Jolien", score: 100 },
    { id: 3, name: "Kelsey", score: 78 },
    { id: 4, name: "Boy", score: 73 },
  ]);

  const newArray = players.map((player) => (
    <Player id={player.id} name={player.name} score={player.score} />
  ));

  return <div className="Scoreboard">{newArray}</div>;
}
