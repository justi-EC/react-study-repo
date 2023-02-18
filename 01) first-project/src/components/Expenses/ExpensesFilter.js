import "./ExpensesFilter.css";
import React from "react";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value); //부모의 filterChangeHandler 호출
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>연도 필터</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
