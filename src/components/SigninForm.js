import React, { useState } from "react";
import styled from "styled-components";
import useChange from "../hooks/useChange";
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
export const Btn = styled.button`
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
`;
const Form = styled.form`
  color: #283593;
  padding: 30px 20px;
  box-sizing: border-box;

  width: 400px;
  height: 400px;
  background: #fff;

  border-radius: 5px;
  box-shadow: 3px 3px 10px gray;

  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: end;
    margin-right: 0px;
  }
`;

export default function SigninForm() {
  const [email, onChangeEmail] = useChange("");
  const [nickName, onChangeNickName] = useChange("");
  const [password, onChangePassword] = useChange("");
  const [check, setCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangeCheck = (e) => {
    setCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (check !== password) {
      return setPasswordError(true);
    }
    console.log(email, nickName, password);
  };
  return (
    <Form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <FormGroup>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          name="nickname"
          value={nickName}
          onChange={onChangeNickName}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="passwordl">비밀번호</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="check">비밀번호확인</label>
        <input
          type="password"
          name="check"
          value={check}
          onChange={onChangeCheck}
        />
        {passwordError && <small>비밀번호가 일치하지 않아요</small>}
      </FormGroup>
      <Btn type="submit">회원가입</Btn>
    </Form>
  );
}
