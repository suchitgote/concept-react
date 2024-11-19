// We use Cleanup Function to avoid memory leaks

// When to Use the Cleanup Function:

//1. Removing eventListeners: 
// If your effect adds event listeners, you should remove them in the cleanup function.

//2. Clearing Timers: 
// If your effect sets up a timer (e.g., using setTimeout or setInterval), you should clear it in the cleanup function to avoid it running after the component has unmounted.

//3. Abort Fetch Requests: 
// If your effect makes a fetch request, you might want to abort it in the cleanup function to prevent trying to update state on an unmounted component.






import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(()=>{
    const timerIntervel = setInterval(()=>{
      console.log('setInterval call seconds',seconds);
      setSeconds((p)=>p > 0 ? p - 1 : 0)
    },[1000])

    // return(()=>{
    //   clearInterval(timerIntervel)
    // })
  },[])

  return (
    <div>
      <h2 >Time Remaining: {seconds} seconds</h2>
     </div>
  );
};

const App = ()=>{
  const [show , setShow] = useState(true)

  return(
    <div>
      <button onClick={()=>setShow(!show)} >toggle</button>

      {show && <CountdownTimer  initialSeconds={initialSeconds} />}
    </div>
  )
}
export default App;
