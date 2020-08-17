import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../modules/user";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  label {
    font-size: 15px;
    color: #7986cb;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 1.4px solid #7986cb;
    font-size: 20px;
    color: #283593;
    padding: 5px 0;
  }
  small {
    font-size: 14px;
    padding-top: 5px;
    color: red;
  }
`;

const Form = styled.form`
  color: #283593;
  padding: 30px 20px;
  box-sizing: border-box;

  width: 400px;
  height: 250px;
  background: #fff;

  border-radius: 5px;
  box-shadow: 3px 3px 10px gray;
  position: relative;

  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: end;
    margin-right: 0px;
  }

  button {
    background: #90caf9;
    color: #1565c0;
    padding: 5px 20px;
    font-size: 23px;
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 8px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
      transform: translate(-50%, 35%);
    }
  }
`;

export default function LoginForm() {
  const dispatch = useDispatch();
  const initialState = { email: "", password: "" };
  const [inputs, setInputs] = useState(initialState);
  const { email, password } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(inputs));
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Log In</h1>
      <FormGroup>
        <label htmlFor="email">이메일</label>
        <input type="email" name="email" value={email} onChange={onChange} />
      </FormGroup>

      <FormGroup>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </FormGroup>
      <button>여행을 떠나볼까요?</button>
    </Form>
  );
}
