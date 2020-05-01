import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("Set player name");

  function addPlayerSubmit(event) {
    event.preventDefault();
    props.addNewPlayer(name);
    console.log(name);
  }
  return (
    <form onSubmit={addPlayerSubmit}>
      <label>name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          set_name(event.target.value);
          console.log("new input:", event.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
}
