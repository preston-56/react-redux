import React from "react";
import HelloWorld from "./hello/HelloWorld";
//import reducer
import reducer from "./reducers/index";
import { legacy_createStore as createStore } from "redux";

const initialState = "React";
const store = createStore(reducer, initialState);

const App = () => {
  return <HelloWorld tech={store.getState()} />;
};

export default App;