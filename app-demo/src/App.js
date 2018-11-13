import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Header from "./redux-demo/Header";
import Content from "./redux-demo/Content";
import { Provider } from "./redux-demo/connect";
import { createStore } from "redux";

/* function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  const getState = () => state;
  dispatch({}); // 初始化 state
  return { getState, dispatch, subscribe };
}  redux 实现原理 */
const themeReducer = (state, action) => {
  if (!state)
    return {
      themeColor: "red"
    };
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};
const store = createStore(themeReducer);

class App extends Component {
  /*  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return { store };
  }  这里需要整合到connect.js中 */
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Header />
          <Content />
        </Provider>
      </div>
    );
  }
}

export default App;
