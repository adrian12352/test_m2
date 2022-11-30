import React from "react";

export default function Species(props) {
  return (
    <div>
      <h2>Species</h2>
      {props.species.map((el, idx) => (
        <button key={idx} onClick={props.handleSpecies} value={el}>
          {el}
        </button>
      ))}
    </div>
  );
}
