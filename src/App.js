import React, { useState, useEffect } from "react";
import "./App.scss";
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
      <div className="App-link">
        {text}
        <div className="vermelho">
          <Button onClick={() => setText("bergamota")}>{text}</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
