import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Main = styled.main`
  width: 100%;
`;

const RightMenu = styled.div`
  padding: 0px 20px 0px 0px;
  ul {
    display: flex;
    align-content: center;
    a {
      color: #283593;
      font-weight: 600;
      padding: 5px 10px;
      &:hover {
        color: #2962ff;
      }
    }
  }
`;

const LeftMenu = styled.div`
  padding: 0px 0px 0px 20px;
  i {
    display: block;
    height: 50px;
    width: 120px;
    background-image: url(${Logo});
    background-position: center;
    background-size: cover;
  }
`;

const Header = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e8eaf6;
  color: #283593;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
export default function Layout({ children }) {
  return (
    <div>
      <Header>
        <LeftMenu>
          <i></i>
        </LeftMenu>
        <RightMenu>
          <ul>
            <Link to="/">HOME</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/login">로그인</Link>
            <Link to="/profile">프로필</Link>
          </ul>
        </RightMenu>
      </Header>
      <Main>{children}</Main>
    </div>
  );
}
