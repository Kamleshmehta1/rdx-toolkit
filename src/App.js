import React from "react";
import { actions } from "./store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(actions.increment())}>INCREMENT</button>
      <button onClick={() => dispatch(actions.derement())}>DECREMENT</button>
      <button onClick={() => dispatch(actions.addBy(10))}>ADD</button>
    </div>
  );
}

export default App;
