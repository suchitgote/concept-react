// import { useEffect, useRef, useState } from "react"
// import useDebounce from "./useDebounce"

// const Debounce = ()=>{
//     console.log('componenet render');

//     const [count , setCount] = useState(0)
//     const newCount = useDebounce(count,1000)
    
//     const inputRef = useRef('')
//     const [input , setInput] = useState('')
//     const newInput = useDebounce(input,1000)

//     const [callinputApi , setCallinputApi] = useState(false)
 
//     useEffect(()=>{
//         console.log('updateCount',count,newCount);
//     },[newCount])

//     useEffect(()=>{
//         console.log('do some task with new Input value',newInput);
//         setCallinputApi(true)
//     },[newInput])

 
 

//     return(
//         <div>
//             <button onClick={()=>setCount((c)=>c+1)} > increase count</button>
//             <p>  count : {count} </p>

//             <p>  ................................. </p>
//             <input type="text" value={input} onChange={(e)=>{setInput(e.target.value);setCallinputApi(false)}} ></input>
//             <p>  input : {input} </p>

//             {callinputApi && <p>callinputApi : {input}</p>}

//         </div>
//     )
// }

// export default Debounce













import { useEffect, useState } from "react"

const useDebounce = (value, delay)=>{
    const [finalvalue ,setFinalvalue] = useState('')
    
    useEffect(()=>{
        const timeOut = setTimeout(() => {
            console.log('return last value after 3 sec ');
            setFinalvalue(value)
        }, delay);

        return ()=>{
            clearTimeout(timeOut)
        }
    },[value])
    return finalvalue
}

const App = ()=>{
    const [input ,setInput] = useState('')
    const lastInput = useDebounce(input,1000)
    useEffect(()=>{
        console.log('do something with',lastInput);
    },[lastInput])

    const [input2 ,setInput2] = useState('')
    const lastInput2 = useDebounce(input2,1000)
    useEffect(()=>{
        console.log('do something 2 with', lastInput2);
    },[lastInput2])


    return (
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  ></input>
            <input type="text" value={input2} onChange={(e)=>setInput2(e.target.value)}  ></input>
        </div>
    )
}

export default App