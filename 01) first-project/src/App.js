import React, { useState } from "react";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EX = [
  {
    id: "e1",
    title: "휴지",
    amount: "94000",
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "TV", amount: "799000", date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "자동차 보험",
    amount: "294000",
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "나무 책상",
    amount: "450000",
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EX); //expenses는 사용자가 입력한 정보들의 객체 배열

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  //setExpenses에 최종적으로 입력된 객체 정보를 저장하는데,
  //이때 prevExpenses는 이미 expenses에 저장된 객체들
  //이미 있던 객체들에 새로 자식에서 넘겨받은 expense를 연결해서 리턴

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
