  import React from "react";
import "./App.scss";
import store from './store/index'
import { Provider } from 'react-redux';
import "./components/Navbar/ Navbar"
import Pokedex from './layouts/Pokedex/Pokedex';
import { BrowserView, MobileView} from "react-device-detect";

function App() {
  return (
    <Provider store={store}> 
      <BrowserView>
        <h1> Abra no celular </h1>
      </BrowserView>
      <MobileView>
        <div className="App vermelho">
          <Pokedex />
        </div>
      </MobileView>
    </Provider>
  );
}

export default App;
