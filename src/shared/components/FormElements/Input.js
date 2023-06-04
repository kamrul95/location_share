import React, { useEffect } from "react";

import { validate } from "../../util/validators";

import { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCHED":
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isValid: props.isValid || false,
    touched: false,
  });
  const { onInput, id } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };
  const touchedHandler = () => {
    dispatch({
      type: "TOUCHED",
    });
  };
  const element = props.element ? (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeHandler}
      value={inputState.value}
      onBlur={touchedHandler}
    />
  ) : (
    <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={changeHandler}
      value={inputState.value}
      onBlur={touchedHandler}
    />
  );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.touched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.touched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
