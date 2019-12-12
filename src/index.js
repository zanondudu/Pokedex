import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import AppClass from "./AppClass";
import Button from "./components/Button";
import * as serviceWorker from "./serviceWorker";

const AppTest = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Button color="yellow" onClick={() => setShow(!show)}>
        toggle
      </Button>
      {show && <App />}
    </>
  );
};

ReactDOM.render(<AppTest />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
