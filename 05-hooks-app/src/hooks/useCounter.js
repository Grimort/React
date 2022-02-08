import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);
  const increase = (factor = 1) => {
    setState(state + factor);
  };
  const decrease = (factor = 1) => {
    setState(state - factor);
  };

  const reset = () => {
    setState(initialState);
  };
  return { state, increase, decrease, reset };
};
