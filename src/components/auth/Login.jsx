import { useState } from "react";
import { Button } from "../UI/Button";
import { FormInput } from "../UI/FormInput";
import styled from "styled-components";

export const Login = ({ onLoginUser }) => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();

  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const hendlrSubmitValue = (event) => {
    event.preventDefault();
    const userData = {};

    if (inputEmail.includes("@gmail.com")) {
      userData.email = inputEmail;
    } else {
      return setIsEmailValid("Почта не корректно!");
    }

    if (inputPassword.password.length > 6 && inputPassword.length < 10) {
      userData.password = inputPassword;
    } else {
      return setIsPasswordValid("Пароль не корректно!");
    }
    onLoginUser({ ...userData, id: Data.now().toString() });
  };

  return (
    <StyledForm onSubmit={hendlrSubmitValue}>
      <FormInput
        inputType="email"
        labelText="Email"
        id="userEmail"
        onChange={handleEmailChange}
      />
      {isEmailValid && <ErrorMessage>{isEmailValid}</ErrorMessage>}

      <FormInput
        inputType="password"
        labelText="Password"
        id="userPassword"
        onChange={handlePasswordChange}
      />
      {isPasswordValid && <ErrorMessage>{isPasswordValid}</ErrorMessage>}

      <Button type="submit">Войти</Button>
    </StyledForm>
  );
};
const StyledForm = styled("form")`
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0 30px 0 30px;

  input {
    max-width: 100%;
    border: 1px solid grey;
  }
  button {
    width: 100%;
  }
  label {
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
`;

const ErrorMessage = styled("p")`
  font-size: 14px;
  font-weight: 300px;
  color: red;
`;
