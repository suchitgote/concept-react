import { memo, useState } from "react"

const Parent = ()=>{
    console.log('Parent render');
    const [count1 , setCount1]= useState(0)
    const [count2 , setCount2]= useState(0)
    return(
        <div>
            <button onClick={()=>setCount1((p)=>p+1)} >increase count1 </button> <br></br>
            Parent : count1 : {count1}<br></br>
            <button onClick={()=>setCount2((p)=>p+1)} >increase count2 </button><br></br>
            {/* <Child count2={count2}  /> */}
            <MemoChild count2={count2}  />
        </div>
    )
}
const Child = ({count2})=>{
    console.log('Child render count2 =',count2);
    return(
        <div>
            Child : count2 : {count2}
        </div>
    )
}
const MemoChild = memo(Child)

const App = ()=>{
    return(
        <div>
            <Parent/>
        </div>
    )
}

export default App