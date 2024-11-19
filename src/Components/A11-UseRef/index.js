import { useState , useRef, useEffect } from "react";

const UseRef = () => {
    const [text ,setText] = useState('')
    const inputval = useRef()
    const compRender = useRef(0)

    useEffect(()=>{
        inputval.current.focus()
    },[])

    useEffect(()=>{
        compRender.current = compRender.current + 1
    })


    return (
    <div style={{ backgroundColor: "blue", padding: 10 }}>
      <p>
      UseRef
      </p>
      <input ref={inputval} type="text" onChange={(e)=>{setText(e.target.value)}} />
      <p>text : {text}</p>
      <p>compRender : {compRender.current}</p>

    </div>
    );
  };
  
  export default UseRef;
  