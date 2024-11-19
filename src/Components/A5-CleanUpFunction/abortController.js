// Use AbortController for Fetch Requests : 
// Using AbortController allows you to cancel the fetch request if the component unmounts, avoiding memory leaks from unhandled fetch operations.

import React, { useState, useEffect } from "react";

const AsyncComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal: controller.signal })
      .then((response) => response.json())
      .then((result) => {
        console.log("fetch call result =",  result);
        setData("data fetch"); 
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
        }
      });

    return () => {
      controller.abort(); // Cleanup flag when component unmounts
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
