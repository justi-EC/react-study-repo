import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">리스트를 추가하세요.</h2>;
  }
  //부모에서 전달받은 필터링된 객체의 길이가 0일경우 '빈 리스트' 메세지 출력

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} //새로 추가하는 리스트가 어느 위치에 추가되어야 하는지 알려주기 위한 고유값 (키값)
          title={expense.title} //목록의 아이템을 매핑할 때는 항상 key값을 추가해야한다!
          amount={expense.amount}
          date={expense.date}
        />
        //필터링된 리스트 객체를 동적으로 ExpenseItem 컴포넌트에 넘겨주기 위한 map
      ))}
    </ul>
  );
};

export default ExpensesList;
