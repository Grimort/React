import React, { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 0,
    counter2: 10,
  });

  const { counter1, counter2 } = state;
  return (
    <>
      <h1> Counter 1 {counter1}</h1>
      <h1> Counter 2 {counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setState(...state, counter1 + 1);
        }}
      >
        +1
      </button>
    </>
  );
};
