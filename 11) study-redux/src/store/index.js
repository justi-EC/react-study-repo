import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: { counter: countReducer, auth: authReducer },
});
//configureStore은 여러개의 reducer함수를 하나의 reducer함수로 합칠 수 있음

export default store;
