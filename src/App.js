import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [text, setText] = useState("batata");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.warn("componentDidMount");
    setMounted(true);

    return () => {
      console.warn("componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    // também é didMount
    if (mounted) {
      console.warn("componentDidUpdate", text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className="App">
      {text}
      <Button onClick={() => setText("bergamota")}>{text}</Button>
    </div>
  );
}

export default App;
