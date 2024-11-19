import { useReducer } from "react";
import Reducer from "./reducer";

const Child = ()=>{
  const [state, dispatch] = useReducer(Reducer, { count: 0 });

    return (
        <div style={{ backgroundColor: "blue", padding: 10 }}>
      
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "inc" })}>inc</button>
        <button onClick={() => dispatch({ type: "dec" })}>dec</button>
       
      </div>
    )
 }

 export default Child ;