import React from "react";

export default function Player(props) {
  function onClickIncrement() {
    console.log("+1");
    props.incrementScore(props.id, 1);
  }
  function onClickDecrement() {
    console.log("-1");
    props.incrementScore(props.id, -1);
  }
  function onClickReset() {
    console.log("reset!");
    props.incrementScore(props.id, -props.score);
  }

  return (
    <div>
      <li className="Player">
        {props.name} - score: {props.score} {props.incrementScore}
        <button onClick={onClickIncrement}>+1</button>
        <button onClick={onClickDecrement}>-1</button>
        <button onClick={onClickReset}>Reset</button>
      </li>
    </div>
  );
}
