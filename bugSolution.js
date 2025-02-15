```javascript
// In a React component

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(count); // Now logs the updated value of count
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]); // Add count to dependency array

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```