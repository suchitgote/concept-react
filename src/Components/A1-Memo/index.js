// In React, memo is a higher-order component (HOC) used to optimize the performance of
//  functional components. It works by preventing unnecessary re-renders of a component 
// when its props haven't changed

// React.memo is a function that takes a component and returns a new component that only 
// re-renders if its props change.

import { useState ,memo} from "react";


const Parent = () => {
  console.log('Parent render');
  
  const [number , setNumber ] = useState(0)
  const [number2 , setNumber2 ] = useState(0)

  return (
    <div>
      <h1>Parent Component : {number}</h1>
      {/* <MemoizedChild /> */}
      <MemoizedChild number={number}/>
      <button onClick={()=>setNumber(number + 1)} >inc Number </button>
      <button onClick={()=>setNumber2(number2 + 1)} >inc Number 2 </button>
    </div>
  );
};


const Child = () => {
  console.log('Child render');
  return (
    <div>
      <h1>Child Component </h1>
    </div>
  );
};

const MemoizedChild = memo(Child)

const Memo = () => {
  return (
    <div>
      <h1>Memo Component</h1>
      <Parent />
    </div>
  );
};

export default Memo;
