
import { useState, useEffect } from "react";

const useFetchWithCache = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem(url);
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          localStorage.setItem(url, JSON.stringify(result)); // Cache data
          setLoading(false);
        });
    }
  }, [url]);

  return { data, loading };
};

// Usage in a component
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetchWithCache(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div>Data: {JSON.stringify(data, null, 2)}</div>;
      <button onClick={() => setCount((p) => p + 1)}>add : {count}</button>
    </div>
  );
};

export default MyComponent;
