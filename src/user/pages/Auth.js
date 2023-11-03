import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/card/Card";
import { useForm } from "../../shared/hooks/form-hook";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formState)
  }
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <form onSubmit={handleLogin} className="authentication_form">
        <Input
          element="input"
          id="email"
          label="Email"
          type="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />

        <Input
          element="input"
          id="password"
          label="Password"
          type="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a password on minimum 5 Char"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>Login</Button>
      </form>
    </Card>
  );
};

export default Auth;
