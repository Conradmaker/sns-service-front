import React from "react";
import Layout from "../components/Layout";
import Start from "../components/Start";
import Post from "../components/Post";

export default function Main() {
  return (
    <>
      <Layout>
        <Start />
        <Post />
      </Layout>
    </>
  );
}
