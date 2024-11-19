import { memo, useMemo, useState } from "react";

const Child = ({list})=>{
    console.log('Child list',list);
    return(
        <div>
            Child
        </div>
    )
}

const MemoChild = memo(Child) 
const Parent = ()=>{
    const [input1 , setInput1] = useState('')
    const [input2 , setInput2] = useState('')
    
    const getList  = useMemo(()=>{
        // big calculation...
        return [1,2,3,4,5]
    },[input2])

    return(
        <div>
            <input type="text" value={input1} onChange={(e)=>setInput1(e.target.value)} ></input>
            <input type="text" value={input2} onChange={(e)=>setInput2(e.target.value)} ></input>
            <MemoChild  list={getList} />
        </div>
    )
}

const App = ()=>{
    return(
        <div>
            <Parent />
        </div>
    )
}

export default App