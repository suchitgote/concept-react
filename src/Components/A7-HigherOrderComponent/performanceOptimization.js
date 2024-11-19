import React, { useMemo } from 'react';

// Higher-Order Component for optimizing data processing
const withDataProcessingOptimization = (WrappedComponent) => {
  return React.memo((props) => {
    // Memoize the filtered and sorted data
    const processedData = useMemo(() => {
      console.log('Filtering and sorting data...');
      const filteredData = props.data.filter(item => item.isActive);
      const sortedData = filteredData.sort((a, b) => a.value - b.value);
      return sortedData;
    }, [props.data]);

    // Pass the processed data to the wrapped component
    return <WrappedComponent {...props} data={processedData} />;
  });
};

// Sample component that will use the HOC
const DataList = ({ data }) => {
  return (
    <div>
      <h2>Processed Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

// Wrap the component with the HOC
const OptimizedDataList = withDataProcessingOptimization(DataList);

// Main App component to demonstrate usage
const App = () => {
  // Example data set
  const data = [
    { id: 1, name: 'Item 1', value: 30, isActive: true },
    { id: 2, name: 'Item 2', value: 20, isActive: false },
    { id: 3, name: 'Item 3', value: 10, isActive: true },
    { id: 4, name: 'Item 4', value: 40, isActive: true },
  ];

  return (
    <div>
      <h1>Data Processing Optimization with HOC</h1>
      <OptimizedDataList data={data} />
    </div>
  );
};

export default App;
