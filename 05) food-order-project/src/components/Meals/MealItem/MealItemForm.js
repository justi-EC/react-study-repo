import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsVaild, setAmountIsVaild] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value; //Input에서 가져온 요소 문자열
    const enteredAmountNumber = +enteredAmount; // 문자열을 숫자로

    if (
      //유효성 검사
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsVaild(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber); //수량만 있고 id/이름/가격 등은 없기 때문에 Context가 아니라 props로 전달
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="수량"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>추가</button>
      {!amountIsVaild && <p>제대로 입력 ㄱ</p>}
    </form>
  );
};

export default MealItemForm;
