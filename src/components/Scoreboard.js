import React from "react";
import Player from "./Player";

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <ul>
        <Player name="Djimo" score="26" />
        <Player name="Jolien" score="9" />
        <Player name="Kelsey" score="88" />
        <Player name="Boy" score="37" />
      </ul>
    </div>
  );
}
