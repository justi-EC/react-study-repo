import { createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

export const INCREMENT = "increment";

const counterInit = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInit,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions; //고유 액션 식별자들을 자동으로 생성하고 내보냄. 여기서 식별자는 slice 내부의 함수 명이 됨.

/* const counterReducer = (state = counterInit, action) => {       //toolkit을 이용하지 않고 reducer함수 사용하는 방법
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
}; */
// const store = createStore(counterReducer);               //createStore은 하나의 reducer함수만 전달해야함.

export default counterSlice.reducer;
