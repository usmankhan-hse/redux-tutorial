import React from "react";
import Counter from "./features/counter/Counter";
import AddCounter from "./features/counter/AddCounter";
import ReverseCounter from "./features/counter/ReverseCounter";
import AddOther from "./features/counter/AddOther";

function App() {
  return (
    <div className="App">
      <Counter />
      <AddCounter />
      <ReverseCounter />
      <AddOther />
    </div>
  );
}

export default App;
