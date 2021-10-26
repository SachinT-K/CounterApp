import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    document.title = "Clicked ${count} times";
  });

  const handleClick = function () {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button className="btn" onClick={handleClick}>
        Clicked {count} times.
      </button>
    </div>
  );
}
