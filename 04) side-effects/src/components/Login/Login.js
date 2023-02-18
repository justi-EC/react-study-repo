import React, { useContext, useReducer, useState } from "react";
import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isVaild: action.payload.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isVaild: state.value.includes("@") };
  }
  return { value: "", isVaild: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isVaild: action.payload.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isVaild: state.value.trim().length > 6 };
  }
  return { value: "", isVaild: false };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInit = {
    value: "",
    isVaild: null,
  };
  const passwordInit = {
    value: "",
    isVaild: null,
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, emailInit);
  const [passwordState, dispatchPassWard] = useReducer(
    passwordReducer,
    passwordInit
  );

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("check");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 1000);
  //   return () => {
  //     console.log("clean up");
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value }); // dispatch action
    setFormIsValid(event.target.value.includes("@") && passwordState.isVaild);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassWard({ type: "USER_INPUT", payload: event.target.value });
    setFormIsValid(emailState.isVaild && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassWard({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  const ctx = useContext(AuthContext);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isVaild={emailState.isVaild}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isVaild={passwordState.isVaild}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
