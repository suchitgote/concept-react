// import React, { useState, useEffect } from 'react';

import { useEffect, useState } from "react";

// Higher-Order Component for data fetching
const WithDataFetching = (url) => (WrappedComponent) => {
  return function DataFetchingComponent(props){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    // Render loading, error, or the wrapped component with fetched data
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

// Sample component that will receive the fetched data
const DataDisplay = ({ data, name }) => {
  return (
    <div>
      <h2>Fetched Data:{name} </h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Wrap the component with the data fetching HOC
const DataFetchingComponent = WithDataFetching(
  "https://jsonplaceholder.typicode.com/users"
)(DataDisplay);


// Main App component to demonstrate usage
const App = () => {
    return (
      <div>
        <h1>Data Fetching with HOC</h1>
        <DataFetchingComponent />
      </div>
    );
  };
  
  export default App;
