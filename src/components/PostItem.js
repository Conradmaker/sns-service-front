import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  height: 10rem;
  margin: 20px auto;
  padding: 15px;
  border-radius: 5px;
  border-bottom: 1px solid #90caf9;
  position: relative;
  line-height: 1.3;
  overflow: hidden;
  h1 {
    color: #283593;
    font-size: 24px;
    font-weight: 700;
  }
  h2 {
    font-size: 18px;
    margin: 10px 0;
  }
  p {
    color: #283593;
  }
  .read-more a {
    color: #5d99c6;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export default function PostItem() {
  return (
    <Card>
      <h1>유원근</h1>
      <h2>2015.08.14</h2>
      <p>
        대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계
        국무위원이 부서한다. 군사에 관한 것도 또한 같다. 국무위원은 국정에
        관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다.
        국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로
        폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지
      </p>
      <p class="read-more">
        {/* eslint-disable-next-line */}
        <a href="#">Read More</a>
      </p>
    </Card>
  );
}
