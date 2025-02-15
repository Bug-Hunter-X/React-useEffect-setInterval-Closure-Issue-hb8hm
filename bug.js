```javascript
// In a React component

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect use of setInterval. The closure is not updated, it always refers to the initial value of count
    const intervalId = setInterval(() => {
      console.log(count); // Always logs 0
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

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