import { useState } from "react";

const Throttling = () => {
    const [input, setInput] = useState('')
    const [count, setCount] = useState(0)
    const [update, setUpdate] = useState(true)

    const updateInput = (e) => {
        setInput(e.target.value)
        if (update) {
            setCount((p) => p + 1)
            setUpdate(false)

            setTimeout(() => {
                setUpdate(true)
            }, 1000);
        }
    }

    return (
        <div>

            Throttling
            <input type='text' value={input} onChange={(e) => { updateInput(e) }} />
            {input}
            <p>count : {count}</p>
        </div>)
};

export default Throttling 