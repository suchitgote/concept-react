import { useState } from "react"

const useToggle = (initialValue)=>{
    const [value , setValue] = useState(initialValue)
   const  updateToggle = ()=>{
        setValue (!value)
    }
    return [value , updateToggle]
}

const Toggle = ()=>{
    const [showPopup , setShowPopup] = useToggle(true)
    const [showPopup2 , setShowPopup2] = useToggle(true)
    return (
        <div>
            <button onClick={()=>setShowPopup()} >toggle popup</button>
            {showPopup && <p>popup</p>}
            <p>
                .........................
            </p>
            
            <button onClick={()=>setShowPopup2()} >toggle popup2</button>
            {showPopup2 && <p>popup 2</p>}
        </div>
    )
}

export default Toggle