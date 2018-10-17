import React, { Component } from 'react';
import {Provider} from "react-redux";
import './App.css';

import store from "./config/store";
import Main from "./containers/Main";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
