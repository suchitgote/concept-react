import { useEffect, useState } from "react"

const useDebounce = (value,delay)=>{
    console.log('useDebounce render with value= ', value);

    const [finalvalue , setFinalvalue] = useState(value)

    useEffect(()=>{
        console.log('useEffect with value =', value);
       const updatefinalvalue = setTimeout(()=>{
            setFinalvalue(value)
        },delay)
 
        return ()=>{
            clearTimeout(updatefinalvalue)
        }
    },[value])

    return finalvalue
}

export default useDebounce