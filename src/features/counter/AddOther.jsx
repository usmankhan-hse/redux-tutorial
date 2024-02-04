import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOther } from "./counterSlice";

const AddOther = () => {
  const [added, setAdded] = useState(0);
  const dispatch = useDispatch();
  const sendAddOtherHandler = (e) => {
    e.preventDefault();
    dispatch(addOther(added));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setAdded(Number(e.target.value))} />
      <br></br>
      <button type="submit" onClick={sendAddOtherHandler}>
        Submit
      </button>
    </div>
  );
};

export default AddOther;
