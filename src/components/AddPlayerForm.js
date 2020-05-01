import React, { useState } from "react";

export default function AddPlayerForm() {
  const [name, set_name] = useState();
  return (
    <div className="AddPlayerForm">
      <p>
        {" "}
        New player: {""}
        <input
          type="text"
          placeholder="new player name"
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
            console.log("new input:", event.target.value);
          }}
        />
        {""}
        <button>Add</button>
      </p>
    </div>
  );
}
