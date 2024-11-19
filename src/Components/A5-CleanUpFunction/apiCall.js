// 3. Avoiding Long-Lived Closures
// Solution:
// Using a flag (isMounted) ensures that the asynchronous operation doesn't attempt to update state after the component has unmounted, preventing memory leaks.

import React, { useState, useEffect } from "react";

const AsyncComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    // const timeOut = setTimeout(()=>{
    //   console.log('setTimeout call isMounted =',isMounted );
    //   if (isMounted) {
    //     console.log('data fetch successfully' );
    //     setData('data fetch'); // Only set state if the component is still mounted
    //   }
    // },5000)

    // return () => {
    //   // clearTimeout(timeOut)
    // };


    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((result) => {
        console.log("fetch call isMounted =", isMounted);
        if (isMounted) {
          console.log("data fetch successfully result =", result);
          setData("data fetch"); // Only set state if the component is still mounted
        }
      });

    return () => {
      isMounted = false; // Cleanup flag when component unmounts
    };
    
  }, []);

  return <div>{data ? `Data: ${data}` : "Loading..."}</div>;
};

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>

      {show && <AsyncComponent />}
    </div>
  );
};
export default App;
