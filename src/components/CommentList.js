import React from "react";
import styled from "styled-components";

const CommentItem = styled.li`
  padding: 10px 0;
  margin: 5px 0;
  border-bottom: 0.5px solid #e5e5e5;
`;

const CommentBox = styled.ul`
  max-height: 200px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  padding: 5px 25px;
  h1 {
    font-size: 14px;
    margin-left: 5px;
  }
`;
export default function CommentList() {
  return (
    <CommentBox>
      <h1>댓글목록</h1>
      <CommentItem>
        <strong>Conrad</strong>
        <span> 안녕하세요</span>
      </CommentItem>
      <CommentItem>
        <strong>Conrad</strong>
        <span> 안녕하세요</span>
      </CommentItem>
      <CommentItem>
        <strong>Conrad</strong>
        <span> 안녕하세요</span>
      </CommentItem>
      <CommentItem>
        <strong>Conrad</strong>
        <span> 안녕하세요</span>
      </CommentItem>
      <CommentItem>
        <strong>Conrad</strong>
        <span> 안녕하세요</span>
      </CommentItem>
      <CommentItem>
        <strong>Conrad</strong>
        <span> 안녕하세요</span>
      </CommentItem>
    </CommentBox>
  );
}
