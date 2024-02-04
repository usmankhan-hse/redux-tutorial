import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "./counterSlice";

const ReverseCounter = () => {
  const dispatch = useDispatch();

  return (
    <div className="ReverseCounter">
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default ReverseCounter;
