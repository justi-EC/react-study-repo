import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "../Css/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const onAddClickHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enterdAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "유효하지 않은 입력",
        message: "이름이나 나이를 입력하지 않았습니다.",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "유효하지 않은 입력",
        message: "0보다 큰 나이를 입력하세요",
      });
      return;
    }
    props.onAddUser(enteredName, enterdAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={onAddClickHandler}>
          <label htmlFor="username">이름</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="userage">나이</label>
          <input id="userage" type="number" ref={ageInputRef}></input>
          <Button type="submit">사용자 추가</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
