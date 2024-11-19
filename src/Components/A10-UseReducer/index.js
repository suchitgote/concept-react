import { useReducer } from "react";
import Reducer from "./reducer";
import Child from "./Child";
const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, { count: 0 });
  return (
    <div style={{ backgroundColor: "skyblue", padding: 10 }}>
      UseReducer
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
      <button onClick={() => dispatch({ type: "dec" })}>dec</button>
      <Child/>
    </div>
  );
};

export default UseReducer;
