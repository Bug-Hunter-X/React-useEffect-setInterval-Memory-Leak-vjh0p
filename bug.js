```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The callback function creates a new interval each time it runs,
    // leading to multiple intervals running concurrently.
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Missing cleanup function to stop the interval when the component unmounts.
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```