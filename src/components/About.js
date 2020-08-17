import React from "react";
import styled from "styled-components";
const UserInfo = styled.div`
  span {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #283593;
    border-bottom: 0.5px solid #283593;
  }
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
`;

const Summary = styled.div`
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e6ecf4;
  position: relative;
  h1 {
    font-size: 30px;
    padding: 10px 0;
    font-weight: 700;
  }
  h2 {
  }
`;

const AboutCard = styled.div`
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 1px 5px #90caf9;
  color: #283593;
`;

const AboutContainer = styled.div`
  box-sizing: border-box;
  padding: 80px 20px 30px 20px;
  position: relative;
  height: 100%;
  flex: 2;
`;
export default function About() {
  return (
    <AboutContainer>
      <AboutCard>
        <Summary>
          <h1>나는 전설이다</h1>
          <h2>2020.06.01</h2>
          <UserInfo>
            <span>Conrad</span>
            <button>Follow</button>
            <button>UnFollow</button>
          </UserInfo>
        </Summary>
      </AboutCard>
    </AboutContainer>
  );
}
