import React, { useEffect, useState } from 'react';

const EventListenerExample = () => {
  useEffect(() => {
    console.log('useEffect')
    // Define a handler function
    const handleResize = () => {
      console.log('Window resized:', window.innerWidth, window.innerHeight);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Cleanup function: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>Resize the window and check the console for dimensions.</h1>
    </div>
  );
};

// export default EventListenerExample;


const App = ()=>{
  const [show , setShow] = useState(true)

  return(
    <div>
      <button onClick={()=>setShow(!show)} >toggle</button>

      {show && <EventListenerExample  />}
    </div>
  )
}
export default App;