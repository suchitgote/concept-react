import { useState } from "react";

export default function App() {
    const [key, setKey] = useState(0);
    const [key2, setKey2] = useState(0);
  
    const forceReRender = () => {
      setKey((prevKey) => prevKey + 1);
    };
  
    const forceReRender2 = () => {
        setKey2((prevKey) => prevKey + 1);
      };
    
    return (


        
      <div>
        <MyComponent key={key} name={key2} />
        <button onClick={forceReRender}>Force Re-render</button>
        <button onClick={forceReRender2}>Force Re-render 2</button>
      </div>
    );
  }
  
  function MyComponent() {
    console.log('MyComponent');
    return <p>This component has been re-rendered!</p>;
  }
  