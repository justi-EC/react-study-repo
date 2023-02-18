import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/index";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
); //store프롭으로 저장소의 단서를 제공
