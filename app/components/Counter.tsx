"use client";

import { useState } from "react";

import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <Button incrementCounter={incrementCounter} />
    </div>
  );
};

export default Counter;
