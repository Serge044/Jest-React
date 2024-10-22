import React from "react";
import { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <>
      <h1 data-testid="count">{count}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          restart();
        }}
      >
        Restart
      </button>
      <button
        onClick={() => {
          switchSigns();
        }}
      >
        Switch Signs
      </button>
    </>
  );
}

export default Counter;
