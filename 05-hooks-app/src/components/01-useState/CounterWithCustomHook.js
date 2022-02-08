import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  // const [state, setState] = useState({
  //   counter1: 0,
  //   counter2: 10,
  // });
  const { state, increase, decrease, reset } = useCounter();
  return (
    <>
      <h1> Counter with hook {state}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increase(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrease(2)}>
        -1
      </button>
    </>
  );
};
