import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";

const AddCounter = () => {
  const dispatch = useDispatch();
  return (
    <div className="AddCounter">
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default AddCounter;
