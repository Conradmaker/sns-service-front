import React from "react";
import styled from "styled-components";
import useChange from "../hooks/useChange";
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
    margin-bottom: 5px;
  }
  textarea {
    border: 0.3px solid lightgray;
    align-self: center;
    outline: none;
  }
`;

const Form = styled.form`
  border-top: 0.5px solid #e5e5e5;
  box-sizing: border-box;
  margin: 0 30px;
  padding: 15px 0;
  width: 90%;
  button {
    width: 100%;
    border: none;
    border-bottom: 0.5px solid #e5e5e5;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 5px;
  }
`;
export default function CommentForm() {
  const [commentText, onChangeCommentText] = useChange("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(commentText);
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <label htmlFor="comment">댓글작성</label>
        <textarea
          onChange={onChangeCommentText}
          value={commentText}
          name="comment"
          id="comment"
          cols="85"
          rows="5"
        ></textarea>
      </FormGroup>
      <button type="submit">등록</button>
    </Form>
  );
}
