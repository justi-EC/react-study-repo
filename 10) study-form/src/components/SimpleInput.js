import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isTouched, setIsTouched] = useState(false); // Input값의 유효성을 렌더링 하자마자 true로 설정해놓는건 자연스럽지 않음..
  

  const isValid = enteredName.trim() !== "";
  // 입력값이 공백과 같지 않다면 (입력값이 있다면) isValid는 true
  // 입력값이 공백과 같다면 isValid는 false

  const nameInputIsInvalid = !isValid && isTouched;
  //공란일때 제출을 누르면 touch는 true, valid는 false ===> 유효하지 않음
  //내용을 입력하고 제출을 누르면 touch는 true, valid는 true ===> 유효함

  let formIsValid =false;

    if (isValid) {
      formIsValid = true;
    }

  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const onBlurHandler = (e) => {
    setIsTouched(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsTouched(true);
    if (!isValid) return;

    console.log(enteredName);

    setEnteredName("");
    setIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">이름을 입력하세요.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>제출</button>
      </div>
    </form>
  );
};

export default SimpleInput;
