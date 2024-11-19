import React from 'react';

// Higher-Order Component for errorHandling
const withErrorBoundary = (WrappedComponent, FallbackComponent) => {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // Log the error to an error reporting service
      console.error("Error caught by ErrorBoundary: ", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        // Render the fallback UI
        return <FallbackComponent />;
      }

      // Render the wrapped component
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Fallback component to display when an error is caught
const ErrorFallback = () => {
  return (
    <div style={{backgroundColor : 'red' , padding : '20px'}}>
      <h2>Something went wrong.</h2>
      <p>Please try again later.</p>
    </div>
  );
};

// Sample component that may throw an error
const ProblematicComponent = ({ name }) => {
  if (!name) {
    throw new Error("Name prop is required!");
  }
  return  (<div style={{backgroundColor : 'blue' , padding : '20px'}} >
    <h1 >Hello, {name}!</h1>
  </div>)
};

// Wrap the component with the error boundary HOC
const SafeComponent = withErrorBoundary(ProblematicComponent, ErrorFallback);

// Main App component to demonstrate usage
const App = () => {
  return (
    <div>
      <h1>Error Handling with HOC</h1>
      {/* Passing a valid name prop */}
      <SafeComponent name="Suchit 1" />

      {/* Not passing a name prop, which will trigger an error */}
      <SafeComponent />
    </div>
  );
};

export default App;
