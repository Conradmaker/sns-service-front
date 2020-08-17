import React from "react";
import styled from "styled-components";
import PostList from "./PostList";
import About from "./About";

const PostContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;
export default function Post() {
  return (
    <PostContainer>
      <PostList />
      <About />
    </PostContainer>
  );
}
