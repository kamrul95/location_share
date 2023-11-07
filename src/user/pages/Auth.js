import React, { useContext, useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/card/Card";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext)
  const [formState, inputHandler, setFormData] = useForm(
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

  const [isLoadingMode, setIsLoadingMode] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login();
  };

  const handleToggle = (e) => {
    if(!isLoadingMode) {
      setFormData( {
        ...formState.inputs, 
        name: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false)
    }
    setIsLoadingMode((prevState) => !prevState);
  };
  return (
    <Card className="authentication">
      <h2>{isLoadingMode ? "Login Required" : "Sign Up For Free"}</h2>
      <form onSubmit={handleLogin} className="authentication_form">
        {!isLoadingMode && (
          <Input
            element="input"
            id="name"
            label="Name"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name"
            onInput={inputHandler}
          />
        )}

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
        <Button type="submit" disabled={!formState.isValid}>
          {isLoadingMode ? "Login" : "Sign Up"}
        </Button>
        <Button inverse onClick={handleToggle}>
          {isLoadingMode ? "Switch To Sign Up" : "Switch to Login"}
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
