import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";

class AppClass extends Component {
  constructor(props) {
    super(props);

    console.warn("chamei o componente");
    this.state = {
      text: "batata"
    };
  }

  componentDidMount() {
    console.warn("terminei de nascer");
    // http requests
  }

  componentDidUpdate(prevProps, prevState) {
    console.warn("terminei de atualizar", prevState, this.state);
  }

  shouldComponentUpdate(prevProps, prevState) {
    // this.forceUpdate();
    return false;
  }

  componentWillUnmount() {
    console.warn("morri");
  }

  onClickButton = () => {
    this.setState(
      prevState => ({
        ...prevState,
        text: "bergamota"
      }),
      () => {
        console.warn("texto novo", this.state.text);
      }
    );
  };

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        {text}
      </div>
    );
  }
}

export default AppClass;
