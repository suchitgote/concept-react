import {useState} from "react"

const Counter = ()=>{
    const [count , setCount ] = useState(0)
    
    return (
        <div style={{ backgroundColor: "blue", padding: 10 }}>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)} >add</button>
        </div>
    )
}


export default Counter ;