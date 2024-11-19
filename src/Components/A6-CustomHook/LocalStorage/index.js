import { useEffect, useState } from "react"


const useGetSetLocalStorage = (key,initialValue)=>{
    const [value , setValue] = useState(initialValue)
    useEffect(()=>{
        try {
            const saveInput = JSON.parse(localStorage.getItem(key))
            if(saveInput){
                setValue(saveInput)
            }
        } catch (error) {
            const saveInput = localStorage.getItem(key)
            if(saveInput){
                setValue(saveInput)
            }
        }
    },[])
    
    const saveInputInLocalStorage = (value)=>{
        setValue(value)
        localStorage.setItem(key,JSON.stringify( value ))
    }

    return [ value  , saveInputInLocalStorage]
}


const App = ()=>{
    const [ input1  , saveInputInLocalStorage1 ] = useGetSetLocalStorage('input', '')
    const [ input2  , saveInputInLocalStorage2 ] = useGetSetLocalStorage('input2', '')
    const [ todos  , storeTodos ] = useGetSetLocalStorage('todos', [])

    const saveTodos = ()=>{
        storeTodos(
            [
                {
                    name : 'suchit'
                },
                {
                    name : 'gote'
                }
            ]
        )
    }

    return(
        <div>
            <button onClick={()=>saveTodos()}  >save todos</button>
            {
                todos && 
               <h4>{ JSON.stringify( todos )}</h4>
            }
            <input type="text" value={input1} onChange={(e)=>saveInputInLocalStorage1(e.target.value)} ></input>
            <input type="text" value={input2} onChange={(e)=>saveInputInLocalStorage2(e.target.value)} ></input>
        </div>
    )
}

export default App