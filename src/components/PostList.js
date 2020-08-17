import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";

const ListContainer = styled.div`
  flex: 3;
  height: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function PostList() {
  return (
    <ListContainer>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </ListContainer>
  );
}
