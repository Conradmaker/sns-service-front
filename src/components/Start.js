import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import BannerImg from "../assets/banner.jpg";
import LoginForm from "./LoginForm";
import SigninForm from "./SigninForm";

const LoginPositioner = styled.div`
  position: absolute;
  top: 180px;
  right: 100px;
`;

const bling = keyframes`
from{
  text-shadow:none
}
to{
text-shadow: 0 0 10px white;
}
`;

const Banner = styled.div`
  background-image: url(${BannerImg});
  background-position: bottom;
  background-size: cover;
  width: 100%;
  height: 100vh;

  position: relative;

  span {
    position: absolute;
    bottom: 50px;
    right: 50%;
    transform: translateX(50%);
    color: #b4bac1;
    font-size: 25px;
    animation: ${bling} 1s ease-in-out alternate infinite;
  }
`;
const LogBtn = styled.div`
  position: absolute;
  top: 38.5%;
  right: 44%;
  font-size: 23px;
  font-weight: bold;
  color: #283593;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;
const SignBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 59.5%;
  font-weight: bold;
  color: #283593;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;
const PostAddBtn = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #90caf9;
  color: #1565c0;
  font-size: 30px;
  font-weight: bold;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 10px #5d99c6;
  cursor: pointer;
  z-index: 20;
`;
export default function Start() {
  const [signOpen, setSignOpen] = useState(false);
  const [logOpen, setLogOpen] = useState(false);
  const changeLogin = () => {
    setSignOpen(false);
    setLogOpen(!logOpen);
  };
  const changeSignin = () => {
    setLogOpen(false);
    setSignOpen(!signOpen);
  };
  return (
    <>
      <Banner>
        <LoginPositioner>
          {logOpen && <LoginForm />}
          {signOpen && <SigninForm />}
        </LoginPositioner>
        <LogBtn onClick={changeLogin}>로그인</LogBtn>
        <SignBtn onClick={changeSignin}>회원가입</SignBtn>
        <span>- Go Down -</span>
      </Banner>
      <PostAddBtn>Post</PostAddBtn>
    </>
  );
}
