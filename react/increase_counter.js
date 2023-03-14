import * as React from "react";
import "./styles.css";

const {useState} = React;

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>

      </h1>
      <p>
        {counter}
      </p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}> Increase Counter</button>
    </div>
  )
}