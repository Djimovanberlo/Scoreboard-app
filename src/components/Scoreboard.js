import React, { useState } from "react";
import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

// this shit compares either -1, 0 or 1 based on alphabet. When used as callback into .sort, this value somehow orders string elements in array
// // below code works basically the same way (commented out)

// function compare_name(player_a, player_b) {
//   if (player_a.name < player_b.name) {
//     return -1;
//   } else if (player_a.name > player_b.name) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Djimo", score: 37 },
    { id: 2, name: "Jolien", score: 100 },
    { id: 3, name: "Kelsey", score: 78 },
    { id: 4, name: "Boy", score: 73 },
  ]);

  const [sort_by, set_sort_by] = useState("score");

  function change_sorting(event) {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  }

  function incrementScore(id, changeBy) {
    console.log("ID:", id, "CHANGEBY: ", changeBy);
    const new_players_array = players.map((player) => {
      console.log(player, id);
      if (player.id === id) {
        return {
          id: player.id,
          name: player.name,
          score: player.score + changeBy,
        };
      }
      return player;
    });
    console.log(new_players_array);
    set_players(new_players_array);
  }

  const players_sorted = [...players];
  // copy players[] array into a new array, to avoid repetition. .Map, or other methods
  // will get messy if you use the original players[] array

  // below are three ways to sort: sort by name through if...else; sort by name through localeCompare
  // read above functions for reference.
  // two of these .sorts() are currently commented out for cleanliness

  if (sort_by === "name") {
    players_sorted.sort(compare_name);
  } else if (sort_by === "score") {
    players_sorted.sort(compare_score);
  }

  const newArray = players_sorted.map((player) => (
    <Player
      key={player.id}
      id={player.id}
      name={player.name}
      score={player.score}
      incrementScore={incrementScore} // note the absence of player.incrementScore!
    />
  ));

  return (
    <div>
      <div className="Scoreboard">{newArray}</div>
      <div>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>{" "}
      </div>
    </div>
  );
}
