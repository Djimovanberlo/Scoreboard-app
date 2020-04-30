import React from "react";

export default function Player(props) {
  return (
    <li className="Player">
      {props.name} - score: {props.score}
    </li>
  );
}
