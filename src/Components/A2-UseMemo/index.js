// What is useMemo?
// useMemo is a React Hook that returns a memoized value. It only re-calculates the value
//  when one of its dependencies changes. This is particularly useful for optimizing 
//  performance in cases where a computation is costly or the result is needed across 
//  multiple renders without change.
 
 

import React, { useState, useMemo , memo, useEffect} from 'react';

const Child = ()=>{
  console.log('Child render');
  const [input , setInput] = useState('')
  const [input2 , setInput2] = useState('')

  const list = useMemo(()=>{
    console.log('filterList');
    const list =  [
      {name : 'suchit'},
      {name : 'gote'},
      {name : 'hari'},
      {name : 'naman'},
      {name : 'toni'},
    ]
  
    const filterList = list.filter((item)=>{return item.name.includes(input)  })
    return filterList
  },[input])

  return (
    <div>
      <p>fetchChild : {input}</p>

      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} ></input>
      <input type='text' value={input2} onChange={(e)=>setInput2(e.target.value)} ></input>
      {
        list.map((item)=>{
          return(
            <div key={item.name} >
              <p>{item.name}</p>
            </div>
          )
        })
      }
    </div>
  )

}

const MomeChild = memo(Child)

const App = () => {
  const [count  , setCount] = useState(0);
  return (
    <div>
      count : {count}
      <button onClick={()=>setCount(count + 1)} >Increase</button>
      <MomeChild />
    </div>
  );
};



export default App;
