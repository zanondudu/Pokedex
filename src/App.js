  import React from "react";
import "./App.scss";
import store from './store/index'
import { Provider } from 'react-redux';
import "./components/Navbar/ Navbar"
import Pokedex from './layouts/Pokedex/Pokedex';

function App() {
  return (
    <div className="App vermelho">
      <Provider store={store}> 
        <Pokedex />
      </Provider>
    </div>
  );
}

export default App;
